import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/home/CourseCard";
import { courses } from "@/data/site";

export default function Courses() {
  return (
    <section id="courses" className="bg-brand-gradient-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learn. Grow. Lead."
          title="Our Featured Courses"
          description="Choose from our extensive range of flexible teaching courses, created for aspiring and in-service teachers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
