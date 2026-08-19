export type CoursePhase = {
  title: string;
  items: string[];
};

export type CourseLevel = {
  id: string;
  label: string;
  eligibility: string;
  whoCanJoin: string[];
  focus: string[];
  phases: CoursePhase[];
  modeIntro: string;
  online: { title: string; text: string; items: string[] };
  distance: { title: string; text: string; items: string[] };
  fee: string;
};

const modeIntro =
  "At GTT Academy our courses are designed around the core teaching principles to help teachers continue their development and improve the lives of their students. GTT Academy offers well-tailored teacher training courses for aspiring as well as active teachers planning to upgrade to step into the world of early childhood education through ONLINE and DISTANCE learning Mode.";

const online = {
  title: "ONLINE Learning Mode",
  text: "In Online mode, the course materials are sent to the students directly through email. They can access it and study whenever they want. This is the most flexible method of learning as the candidates who have time constraints can complete the course at their convenient time. Students both from India and abroad can avail this mode.",
  items: [
    "Course materials sent online through email.",
    "Full Tutor Support",
    "Online MCQ and Teaching assignments",
  ],
};

const distance = {
  title: "Distance Learning Mode",
  text: "In Distance mode, the candidates can have the study materials sent directly to their home addresses. After registering for a course the study materials are dispatched and the candidates are given a tracking link. In case of any problems, the candidates can contact our academic counselors who are dedicated to solving the problems.",
  items: ["Convenient Learning from Home", "Tutor support.", "MCQ (OMR sheet) and Teaching assignments"],
};

const focus = [
  "Impart Constructive Knowledge: Learn to deliver tailored, impactful instruction to special needs children.",
  "Attend to Specific Needs: Individualize teaching strategies to support each child's unique learning style and requirements.",
  "Apply Child Psychology: Gain a deep understanding of developmental milestones to interact and teach effectively.",
  "Promote Mainstream Inclusion: Equip children with the social, cognitive, and communicative skills needed to blend into mainstream society.",
];

const whoCanJoin = [
  "Parents of Special Needs Children: Empowers parents with hands-on strategies to understand child psychology, manage behavioural challenges, implement home-based interventions, and effectively navigate their child's unique developmental journey.",
  "School teachers seeking specialized skills to support special needs learners in inclusive classrooms.",
  "Shadow teachers who want structured techniques for daily learning support and classroom accommodations.",
  "Aspiring special educators looking to build a rewarding career helping children gain confidence and integrate into mainstream society.",
  "Caregivers and education professionals dedicated to nurturing the potential of children with special needs.",
];

const diplomaModules: CoursePhase[] = [
  {
    title: "Module 1 — Introduction to Developmental Disorders",
    items: ["ASD", "MR", "ADHD", "LD"],
  },
  {
    title: "Module 2 — Developmental Theories and Milestones",
    items: [
      "The physical child",
      "The thinking child",
      "The development of self & ego identity",
      "The language development",
      "Freud's psychosexual stages",
    ],
  },
  {
    title: "Module 3 — Assessment",
    items: [
      "Assessment–screening–evaluation",
      "Assessment: need, scope, tools, policy",
      "Types & methods of assessment",
      "Assessment tests & tools",
    ],
  },
  {
    title: "Module 4 — Communication Intervention",
    items: ["AAC", "PECS", "VBA"],
  },
  {
    title: "Module 5 — Classroom Interventions",
    items: ["Social skills", "Reading skills", "Writing skills", "Maths skills", "Accommodations"],
  },
  {
    title: "Module 6 — Alternative Therapies",
    items: ["Music therapy", "Art therapy", "Sensory integration therapy", "AIT"],
  },
  {
    title: "Module 7 — Behaviour Management",
    items: [
      "Types of problem behaviour",
      "Reinforcement",
      "Punishment techniques",
      "Behaviour assessment",
    ],
  },
  {
    title: "Module 8 — Cognitive Interventions",
    items: [
      "Cognitive Behaviour Modification",
      "Cognitive Learning Strategies",
      "Cognitive Scripts",
      "Social Stories",
      "Social Decision-Making Strategies",
      "LEAP",
    ],
  },
  {
    title: "Module 9 — Parental Guidance",
    items: [
      "Recognizing the signs of stress in parents",
      "Ways to lower the stress",
      "Communication and counselling",
    ],
  },
  {
    title: "Module 10 — Practical Application",
    items: ["Case studies", "Assignment", "Project"],
  },
];

