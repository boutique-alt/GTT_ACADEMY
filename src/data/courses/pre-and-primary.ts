export type CoursePhase = {
  title: string;
  items: string[];
};

export type CourseLevel = {
  id: string;
  label: string;
  intro: string[];
  focus: string[];
  eligibility: string;
  whoCanJoin: string[];
  phases: CoursePhase[];
  modeIntro: string;
  online: { title: string; text: string; items: string[] };
  distance: { title: string; text: string; items: string[] };
  fee: string;
};

const modeIntro =
  "At GTT Academy our courses are designed around the core teaching principles to help teachers continue their development and improve the lives of their students. GTT Academy offers well-tailored teacher training courses for aspiring as well as active teachers planning to upgrade to step into the world of early childhood education through Online and Distance learning mode.";

const online = {
  title: "Online Learning Mode",
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

const whoCanJoinBase = [
  "Practicing Teachers: who are looking for an up-gradation as well as a review of the modern teaching methods and techniques.",
  "Aspiring teachers: who want to begin their careers as an early childhood instructor.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening pre-school.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const pgPhases: CoursePhase[] = [
  {
    title: "Phase 1: An overview of teaching young learners",
    items: [
      "What is pedagogy?",
      "The theories that shape the young learners' learning process",
      "Principles of psychology and child-development for the young learners",
    ],
  },
  {
    title: "Phase 2: Current methods of Teaching and Learning",
    items: ["Montessori and Froebel", "Project method", "Thematic experience"],
  },
  {
    title: "Phase 3: Planning lessons",
    items: ["How to plan lessons", "Selecting the aids and materials for the lessons", "Sample lesson plans"],
  },
  {
    title: "Phase 4: Evaluation and assessment",
    items: [
      "The process of evaluation and assessment",
      "The error correction strategies",
      "The framework of the assessment process flow",
    ],
  },
  {
    title: "Phase 5: School organization",
    items: ["Classroom management", "Planning the lesson", "Teacher development programs"],
  },
  {
    title: "Phase 6: Integrated strategies in Learning",
    items: ["Technology", "Music, Stories and Role Play", "Art and craft"],
  },
  {
    title: "Phase 7: Teaching Language, Numbers and Science",
    items: ["Language", "Numbers", "Science"],
  },
  {
    title: "Phase 8: Teaching the differentiated learners",
    items: ["Differentiated learners", "Teaching the mixed learning style"],
  },
  {
    title: "Phase 9: The 21st century education",
    items: ["Reggio Emilia", "Waldorf", "Blossom", "E-learning"],
  },
  {
    title: "Phase 10: School Administration",
    items: ["Planning and infrastructure", "The recruitment process", "Managing finances", "Anticipating disasters"],
  },
  {
    title: "Phase 11: Leading from the front",
    items: ["Qualities of a School supervisor", "Dealing with the parents", "Building social responsibility"],
  },
  {
    title: "Phase 12: Overview of a 21st century educator",
    items: [
      "Think outside the classroom box",
      "Deal with the inclusive classroom",
      "Promote Digital and Inquiry based learning",
      "Make students your co-learner!",
    ],
  },
  {
    title: "Phase 13: Mastering AI and Digital Tools for Modern Education",
    items: [
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
    ],
  },
];

const diplomaPhases: CoursePhase[] = [
  ...pgPhases.slice(0, 8),
  {
    title: "Phase 9: Mastering AI and Digital Tools for Modern Education",
    items: [
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
    ],
  },
];

const certificatePhases: CoursePhase[] = [
  {
    title: "Phase 1: An overview of teaching young learners",
    items: [
      "What is pedagogy?",
      "The theories that shape the young learners' learning process",
      "Principles of psychology and child-development for the young learners",
    ],
  },
  {
    title: "Phase 2: Current methods of Teaching and Learning",
    items: ["Montessori and Froebel", "Project method", "Thematic experience"],
  },
  {
    title: "Phase 3: Lesson planning",
    items: ["How to plan lessons", "Selecting the aids and materials for the lessons", "Sample lesson plans"],
  },
  {
    title: "Phase 4: Evaluation and assessment",
    items: [
      "The process of evaluation and assessment",
      "The error correction strategies",
      "The framework of the assessment process flow",
    ],
  },
];

const focusDiplomaCert = [
  "The course emphasizes on the advanced approaches to teaching in pre & primary schools",
  "The modules include the advanced methodologies of child development taught and followed in schools globally.",
  "Advanced lessons on child behavior and character analysis and adapting new methods of teaching.",
];

export const prePrimaryCourse = {
  title: "Pre and Primary Teacher Training with Practical Session",
  image: "/images/courses/pre-primary-detail.jpg",
  pageIntro: [
    "Global Teacher Training Academy (GTT Academy) is a flourishing and significant name in the teacher training Industry is considered to be one of the leading teacher's training organization. GTT Academy has been contributing significantly in the field of teacher education, in order to produce quality teachers in the pre and primary segment interested in global exposure and challenging teaching conditions worldwide. Our goal at GTT Academy is to train aspirants wanting to become primary or pre-primary teachers with the help of Online, Distance programs and incorporating contemporary teaching techniques and methods over our courses. We at GTT Academy wish to produce commendable teachers devoted to teaching young learners from various backgrounds at the Pre-primary, Primary, Montessori and Nursery level.",
    "Upon completion of the course, teachers will be eligible to teach children from Montessori, Kindergarten and Nursery level to the fifth standard i.e. an age group of zero to twelve years in any formal school.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      intro: [
        "The Post Graduate Diploma in Pre and Primary Teachers Training is a specialized program aiming to equip teachers with the latest teaching approaches and skills. This program not only helps aspiring teachers who wish to teach at the Pre-Primary level, but also in-service teachers looking to upgrade their skills and qualification. The PG Diploma course is the most advanced level course that enables teachers to learn modern methodologies and skills. The teachers learn to create and evaluate, implement and learn about pre primary and primary classroom education.",
        "The course also adds up a detailed guideline about lesson planning and classroom management. Lesson planning is essential in order to make learning much more systematic and effective. On the other hand classroom management plays vital role in creating suitable learning ambience.",
      ],
      focus: [
        "The training includes the procedures of teaching in any international school in and around the world.",
        "The course includes the various theories related to pre primary teaching with their detailed analysis.",
        "Advanced methods of classroom management.",
      ],
      eligibility: "Minimum eligibility criteria for taking up the course are Graduation in any stream.",
      whoCanJoin: whoCanJoinBase,
      phases: pgPhases,
      modeIntro,
      online,
      distance,
      fee: 'The Post Graduate Diploma in Pre and Primary Teacher Training Course is an intensive one year/ 12 months program dedicated for aspiring as well as working teachers looking for skills and knowledge in early childhood education. This course empowers one to equip with managing and handling all classroom tasks and analyze the teaching abilities. The entire Post Graduation Course is the most advanced level course that offers an entire spectrum of opportunities from Elementary to Class 5 in any school. This course consists of educational philosophy, knowledge of developmental levels of children and lesson planning with course classroom management. The course has case studies and research work that enables teachers to be facilitators in the classroom. You need eligibility criteria of completion of "Graduation" in any stream to apply for this online/Distance course to learn the early childhood teaching methodologies. You may avail this course for a reasonable fee of 20000 INR + GST or 325 USD along with tutor guidance and course material.',
    },
    {
      id: "diploma",
      label: "Diploma Course",
      intro: [
        "The Diploma Course of Pre & Primary Teachers Training offers teachers a comprehensive education on teacher training that helps them gain a firm footing in the world of international teaching. The entire Diploma Course is an advanced level course that opens a world of opportunities in Nursery and Preschool learning and teaching.",
      ],
      focus: focusDiplomaCert,
      eligibility:
        "Minimum eligibility criteria for taking up the course is upon successful completion of Grade (10+2) or Graduation. Both aspiring as well as experienced teachers are eligible to apply for this online/Distance course to learn the Diploma in Pre and Primary Teacher Training.",
      whoCanJoin: whoCanJoinBase,
      phases: diplomaPhases,
      modeIntro,
      online,
      distance,
      fee: "The Diploma in Pre and Primary Teacher Training Course is an 8 month program dedicated for aspiring as well as working teachers looking for skills and knowledge in early childhood education. This course empowers one to equip with managing and handling all classroom tasks and analyze the teaching abilities. The entire Diploma Course is an advanced level course that offers an entire spectrum of opportunities in Elementary and Preschool learning. The course has case studies and research work that enables teachers to be facilitators in the classroom. You need eligibility criteria of completion of grade 12 or graduation to apply for this online /Distance mode to learn the early childhood teaching methodologies. You may avail this course for a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material.",
    },
    {
      id: "certificate",
      label: "Certificate Course",
      intro: [
        "Preparing the aspiring teachers with required skills is the primary goal of the course. This course is created for fresher's, aspiring teachers, working teachers keeping in mind the international theories and methodology of tutors from different backgrounds and experiences. It is a 6 month course and features complete knowledge about Pre-Primary and Montessori teaching. This is a comprehensive course that enables primary school teachers along with preschool teachers to be equipped with modern methodology and 21st century skills to face classrooms with confidence and ease. The course comprises basic knowledge about early childhood teaching methods and effective teaching techniques.",
        "The entire Certificate Course for teachers consists of educational philosophy, knowledge of various developmental stages of children and lesson planning along with handy classroom techniques that can enlighten teachers to learn about class management. The Certificate Course enables teachers to teach from Nursery to grade 5 in any school in any part of the world. A globally recognized certificate will be awarded on completion of the course.",
      ],
      focus: focusDiplomaCert,
      eligibility:
        "Minimum eligibility criteria for taking up the course is (10+2) high school passed out or a graduate. Both aspiring as well as experienced teachers are eligible to apply for this online/Distance course to learn the early childhood teaching methodologies.",
      whoCanJoin: whoCanJoinBase,
      phases: certificatePhases,
      modeIntro,
      online,
      distance,
      fee: 'Primary & Pre Primary Teachers training is a complete course which enables one to become a versatile teacher. The course puts special emphasis on "Child Psychology" that a teacher has to know to educate children. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You need eligibility criteria of completion of grade 12 or graduation to apply for this online course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 10000 INR + GST or 160 USD along with tutor guidance and course material support.',
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
      "Home Department Attestation",
      "HRD Attestation",
      "SMD Attestation",
      "Chamber of Commerce Attestation",
      "MEA Attestation",
    ],
    tutorSupport: [
      "The experienced trainers of GTT Academy assess and evaluate the progress of each and every student and provide feedback and suggestions accordingly so that each individual student may work on both their strength and weakness.",
      "The trainers also assess the candidates to point out the fields in which they need to improve such as practice-teaching or the understanding of a particular topic.",
      "The online tutor support is meant for resolving queries and problem solving, but also helps in guiding trainees in their chosen and charted career path.",
      "Students can expect to get full co-operation, information and encouragement if they approach a tutor. This forms the core essence in our Institution.",
      "The trainers guide the students extensively in completing their assigned projects. If, while completing the project a student faces a problem, he or she can get in touch with the trainer who will help the student immediately by providing tips on the subject. Students can contact their tutor from Monday to Sunday between 10 A.M to 7:30 pm by phone, email directly.",
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
