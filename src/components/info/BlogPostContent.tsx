import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import type { BlogPost } from "@/data/blog";

type BlogPostContentProps = {
  post: BlogPost;
};

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-sm font-semibold text-[#0045bc]">
            <Link href="/blog" className="hover:underline">
              Blogs
            </Link>
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">{post.title}</h2>
          <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}
          </div>
          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
