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
        title: "Regular/In-class Pre and Primary Teacher Training Course",
        href: liveCourse("teacher-training-courses", "regular-in-class-pre-and-primary-teacher-training-course"),
      },
      {
        title: "Montessori Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "montessori-teacher-training-with-practical-session"),
      },
      {
        title: "Nursery Teacher Training With Practical Session",
        href: coursePath("teacher-training-courses", "nursery-teacher-training-with-practical-session"),
      },
      {
        title: "Special Education Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "pg-diploma-in-special-education"),
      },
      {
        title: "Early Childhood Care and Education",
        href: coursePath("teacher-training-courses", "early-childhood-care-and-education"),
      },
      {
        title: "Educational Administration and Management",
        href: coursePath("teacher-training-courses", "educational-administration-and-management"),
      },
    ],
  },
  {
    title: "TEFL/TESOL Online Courses",
    courses: [
      {
        title: "120 Hour TEFL Course Diploma with Practical Teaching Session",
        href: liveCourse("tefl-tesol-online-courses", "120-hour-tefl-course-diploma-with-practical-teaching-session"),
      },
      {
        title: "180 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session",
        href: liveCourse(
          "tefl-tesol-online-courses",
          "180-hour-tesol-course-pg-diploma-with-dual-specialisation-and-practical-teaching-session",
        ),
      },
      {
        title: "350 Hour TESOL Course Masters with Practical Teaching Session",
        href: liveCourse("tefl-tesol-online-courses", "350-hour-tesol-course-masters-with-practical-teaching-session"),
      },
      {
        title: "IELTS for Teachers",
        href: coursePath("tefl-tesol-online-courses", "ielts-for-teachers"),
      },
    ],
  },
  {
    title: "Specialized Courses",
    courses: [
      {
        title: "Train the Trainer Program",
        href: coursePath("specialized-courses", "training-the-trainer-program"),
      },
      {
        title: "Classroom Management Skill",
        href: coursePath("specialized-courses", "classroom-management-skill"),
      },
      {
        title: "Teaching Grammar",
        href: coursePath("specialized-courses", "teaching-grammar"),
      },
      {
        title: "Certificate of Language Teaching Online",
        href: liveCourse("specialized-courses", "certificate-of-language-teaching-online"),
      },
      {
        title: "Teaching Phonetics",
        href: coursePath("specialized-courses", "teaching-phonetics"),
      },
      {
        title: "NLP for Students",
        href: coursePath("specialized-courses", "nlp-for-students"),
      },
    ],
  },
  {
    title: "English Proficiency Courses",
    courses: [
      {
        title: "Certificate in English Grammar",
        href: liveCourse("english-proficiency-courses", "certificate-in-english-grammar"),
      },
      {
        title: "English for Academic Purpose",
        href: liveCourse("english-proficiency-courses", "english-for-academic-purpose"),
      },
      {
        title: "English for Business Communication",
        href: liveCourse("english-proficiency-courses", "english-for-business-communication"),
      },
      {
        title: "English for Customer Service",
        href: liveCourse("english-proficiency-courses", "english-for-customer-service"),
      },
      {
        title: "English for Sales and Marketing",
        href: liveCourse("english-proficiency-courses", "english-for-sales-and-marketing"),
      },
    ],
  },
];

