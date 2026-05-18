import * as fs from 'node:fs';
import * as path from 'node:path';

type Row = {
  query?: string;
  page?: string;
  path?: string;
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
  views?: number;
  visitors?: number;
};

type MonitoringSnapshot = {
  date: string;
  searchConsole?: {
    clicks?: number;
    impressions?: number;
    ctr?: number;
    position?: number;
    indexedPages?: number;
    topQueries?: Row[];
    topPages?: Row[];
  };
  analytics?: {
    visitors?: number;
    pageviews?: number;
    topPages?: Row[];
    referrers?: Row[];
  };
  notes?: string[];
};

const monitoringDir = path.join(process.cwd(), 'data', 'monitoring');

function numberOrZero(value: number | undefined): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function formatDelta(current: number | undefined, previous: number | undefined, suffix = ''): string {
  if (current === undefined) return 'n/a';
  if (previous === undefined) return `${current.toLocaleString()}${suffix}`;
  const delta = current - previous;
  const sign = delta > 0 ? '+' : '';
  return `${current.toLocaleString()}${suffix} (${sign}${delta.toLocaleString()}${suffix})`;
}

function loadSnapshots(): MonitoringSnapshot[] {
  if (!fs.existsSync(monitoringDir)) return [];

  return fs.readdirSync(monitoringDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const fullPath = path.join(monitoringDir, file);
      return JSON.parse(fs.readFileSync(fullPath, 'utf8')) as MonitoringSnapshot;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

function tableRows(rows: Row[] | undefined, label: 'query' | 'page' | 'path'): string[] {
  if (!rows?.length) return ['- none provided'];

  return rows.slice(0, 10).map((row, index) => {
    const name = row[label] ?? row.page ?? row.path ?? row.query ?? 'unknown';
    const clicks = row.clicks !== undefined ? `, ${row.clicks} clicks` : '';
    const impressions = row.impressions !== undefined ? `, ${row.impressions} impressions` : '';
    const position = row.position !== undefined ? `, pos ${row.position}` : '';
    const views = row.views !== undefined ? `, ${row.views} views` : '';
    return `${index + 1}. ${name}${clicks}${impressions}${position}${views}`;
  });
}

function recommendations(current: MonitoringSnapshot): string[] {
  const recs: string[] = [];
  const topQueries = current.searchConsole?.topQueries ?? [];
  const topPages = current.searchConsole?.topPages ?? [];

  const almostThere = topQueries
    .filter((row) => numberOrZero(row.position) >= 8 && numberOrZero(row.position) <= 30)
    .slice(0, 3)
    .map((row) => row.query)
    .filter(Boolean);

  if (almostThere.length) {
    recs.push(`Refresh pages targeting almost-there queries: ${almostThere.join(', ')}.`);
  }

  const highImpressionLowCtr = topQueries
    .filter((row) => numberOrZero(row.impressions) >= 50 && numberOrZero(row.ctr) < 0.02)
    .slice(0, 3)
    .map((row) => row.query)
    .filter(Boolean);

  if (highImpressionLowCtr.length) {
    recs.push(`Rewrite titles/meta or add answer blocks for high-impression low-CTR queries: ${highImpressionLowCtr.join(', ')}.`);
  }

  const pageCandidates = topPages
    .filter((row) => numberOrZero(row.position) >= 8 && numberOrZero(row.position) <= 30)
    .slice(0, 3)
    .map((row) => row.page ?? row.path)
    .filter(Boolean);

  if (pageCandidates.length) {
    recs.push(`Add internal links into pages sitting near page one: ${pageCandidates.join(', ')}.`);
  }

  if (!recs.length) {
    recs.push('Collect one more weekly snapshot, then prioritize pages with rising impressions and weak CTR.');
  }

  return recs;
}

const snapshots = loadSnapshots();

if (!snapshots.length) {
  console.log(`No monitoring snapshots found in ${monitoringDir}.`);
  console.log('Add JSON exports using docs/MONITORING.md, then run pnpm traffic:report.');
  process.exit(0);
}

const current = snapshots[snapshots.length - 1];
const previous = snapshots[snapshots.length - 2];

console.log(`# AI Creator Ops growth report — ${current.date}`);
if (previous) console.log(`Compared with ${previous.date}`);
console.log('');
console.log('## Search visibility');
console.log(`- Clicks: ${formatDelta(current.searchConsole?.clicks, previous?.searchConsole?.clicks)}`);
console.log(`- Impressions: ${formatDelta(current.searchConsole?.impressions, previous?.searchConsole?.impressions)}`);
console.log(`- CTR: ${formatDelta(current.searchConsole?.ctr, previous?.searchConsole?.ctr, '%')}`);
console.log(`- Average position: ${formatDelta(current.searchConsole?.position, previous?.searchConsole?.position)}`);
console.log(`- Indexed pages: ${formatDelta(current.searchConsole?.indexedPages, previous?.searchConsole?.indexedPages)}`);
console.log('');
console.log('## On-site analytics');
console.log(`- Visitors: ${formatDelta(current.analytics?.visitors, previous?.analytics?.visitors)}`);
console.log(`- Pageviews: ${formatDelta(current.analytics?.pageviews, previous?.analytics?.pageviews)}`);
console.log('');
console.log('## Top queries');
console.log(tableRows(current.searchConsole?.topQueries, 'query').join('\n'));
console.log('');
console.log('## Top search pages');
console.log(tableRows(current.searchConsole?.topPages, 'page').join('\n'));
console.log('');
console.log('## Top analytics pages');
console.log(tableRows(current.analytics?.topPages, 'path').join('\n'));
console.log('');
console.log('## Recommended actions');
console.log(recommendations(current).map((rec) => `- ${rec}`).join('\n'));

if (current.notes?.length) {
  console.log('');
  console.log('## Notes');
  console.log(current.notes.map((note) => `- ${note}`).join('\n'));
}
