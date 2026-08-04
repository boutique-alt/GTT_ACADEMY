const LIVE = "https://www.globalteachersacademy.com";

/** Local course routes (mirror live site paths without .php). */
export const coursePath = (...segments: string[]) =>
  `/courses/${segments.map((s) => s.replace(/\.php$/, "")).join("/")}`;

/** Live course page until the local app has that route built. */
const liveCourse = (...segments: string[]) =>
  `${LIVE}/courses/${segments.map((s) => s.replace(/\.php$/, "")).join("/")}.php`;

export const courseGroups = [
  {
    title: "Teacher Training Courses",
    courses: [
      {
        title: "Pre and Primary Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "pre-and-primary-teacher-training-with-practical-session"),
      },
      {
        title: "Montessori Teacher Training with Practical Session",
        href: liveCourse("teacher-training-courses", "montessori-teacher-training-with-practical-session"),
      },
      {
        title: "Diploma in Teaching and Training",
        href: liveCourse("teacher-training-courses", "diploma-in-teaching-and-training"),
      },
      {
        title: "Early Childhood Care and Education",
        href: liveCourse("teacher-training-courses", "early-childhood-care-and-education"),
      },
      {
        title: "Nursery Teacher Training With Practical Session",
        href: liveCourse("teacher-training-courses", "nursery-teacher-training-with-practical-session"),
      },
      {
        title: "Educational Administration and Management",
        href: liveCourse("teacher-training-courses", "educational-administration-and-management"),
      },
      {
        title: "Diploma in Child and Adolescent Counseling",
        href: liveCourse("teacher-training-courses", "diploma-in-child-and-adolescent-counseling"),
      },
      {
        title: "Diploma in Child Psychology",
        href: liveCourse("teacher-training-courses", "diploma-in-child-psychology"),
      },
    ],
  },
  {
    title: "Specialized Courses",
    courses: [
      {
        title: "Diploma in Child and Adolescent Counseling",
        href: liveCourse("specialized-courses", "diploma-in-child-and-adolescent-counseling"),
      },
      {
        title: "Classroom Management Skill",
        href: liveCourse("specialized-courses", "classroom-management-skill"),
      },
      {
        title: "Diploma in Child Psychology",
        href: liveCourse("specialized-courses", "diploma-in-child-psychology"),
      },
      {
        title: "Teaching Grammar",
        href: liveCourse("specialized-courses", "teaching-grammar"),
      },
      {
        title: "Teaching Phonetics",
        href: liveCourse("specialized-courses", "teaching-phonetics"),
      },
      {
        title: "NLP for Students",
        href: liveCourse("specialized-courses", "nlp-for-students"),
      },
    ],
  },
  {
    title: "TEFL/TESOL Online Courses",
    courses: [
      {
        title: "140 Hour TEFL Course Diploma with Practical Teaching Session",
        href: liveCourse("tefl-tesol-online-courses", "140-hour-tefl-course-diploma-with-practical-teaching-session"),
      },
      {
        title: "200 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session",
        href: liveCourse(
          "tefl-tesol-online-courses",
          "200-hour-tesol-course-pg-diploma-with-dual-specialisation-and-practical-teaching-session",
        ),
      },
      {
        title: "400 Hour TESOL Course Masters with Practical Teaching Session",
        href: liveCourse("tefl-tesol-online-courses", "400-hour-tesol-course-masters-with-practical-teaching-session"),
      },
    ],
  },
];

