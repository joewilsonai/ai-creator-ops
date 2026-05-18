import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialArticle } from '@/components/editorial-page';
import { getGuidePage, guidePages } from '@/lib/editorial';

const baseUrl = 'https://aicreatorops.com';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${baseUrl}${page.canonicalPath}` },
    openGraph: {
      title: page.shortTitle,
      description: page.description,
      url: `${baseUrl}${page.canonicalPath}`,
      type: 'article'
    }
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) notFound();
  return <EditorialArticle page={page} />;
}