const pgModules: CoursePhase[] = [
  ...diplomaModules,
  {
    title: "Module 11 — Research and Lesson Planning",
    items: [
      "Research",
      "Reference materials",
      "Preparing a sample LP",
      "Preparing lesson plan",
    ],
  },
];

export const specialEducationCourse = {
  title: "Special Education Teacher Training with Practical Session",
  image: "/images/courses/special-education-detail.jpg",
  pageIntro: [
    "Children with special needs require specialized supervision, dedicated support, and specialized skills from educators trained to nurture their potential. As the demand for qualified special education professionals grows, job opportunities continue to expand across educational settings. Helping a special child gain confidence and integrate into mainstream society is a deeply rewarding career path. This premium course is developed by licensed practitioners with years of hands-on teaching and counseling experience, requiring utmost dedication from candidate parents, school teachers, and shadow teachers alike. Students gain hands-on techniques to guide daily learning, while formal diagnostic testing remains the dedicated work of certified specialists.",
    "The Diploma program delivers a foundational grounding in special education needs, equipping educators with key theoretical and practical tools. The curriculum opens with developmental disorders—such as ASD, ADHD, MR, and Learning Disabilities—alongside key child development theories and screening techniques. Candidates learn to apply communication strategies like AAC and PECS, implement targeted reading, writing, and math classroom modifications, and utilize alternative therapies including art, music, and sensory integration. The program also equips teachers with behavior management methods, cognitive intervention scripts, strategies to support parental stress, and practical experience gained through real-world case studies, assignments, and projects.",
    "The PG Diploma program incorporates the entire foundational curriculum of developmental theories, screening tools, classroom accommodations, behavior management, alternative therapies, and parental counseling, while extending into advanced practical execution. Beyond the core topics, the PG Diploma uniquely adds deep-dive training on educational research methodology, reference material analysis, and lesson plan design.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      eligibility: "Graduation in any stream.",
      whoCanJoin,
      focus,
      phases: pgModules,
      modeIntro,
      online,
      distance,
      fee: "The PG Diploma in Special Education is a 12-month programme for parents, school teachers and shadow teachers who wish to support children with special needs through constructive instruction, inclusive strategies and advanced lesson planning. You need eligibility of Graduation in any stream to apply for this Online/Distance course. You may pursue this course by spending a reasonable fee of 20000 INR + GST or 325 USD along with tutor guidance and course material support.",
    },
    {
      id: "diploma",
      label: "Diploma Course",
      eligibility: "You may apply for the course on successful completion of high school (10+2) or Graduation.",
      whoCanJoin,
      focus,
      phases: diplomaModules,
      modeIntro,
      online,
      distance,
      fee: "The Diploma in Special Education is an 8-month programme that delivers foundational grounding in special education needs for educators, parents and shadow teachers. You need eligibility of high school (10+2) or Graduation to apply for this Online/Distance course. You may pursue this course by spending a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material support.",
    },
  ] satisfies CourseLevel[],
  shared: {
    accreditation: [
      "Global Teacher Training Academy (GTT Academy) stands out by offering teachers authentic, accredited certification through Apostille Certificates granted by the Ministry of External Affairs (MEA). These certificates, recognized globally, validate the credibility of educational documents, eliminating the need for additional embassy certification. GTT Academy simplifies the complex Apostille process, ensuring teachers receive internationally accepted certificates without hassle. This certification, accepted in 112 countries, enhances teachers' eligibility for global teaching positions. GTT Academy also provides transcripts detailing course content, further aiding job applications across various educational boards worldwide.",
    ],
    certification: [
      "The world of education is often found to be spoiled by questionable certification of academic courses. In order to draw a line between genuine, bona fide qualifications and those that are fabricated for commercial gain, it is imperative that education companies provide accredited certification.",
      "GTT Academy is the only platform where teachers are facilitated with such a badge of authenticity. Global Teacher Training Academy provides an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of its courses. The Apostille certificate is accepted across all embassies worldwide and therefore across all board schools in India and abroad.",
      "The apostille certificate authenticates the credibility of personal, educational and commercial documents with the help of a signature, seal or stamp so that they get accepted when presented in another country. An Apostille contains a computer-generated unique identification number to maintain records online. It also helps to allow the concerned authorities to check the authenticity with ease. After receiving this Apostille from the MEA, there is no need for any added certification from the embassy.",
      "An Apostille can only be obtained for documents issued in one country party to the Apostille convention and can be used in another country that is also a party to the same convention. India is a signatory to the Apostille convention and had been delegated with the same authorities for authentication of documents for both Attestation and Apostille. In simple words, Apostille is an international attestation that is accepted across 112 countries, and most of the western world recognises the Apostille Service. Therefore you can apply for a teacher's job across all board schools in both India and abroad with this Apostille certificate with confidence.",
      "The Apostille certification ensures the standard of the academic processes and showcases it to the employers. All our courses fall under the Apostille certification to ensure a higher level of learning for the students.",
      "Global Teacher Training Academy helps teachers embark on a career that imbibes the best teaching methodologies and strategies that help them aim high in their teaching profession. It is devoted to design tailor-made teacher training courses and vows to exhibit the high standard of training and likely courses that it promises to offer.",
      "Our certificates do not specify the online or distance learning mode of study. This allows you to present your qualification with the same recognition as a traditional degree.",
      "On successful completion of the course, you shall be provided with an Apostille certificate granted by MEA (Ministry of External Affairs) which will speak about your eligibility in this field of global teaching.",
      "A transcript will also be provided to the students showcasing the content of the study. It lists the modules covered in the program and helps teachers while applying for a teacher's job across all board schools both in India and abroad.",
    ],
    apostilleImportance: [
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At GTT Academy we provide the apostilled Certificate for legalization which can save your valuable time and energy.",
      "Educational documents are documents that are proof of your educational history that deal with your academic performances and the courses accomplished over time.",
      "Document apostille is required when there is need to eradicate the necessity of document legalization when going to the foreign countries for all sorts of reasons, for instance, obtaining employment visa or work visa, applying for temporary or permanent residency, or for pursuing education on student visa, carrying out deals for business expansion e.g. importing or exporting products.",
    ],
    apostilleSteps: [
      "Notary Attestation",
      "Home Department Attestation.",
      "HRD Attestation",
      "SMD Attestation",
      "Chamber of Commerce Attestation",
      "MEA Attestation",
    ],
    apostilleNote:
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document.",
    tutorSupport: [
      "The experienced trainers of GTT Academy assess and evaluate the progress of each and every student and provide feedback and suggestions accordingly so that each individual student may work on both their strength and weakness.",
      "The trainers also assess the candidates to point out the fields in which they need to improve such as practice-teaching or the understanding of a particular topic.",
      "The trainers guide the students extensively in completing their assigned projects. If, while completing the project a student faces a problem, he or she can get in touch with the trainer who will help the student immediately by providing tips on the subject. Students can contact their tutor from Monday to Sunday between 10 A.M to 7:30 pmby phone, email.",
    ],
    assessment: [
      "The trainees enrolling in any of the courses of GTT Academy can expect complete guidance from the experienced tutors of who are committed to helping the trainees to achieve their learning goals. Experienced tutors provide great support to the trainees and guide them through all the aspects of teaching giving valuable advice in every step of the way. They extend their tutoring support by sharing relevant information and answering questions related to the course content.",
      "Tutors take help of the wide variety of methods or tools that educators use to evaluate, measure, and document the academic readiness, learning progress, skill acquisition, or educational needs of students.",
      "At the GTT Academy we have experienced tutors that help shape the learning curve of the learners.",
      "The assessments actually help trainees understand exactly where they are lacking and identify the room for change. Once the assessments are well documented and sent to learners, they will be awarded a globally recognized certificate that will fetch a lot of new job opportunities globally. Learners will be able to teach in an internationally accepted environment and gain recognition.",
      "A lot of importance is given on the evaluation process and the tutors take a maximum of 7 to 10 days to evaluate the assignments. The trainees can expect a thorough evaluation in the form of errors being pointed out along with encouraging remarks which boost their confidence level.",
    ],
  },
};
