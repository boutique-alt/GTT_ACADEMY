import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { blogPosts } from "@/data/blog";

export default function BlogContent() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">Blogs</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">
            Insights on teacher training, Montessori, child psychology and building a teaching career with GTT Academy.
          </p>
          <div className="mt-8 space-y-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-[#05245b]">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-[#0045bc]">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0045bc] hover:underline"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </article>
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
