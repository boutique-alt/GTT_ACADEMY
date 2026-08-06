export type CoursePhase = {
  title: string;
  items: string[];
};

export type CourseLevel = {
  id: string;
  label: string;
  eligibility: string;
  whoCanJoin: string[];
  phases: CoursePhase[];
  modeIntro: string;
  online: { title: string; text: string; items: string[] };
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

const whoCanJoin = [
  "Aspiring teachers: Who want to begin their careers as an early childhood instructors.",
  "Primary School teachers: Early childhood educators have the very real opportunity to make a difference in young lives, and also influence future generations and fulfill the humongous requirement globally.",
  "Young mothers: Who want to be an effective educator at home for their children.",
  "Homemakers: Who are looking to take up a job that will help in maintaining the work-home balance.",
  "Career changers: Who want a shift in their career.",
  "Entrepreneurs: Who are interested in opening pre-school or Crèche.",
  "Care Givers-Care givers for infants can benefit immensely on successful completion of the course.",
];

const phasesSharedStart: CoursePhase[] = [
  {
    title: "Phase 1 Meaning of Early Childhood",
    items: [
      "What is early childhood?",
      "Infancy",
      "Toddler",
      "Pre-School",
      "Benefits of early childhood education",
    ],
  },
  {
    title: "Phase 2 Principles and Approaches of Early Learning",
    items: [
      "Types of philosophy that have a great impact on elementary education",
      "Famous Educational Philosophies",
    ],
  },
  {
    title: "Phase 3 History of Education",
    items: [
      "The advent of education over years",
      "Maya, Aztecs, and Incas-The civilization of the New World",
      "Education in ancient India",
      "History of Development of Primary Education in India",
      "The beginning of mandatory state education-1870",
      "Post -World War II: Primary schools and three types of secondary school",
      "Famous Educators",
    ],
  },
  {
    title: "Phase 4 Educational Psychology",
    items: [
      "Nature of Educational Psychology",
      "Scope of Educational Psychology",
      "Theories of Learning",
      "Behaviourism and Classroom Management",
      "Pavlov's Classical Conditioning Theory and Educational Implication",
      "Edward Lee Thorndike",
      "Cognitivism",
      "Relationship between Attention and Interest",
      "Motivation",
    ],
  },
  {
    title: "Phase 5 Developmental Stages",
    items: [
      "Introduction to Early Childhood Development",
      "Physical Development",
      "Cognitive Development",
      "Social and Emotional",
      "Language Acquisition",
    ],
  },
  {
    title: "Phase 6 Curriculum Content",
    items: [
      "Curriculum Goals",
      "Suggestive Developmentally Appropriate/Age-appropriate Activities for ECCE",
    ],
  },
  {
    title: "Phase 7 Importance of Play and Learning",
    items: [
      "Significance of play",
      "Play and Literacy",
      "Different Stages of Play in Early Childhood",
      "Teacher's Role in Play",
      "Kinds of Play",
      "Play and Numeracy",
    ],
  },
  {
    title: "Phase 8 Early Childhood Care",
    items: [
      "How much sleep a baby and toddler needs varies across time and children?",
      "Supporting Basic Hygiene Practices in the Learning Environment",
      "Common Illness",
    ],
  },
  {
    title: "Phase 9 Kindergarten",
    items: [
      "History of Kindergarten",
      "Froebel's Kindergarten Curriculum Method & Educational Philosophy",
      "Role of the Educator",
    ],
  },
  {
    title: "Phase 10 Yoga and Nutrition",
    items: [
      "Nutritional Requirements",
      "Factors Affecting Nutritional Status of Children",
      "Health Benefits",
    ],
  },
  {
    title: "Phase 11 Montessori",
    items: [
      "Sensorial Training",
      "Mathematics in Montessori",
      "Language and Story Telling",
      "Music, Movement & Art",
    ],
  },
];

const lessonPlanPhase: CoursePhase = {
  title: "Phase 12 Create a Lesson Plan",
  items: [
    "Why planning is important?",
    "The New Teacher's Guide to Creating Lesson Plans",
    "The Secrets of Daily Lesson Planning",
    "Lesson Plan Stages",
    "Additional Considerations for Planning Great Lessons",
    "Essential Principles of Effective Evaluation",
  ],
};

const aiPhaseItems = [
  "Bringing AI into the Classroom",
  "Digital Tools for the Modern Classroom",
  "Pros and Cons of AI",
  "Writing the Right Prompt for Creating Lesson Plans and Presentations",
  "Relevance of AI in Teaching",
  "The Future of AI in Teaching",
  "The Potential for AI to Revolutionize Teaching Methodologies",
  "Ethical Considerations and the Importance of Human Oversight",
  "Case Studies",
  "The Importance of Embracing Technology While Maintaining a Human Touch in Education",
  "Striking a Balance: Best Practices for Educators",
];

const pgPhases: CoursePhase[] = [
  ...phasesSharedStart,
  lessonPlanPhase,
  {
    title: "Phase 13: Individual Difference, Motivation and Creativity",
    items: ["Types of Individual Differences", "Motivation and its Techniques"],
  },
  {
    title: "Phase 14: Child and Safety Measures",
    items: [
      "Accidents and their prevention",
      "Common injuries",
      "Role of mother and teacher",
      "Disciplining the Child – Drawing The Fine Line",
    ],
  },
  {
    title: "Phase 15: Overview of a 21st Century Educator",
    items: [
      "Think outside the classroom box",
      "Deal with the inclusive classroom",
      "Promote Digital and Inquiry based learning",
      "Make students your co –learner!",
    ],
  },
  {
    title: "Phase 16: School Administration and Management",
    items: ["Planning and infrastructure", "The recruitment process", "Anticipating disasters"],
  },
  {
    title: "Phase 17: Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
];

const diplomaPhases: CoursePhase[] = [
  ...phasesSharedStart,
  {
    title: "Phase 12: Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
  {
    title: "Phase 13 Create a Lesson Plan",
    items: lessonPlanPhase.items,
  },
];

const longCertification = [
  "The world of education is often found to be spoiled by questionable certification of academic courses. In order to draw a line between genuine, bona fide qualifications and those that are fabricated for commercial gain, it is imperative that education companies provide accredited certification.",
  "GTT Academy is the only platform where teachers are facilitated with such a badge of authenticity. Global Teacher Training Academy provides an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of its courses. The Apostille certificate is accepted across all embassies worldwide and therefore across all board schools in India and abroad.",
  "The apostille certificate authenticates the credibility of personal, educational and commercial documents with the help of a signature, seal or stamp so that they get accepted when presented in another country. An Apostille contains a computer-generated unique identification number to maintain records online. It also helps to allow the concerned authorities to check the authenticity with ease. After receiving this Apostille from the MEA, there is no need for any added certification from the embassy.",
  "An Apostille can only be obtained for documents issued in one country party to the Apostille convention and can be used in another country that is also a party to the same convention. India is a signatory to the Apostille convention and had been delegated with the same authorities for authentication of documents for both Attestation and Apostille. In simple words, Apostille is an international attestation that is accepted across 112 countries, and most of the western world recognises the Apostille Service. Therefore you can apply for a teacher's job across all board schools in both India and abroad with this Apostille certificate with confidence.",
  "The Apostille certification ensures the standard of the academic processes and showcases it to the employers. All our courses fall under the Apostille certification to ensure a higher level of learning for the students.",
  "Global Teacher Training Academy helps teachers embark on a career that imbibes the best teaching methodologies and strategies that help them aim high in their teaching profession. It is devoted to design tailor-made teacher training courses and vows to exhibit the high standard of training and likely courses that it promises to offer.",
  "On successful completion of the course, you shall be provided with an Apostille certificate granted by MEA (Ministry of External Affairs) which will speak about your eligibility in this field of global teaching.",
  "A transcript will also be provided to the students showcasing the content of the study. It lists the modules covered in the program and helps teachers while applying for a teacher's job across all board schools both in India and abroad.",
];

export const ecceCourse = {
  title: "Early Childhood Care and Education",
  image: "/images/courses/ecce-detail.jpg",
  pageIntro: [
    "Early childhood care and education (ECCE) refers to the development of care and education of children from birth through six years old. ECCE has a global scope, as caring for and educating young children has always been an integral part of human societies. In recent years, early childhood education has become more prevalent and has emerged as a global priority in the field of early childhood education. At Global Teacher Training Academy (GTT Academy) we offer Diploma in Early Childhood Care and Education course which focuses on the development of cognitive, social and psycho-motor abilities at the primary years of a child's life. It deals with the caring and teaching of children within the age of 0 to 6 years. This course encompasses certain specific teaching techniques that help supplement the knowledge of early primary teachers about children. Augmenting the child's mental and physical growth is the primary aim of the course. The course is best suited for new mothers, primary school teachers and infant care givers. This course serves as a solid foundation for all those who want to have an in-depth understanding of young children and their functionalities till the age of 6 years. The 8 months / 12 months course offers Flexible Learning Options as it can be availed in an Online Learning Mode.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      eligibility: "Minimum eligibility criterion for taking up the course is Graduation in any stream.",
      whoCanJoin,
      phases: pgPhases,
      modeIntro,
      online,
      fee: "PG Diploma in Early Childhood Care and Education is a complete course which encompasses certain specific teaching techniques that help supplement the knowledge of early primary teachers about children You need eligibility criteria of completion of grade 12 or graduation to apply for this online course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 20000 INR + GST or 325 USD along with tutor guidance and course material support .",
    },
    {
      id: "diploma",
      label: "Diploma Course",
      eligibility: "You may apply for the course on successful completion of high school (10+2) or Graduation.",
      whoCanJoin,
      phases: diplomaPhases,
      modeIntro,
      online,
      fee: "Diploma in Early Childhood Care and Education is a complete course which encompasses certain specific teaching techniques that help supplement the knowledge of early primary teachers about children You need eligibility criteria of completion of grade 12 or graduation to apply for this online course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material support .",
    },
  ] satisfies CourseLevel[],
  shared: {
    accreditation: [
      "Global Teacher Training Academy (GTT Academy) stands out by offering teachers authentic, accredited certification through Apostille Certificates granted by the Ministry of External Affairs (MEA). These certificates, recognized globally, validate the credibility of educational documents, eliminating the need for additional embassy certification. GTT Academy simplifies the complex Apostille process, ensuring teachers receive internationally accepted certificates without hassle. This certification, accepted in 112 countries, enhances teachers' eligibility for global teaching positions. GTT Academy also provides transcripts detailing course content, further aiding job applications across various educational boards worldwide.",
    ],
    certification: longCertification,
    apostilleImportance: [
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At GTT Academy we provide the apostilled Certificate for legalization which can save your valuable time and energy.",
      "Educational documents are documents that are proof of your educational history that deal with your academic performances and the courses accomplished over time.",
      "Document apostille is required when there is need to eradicate the necessity of document legalization when going to the foreign countries for all sorts of reasons, for instance, obtaining employment visa or work visa, applying for temporary or permanent residency, or for pursuing education on student visa, carrying out deals for business expansion e.g. importing or exporting products.",
    ],
    tutorSupport: [
      "The experienced trainers of GTT Academy assess and evaluate the progress of each and every student and provide feedback and suggestions accordingly so that each individual student may work on both their strength and weakness.",
      "The trainers also assess the candidates to point out the fields in which they need to improve such as practice-teaching or the understanding of a particular topic.",
      "The trainers guide the students extensively in completing their assigned projects. If, while completing the project a student faces a problem, he or she can get in touch with the trainer who will help the student immediately by providing tips on the subject. Students can contact their tutor from Monday to Sunday between 10 A.M to 7:30 pm by phone, email.",
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
