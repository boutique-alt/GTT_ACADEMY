import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/info/BlogPostContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";
import { blogPosts, getBlogPost } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog | GTT Academy" };
  return {
    title: `${post.title} | GTT Academy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <InfoPageHero title="Blogs" image="/images/about-banner.png" imageAlt={post.title} />
      <BlogPostContent post={post} />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