export const courses = [
  {
    title: "Pre and Primary Teacher Training",
    image: "/images/courses/pre-primary.jpg",
    badge: "/images/premium-course.gif",
    href: coursePath("teacher-training-courses", "pre-and-primary-teacher-training-with-practical-session"),
    description:
      "GTT Academy significantly contributes to teacher education, producing quality pre-primary teachers interested in global exposure and challenging teaching conditions worldwide.",
  },
  {
    title: "Montessori Teacher Training",
    image: "/images/courses/montessori.jpg",
    badge: "/images/premium-course.gif",
    href: liveCourse("teacher-training-courses", "montessori-teacher-training-with-practical-session"),
    description:
      "Montessori Teacher Training Course at Global Teacher Training Academy empowers teachers to expand horizons and become trusted aides in learning.",
  },
  {
    title: "Early Childhood Care and Education",
    image: "/images/courses/early-childhood.jpg",
    badge: "/images/popular-course.gif",
    href: liveCourse("teacher-training-courses", "early-childhood-care-and-education"),
    description:
      "In recent years, early childhood education has become more prevalent and has emerged as a global priority in the field of early childhood education.",
  },
  {
    title: "Child Psychology",
    image: "/images/courses/child-psychology.jpg",
    badge: "/images/popular-course.gif",
    href: liveCourse("teacher-training-courses", "diploma-in-child-psychology"),
    description:
      "Diploma in Child Psychology from GTT Academy equips learners with a holistic approach to foster the development of young children from birth to 6 years.",
  },
  {
    title: "Child and Adolescent Counseling",
    image: "/images/courses/counselling.jpg",
    badge: "/images/popular-course.gif",
    href: liveCourse("teacher-training-courses", "diploma-in-child-and-adolescent-counseling"),
    description:
      "Our Diploma in Child and Adolescent Counseling equips learners to foster development and improve physical, emotional, social, and spiritual wellbeing of children and adolescents.",
  },
  {
    title: "Education Administration and Management",
    image: "/images/courses/administration.jpg",
    badge: "/images/premium-course.gif",
    href: liveCourse("teacher-training-courses", "educational-administration-and-management"),
    description:
      "Education Administration and Management course by GTT Academy helps understand administrative functions and manage all departments in any educational institution.",
  },
  {
    title: "Diploma in Teaching and Training",
    image: "/images/courses/teaching-training.jpg",
    badge: "/images/premium-course.gif",
    href: liveCourse("teacher-training-courses", "diploma-in-teaching-and-training"),
    description:
      "The Diploma in Teaching and Training equips educators to become exceptional teacher trainers, curriculum developers,or examiners, shaping the future of education.",
  },
  {
    title: "TESOL",
    image: "/images/courses/tesol.jpg",
    badge: "/images/premium-course.gif",
    href: liveCourse("tefl-tesol-online-courses", "140-hour-tefl-course-diploma-with-practical-teaching-session"),
    description:
      "Our TESOL courses are competently designed programs that enable you to learn beyond the norm and get access to the international teaching industry.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Career Opportunities", href: "/career" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "FAQ", href: "/faq" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact us", href: "/contact" },
];

export const usefulLinks = [
  { label: "Tutor Support & Assessment", href: `${LIVE}/tutor-support-assessment.php` },
  { label: "Job Opportunities & Placement support", href: `${LIVE}/Job-opportunities-placement-support.php` },
  { label: "Franchise Opportunity", href: `${LIVE}/franchise-opportunity.php` },
  { label: "About Us", href: "/about" },
  { label: "Career Opportunities", href: "/career" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Courses", href: "/#courses" },
];

export const quickLinks = [
  { label: "Privacy Policy", href: `${LIVE}/privacy-policy.php` },
  { label: "Terms and Conditions", href: `${LIVE}/terms-conditions.php` },
  { label: "Payment", href: `${LIVE}/payment.php` },
  { label: "Payment Terms and Conditions", href: `${LIVE}/payment-terms-and-conditions.php` },
  { label: "Refund", href: `${LIVE}/refund.php` },
  { label: "FAQ", href: "/faq" },
  { label: "Alumni", href: "/alumni" },
  { label: "Blogs", href: `${LIVE}/blog.php` },
];

export const applyNowHref = "/apply-now" as const;
export const contactHref = "/contact";
export const alumniHref = "/alumni";
export const thankYouHref = "/thank-you";
export const acknowledgementsHref = `${LIVE}/acknowledgements.php`;

export const branches = [
  "Guwahati",
  "Pune",
  "Kolkata",
  "Mysore",
  "Kerala",
  "Delhi",
  "Bangalore",
  "Hyderabad",
];
