export type CoursePhase = {
  title: string;
  items: string[];
};

export type CourseLevel = {
  id: string;
  label: string;
  focus: string[];
  eligibility: string;
  whoCanJoin: string[];
  phases: CoursePhase[];
  online: { title: string; text: string; items: string[] };
  fee: string;
  accreditation: string[];
};

const online = {
  title: "Online Mode",
  text: "In Online mode, the course materials are sent to the students directly through email. They can access it and study whenever they want. This is the most flexible method of learning as the candidates who have time constraints can complete the course at their convenient time. Students both from India and abroad can avail this mode.",
  items: [
    "Course materials sent online through email.",
    "Full Tutor Support",
    "Online MCQ and Teaching assignments",
  ],
};

const focus = [
  "The course focuses on the techniques of supervising of educational organizations.",
  "The course emphasizes on the methodologies of handling educational framework.",
  "It trains the trainees on the most effective proven methods of approaching issues and providing sound resolutions managing educational institutes effectively.",
];

const whoCanJoin = [
  "Practicing Teachers and Principals- Who are looking for an up-gradation as well as a review of the modern teaching methods and techniques.",
  "Aspiring teachers: who want to begin their careers as an early childhood instructor in an administrative role.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening pre-school.",
  "Homemakers: Who are looking to take up a job as an administrative personnel in an educational Institution.",
];

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

const phases1to7: CoursePhase[] = [
  {
    title: "Phase 1 - Importance of Educational Administration & Management",
    items: [
      "Meaning",
      "Nature of Educational Administration",
      "Objectives of Educational Administration",
      "Scope of Educational Administration",
      "Functions of Educational Administration",
    ],
  },
  {
    title: "Phase 2: Components of Educational Administration",
    items: ["Planning", "Operation Management"],
  },
  {
    title: "Phase 3: Human relations in Educational Administration",
    items: [
      "Influence of Human Resource in Education Management",
      "Recruitment",
      "Training management",
      "Appraisal and Evaluation",
    ],
  },
  {
    title: "Phase 4: Educational Supervision",
    items: [
      "Educational Supervision",
      "Function of Supervision",
      "Aspects of Supervision - administration (normative); education (formative) and support (restorative).",
    ],
  },
  {
    title: "Phase 5: Decision Making in Education Management and Administration",
    items: [
      "Decision Making Process",
      "Shared Decision Making",
      "Developing Subordinates for Decision Making",
    ],
  },
  {
    title: "Phase 6: Curriculum Issues in Administration",
    items: [
      "The scope of curriculum",
      "Various approaches to Curriculum",
      "The 21st century curriculum and methodology",
    ],
  },
  {
    title: "Phase 7 - Crisis and Disaster Management",
    items: [
      "Definitions",
      "The Crises Management Plan",
      "Key Roles and Responsibilities",
      "Natural Disasters",
      "Emergency management",
    ],
  },
];