/** Sidebar used on course detail pages — matches live course.php sidebars (no English Proficiency). */
export const courseDetailSidebarGroups = [
  {
    title: "Teacher Training Courses",
    courses: [
      {
        title: "Pre and Primary Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "pre-and-primary-teacher-training-with-practical-session"),
      },
      {
        title: "Montessori Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "montessori-teacher-training-with-practical-session"),
      },
      {
        title: "Diploma in Teaching and Training",
        href: coursePath("teacher-training-courses", "diploma-in-teaching-and-training"),
      },
      {
        title: "Early Childhood Care and Education",
        href: coursePath("teacher-training-courses", "early-childhood-care-and-education"),
      },
      {
        title: "Nursery Teacher Training With Practical Session",
        href: coursePath("teacher-training-courses", "nursery-teacher-training-with-practical-session"),
      },
      {
        title: "Special Education Teacher Training with Practical Session",
        href: coursePath("teacher-training-courses", "pg-diploma-in-special-education"),
      },
      {
        title: "Educational Administration and Management",
        href: coursePath("teacher-training-courses", "educational-administration-and-management"),
      },
      {
        title: "Diploma in Child and Adolescent Counseling",
        href: coursePath("teacher-training-courses", "diploma-in-child-and-adolescent-counseling"),
      },
      {
        title: "Diploma in Child Psychology",
        href: coursePath("teacher-training-courses", "diploma-in-child-psychology"),
      },
    ],
  },
  {
    title: "TEFL/TESOL Online Courses",
    courses: [
      {
        title: "140 Hour TEFL Course Diploma with Practical Teaching Session",
        href: coursePath("tefl-tesol-online-courses", "140-hour-tefl-course-diploma-with-practical-teaching-session"),
      },
      {
        title: "200 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session",
        href: coursePath(
          "tefl-tesol-online-courses",
          "200-hour-tesol-course-pg-diploma-with-dual-specialisation-and-practical-teaching-session",
        ),
      },
      {
        title: "400 Hour TESOL Course Masters with Practical Teaching Session",
        href: coursePath("tefl-tesol-online-courses", "400-hour-tesol-course-masters-with-practical-teaching-session"),
      },
      {
        title: "IELTS for Teachers",
        href: coursePath("tefl-tesol-online-courses", "ielts-for-teachers"),
      },
    ],
  },
  {
    title: "Specialized Courses",
    courses: [
      {
        title: "Train the Trainer Program",
        href: coursePath("specialized-courses", "training-the-trainer-program"),
      },
      {
        title: "Classroom Management Skill",
        href: coursePath("specialized-courses", "classroom-management-skill"),
      },
      {
        title: "Teaching Grammar",
        href: coursePath("specialized-courses", "teaching-grammar"),
      },
      {
        title: "Teaching Phonetics",
        href: coursePath("specialized-courses", "teaching-phonetics"),
      },
      {
        title: "NLP for Students",
        href: coursePath("specialized-courses", "nlp-for-students"),
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
    href: coursePath("teacher-training-courses", "montessori-teacher-training-with-practical-session"),
    description:
      "Montessori Teacher Training Course at Global Teacher Training Academy empowers teachers to expand horizons and become trusted aides in learning.",
  },
  {
    title: "Early Childhood Care and Education",
    image: "/images/courses/early-childhood.jpg",
    badge: "/images/popular-course.gif",
    href: coursePath("teacher-training-courses", "early-childhood-care-and-education"),
    description:
      "In recent years, early childhood education has become more prevalent and has emerged as a global priority in the field of early childhood education.",
  },
  {
    title: "Child Psychology",
    image: "/images/courses/child-psychology.jpg",
    badge: "/images/popular-course.gif",
    href: coursePath("teacher-training-courses", "diploma-in-child-psychology"),
    description:
      "Diploma in Child Psychology from GTT Academy equips learners with a holistic approach to foster the development of young children from birth to 6 years.",
  },
  {
    title: "Child and Adolescent Counseling",
    image: "/images/courses/counselling.jpg",
    badge: "/images/popular-course.gif",
    href: coursePath("teacher-training-courses", "diploma-in-child-and-adolescent-counseling"),
    description:
      "Our Diploma in Child and Adolescent Counseling equips learners to foster development and improve physical, emotional, social, and spiritual wellbeing of children and adolescents.",
  },
  {
    title: "Education Administration and Management",
    image: "/images/courses/administration.jpg",
    badge: "/images/premium-course.gif",
    href: coursePath("teacher-training-courses", "educational-administration-and-management"),
    description:
      "Education Administration and Management course by GTT Academy helps understand administrative functions and manage all departments in any educational institution.",
  },
  {
    title: "Diploma in Teaching and Training",
    image: "/images/courses/teaching-training.jpg",
    badge: "/images/premium-course.gif",
    href: coursePath("teacher-training-courses", "diploma-in-teaching-and-training"),
    description:
      "The Diploma in Teaching and Training equips educators to become exceptional teacher trainers, curriculum developers,or examiners, shaping the future of education.",
  },
  {
    title: "TESOL",
    image: "/images/courses/tesol.jpg",
    badge: "/images/premium-course.gif",
    href: coursePath("tefl-tesol-online-courses", "140-hour-tefl-course-diploma-with-practical-teaching-session"),
    description:
      "Our TESOL courses are competently designed programs that enable you to learn beyond the norm and get access to the international teaching industry.",
  },
  {
    title: "Nursery Teacher Training",
    image: "/images/courses/nursery-detail.jpg",
    badge: "/images/popular-course.gif",
    href: coursePath("teacher-training-courses", "nursery-teacher-training-with-practical-session"),
    description:
      "Nursery Teacher Training at GTT Academy prepares caregivers and educators with child development, teaching methodology, and nursery-level classroom skills.",
  },
  {
    title: "Special Education Teacher Training",
    image: "/images/courses/special-education.jpg",
    badge: "/images/premium-course.gif",
    href: coursePath("teacher-training-courses", "pg-diploma-in-special-education"),
    description:
      "Diploma and PG Diploma in Special Education equip parents, school teachers and shadow teachers to support children with special needs through inclusive strategies and care.",
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
  { label: "Tutor Support & Assessment", href: "/tutor-support-assessment" },
  { label: "Job Opportunities & Placement support", href: "/job-opportunities-placement-support" },
  { label: "Franchise Opportunity", href: "/franchise-opportunity" },
  { label: "About Us", href: "/about" },
  { label: "Career Opportunities", href: "/career" },
  { label: "Accreditations", href: "/accreditations" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Payment Options", href: "/payment" },
];

export const quickLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact us", href: "/contact" },
  { label: "Apply Now", href: "/apply-now" },
];

export const applyNowHref = "/apply-now" as const;
export const contactHref = "/contact";
export const alumniHref = "/alumni";
export const thankYouHref = "/thank-you";

export const branches = [
  "Hyderabad",
  "Bangalore",
  "Mysore",
  "Pune",
  "Guwahati",
  "Kerala",
  "Ahmedabad",
  "Chhattisgarh",
  "UAE",
  "Saudi Arabia",
  "Sint Maarten",
];