const pgPhases: CoursePhase[] = [
  ...phases1to7,
  {
    title: "Phase 8 - Material Design and Exploitation",
    items: [
      "Evaluating Course Books",
      "Exploiting Published Materials",
      "Resources and Technology",
      "Using the Internet",
      "Adapting Authentic Materials",
    ],
  },
  {
    title: "Phase 9 – Teacher Development",
    items: [
      "Factors That Contribute to Teacher Demotivation",
      "A Basis for Professional Progress",
      "Peer Training",
      "Sources of Valuable Feedback",
      "Meetings as a Forum for Sharing Reflections and Further Development",
      "Practical Ideas for Moving forward as a teacher",
    ],
  },
  {
    title: "Phase 10 - Classroom Management",
    items: [
      "Purpose of classroom management",
      "Philosophy of classroom management",
      "Early childhood classroom management",
      "Small things: quick interventions that support classroom Management",
    ],
  },
  {
    title: "Phase11 - Leading from the Front –Educational Leadership",
    items: [
      "Teacher Leaders",
      "Instructional specialist",
      "Curriculum specialist",
      "Classroom supporter",
      "Roles for all",
      "The need for Teacher Leadership",
    ],
  },
  {
    title: "Phase 12 - Overview of the 21st Century Educator",
    items: [
      "Think outside the classroom",
      "Teaching strategies",
      "Deal with an inclusive classroom",
      "Inquiry based learning",
    ],
  },
  {
    title: "Phase 13- Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
];

const diplomaPhases: CoursePhase[] = [
  {
    title: "Phase 1: Importance of Educational Administration & Management",
    items: phases1to7[0].items,
  },
  {
    title: "Phase 2: Components of Educational Administration",
    items: phases1to7[1].items,
  },
  {
    title: "Phase 3: Human relations in Educational Administration",
    items: phases1to7[2].items,
  },
  {
    title: "Phase 4: Educational Supervision",
    items: phases1to7[3].items,
  },
  {
    title: "Phase 5: Decision Making in Education Management and Administration",
    items: phases1to7[4].items,
  },
  {
    title: "Phase 6: Curriculum Issues in Administration",
    items: phases1to7[5].items,
  },
  {
    title: "Phase 7: Crisis and Disaster Management",
    items: phases1to7[6].items,
  },
  {
    title: "Phase 8: Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
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

const standardAccreditation = [
  "Global Teacher Training Academy (GTT Academy) stands out by offering teachers authentic, accredited certification through Apostille Certificates granted by the Ministry of External Affairs (MEA). These certificates, recognized globally, validate the credibility of educational documents, eliminating the need for additional embassy certification. GTT Academy simplifies the complex Apostille process, ensuring teachers receive internationally accepted certificates without hassle. This certification, accepted in 112 countries, enhances teachers' eligibility for global teaching positions. GTT Academy also provides transcripts detailing course content, further aiding job applications across various educational boards worldwide.",
];

export const adminCourse = {
  title: "Educational Administration and Management",
  image: "/images/courses/admin-detail.jpg",
  pageIntro: [
    "Education Administration and Management course featured by Global Teacher Training Academy (GTT Academy) helps in understanding the functional area of the administrative and managing all department of any educational institution. Educational Administration and management refers to the efficient managing of the education system in which a group combines human and material resources to supervise, plan, strategies, and implement structures to execute an education system. Education is the equipped with knowledge, skills, values, beliefs, habits, and attitudes with learning experiences. The course is targeted and designed for those who are looking for a career in the Educational Administration and Management. This course can be an additional benefit for the teachers. An organization structure in the school or any other educational Institution leads to the division of tasks optimally that would improve performance. This can be because the division of tasks from the highest management to the underside is obvious and structured. At every levels of the educational ecosystem, management is required; management involves the planning, organizing, implementation, review, evaluation, and integration of an institution. . The program is best structured to help teachers, heads of academic institutions and administrative professionals to acquire the skills necessary to manage institutions or organizations by utilizing the available human resources in innovative ways and identifying their potentials to yield the best results for an academic institution. The globally recognized certificate which is awarded at the end of the program will be helpful in professional career start up. The 6/12 months course offers Flexible Learning Options as it can be availed in an Online Learning Mode.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      focus,
      eligibility: "Minimum eligibility criterion for taking up the course is Graduation in any stream.",
      whoCanJoin,
      phases: pgPhases,
      online,
      fee: "This PG Diploma Course covers all technicalities and materials needed for a trainee to manage an institute properly. The course helps to gain an in-depth understanding of operational administration and management, and specific knowledge on how to administer and run an academic institute. The course helps you to build your foundation for an educative journey and sound management of educational institutions. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You need eligibility criteria of completion of grade 12 or graduation to apply for this online /Distance course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 20000 INR + GST or 325 USD along with tutor guidance and course material support .",
      accreditation: standardAccreditation,
    },
    {
      id: "diploma",
      label: "Diploma Course",
      focus,
      eligibility:
        "On successful completion of Grade 12 (10+2) that any high school pass out or graduate in any stream may take up the course.",
      whoCanJoin,
      phases: diplomaPhases,
      online,
      fee: "This Diploma Course covers all technicalities and materials needed for a trainee to manage an institute properly. The course helps to gain an in-depth understanding of operational administration and management, and specific knowledge on how to administer and run an academic institute. The course helps you to build your foundation for an educative journey and sound management of educational institutions. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You need eligibility criteria of completion of grade 12 or graduation to apply for this online /Distance course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 15000 INR + GST or 240 USD along with tutor guidance and course material support .",
      accreditation: [
        "You can be assured that when you choose an English Proficiency Course from Global Teacher Training Academy, you are achieving the highest quality English Language Training and recognition. All our English Proficiency Courses are externally accredited by an award winning UK based organisation. On successful completion of each course, you will be awarded with a certificate acknowledging the achievement of a specified level of proficiency in speaking, listening, reading and writing English for a specified purpose.",
      ],
    },
  ] satisfies CourseLevel[],
  shared: {
    certification: longCertification,
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
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At GTT Academy we provide the apostilled Certificate for legalization which can save your valuable time and energy.",
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
