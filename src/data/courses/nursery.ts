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
  courseContentIntro?: string;
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

const whoCanJoinPgDiploma = [
  "Aspiring teachers: who want to begin their careers as an early childhood instructors.",
  "Practicing Teachers: who are looking for an up-gradation as well as a review of the modern teaching methods and techniques.",
  "Career changers: who want a shift in their present career.",
  "Entrepreneurs: who are interested in opening pre-schools.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const whoCanJoinCertificate = [
  "Aspiring teachers: who want to begin their careers as an early childhood instructor.",
  "Practicing Teachers: who are looking for an up-gradation as well as a review of the modern teaching methods and techniques.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening pre-school.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const focusPgDiploma = [
  "It systematizes experiences and strengthens the professional competencies of pre-school teachers.",
  "It enables teachers to organize meaningful learning practices for pre-school children.",
  "It helps in developing skills required in selecting and organizing the teaching /learning experiences.",
  "It assists in understanding the developmental needs of pre-school children.",
  "It gives the knowledge in developing and understanding of various aspects of pre-school management.",
  "The course includes Lesson planning which involves training the teachers to understand that intellectual development based on the understanding of each child's innate motivation and interest in learning.",
  "The Course covers different teaching methods (Montessori/Kindergarten) of education that is based on self-directed activity, hands-on learning for young learners to better adapt to their surroundings.",
  "It also helps in designing the curriculum based on the physical and intellectual development of 4 – 6 year olds.",
];

const focusCertificate = [
  "NTT provides a stepping stone to formal education.",
  "This course will enable the candidates to become aware of the developmental stages which will be useful while framing the age appropriate lesson, activities, games, etc.",
  "The training focuses on behavior management techniques to establish discipline.",
  "It helps the teachers to emphasize the nursery teaching method, principles and approaches of early childhood education.",
  "The course emphasizes on child and classroom management techniques.",
  "This course is more focused on practical approach, how to prepare with the latest developments in educational sector.",
  "Child supervision techniques are also included in the modules.",
];

const phases1to11: CoursePhase[] = [
  {
    title: "Phase1. Educational Psychology",
    items: [
      "The advent of education over years",
      "Nature, Scope and Theories of Learning",
      "Behaviourism",
      "Cognitivism",
      "Constructivism",
      "Attention and Interest",
      "Theories on Intelligence and Motivation",
    ],
  },
  {
    title: "Phase 2 Principles and Approaches",
    items: [
      "Basic principles of teaching young learners",
      "Play based Philosophy",
      "Cognitive based Philosophy",
      "Educational implications",
    ],
  },
  {
    title: "Phase 3. Physical, Cognitive and Emotional Developments",
    items: [
      "Physical, Cognitive and Emotional Development in infants",
      "Physical, Cognitive and Emotional Development in toddlers",
      "Physical, Cognitive and Emotional Development in preschoolers",
    ],
  },
  {
    title: "Phase 4. Language Learning",
    items: [
      "The Grammar Translation Method",
      "The Direct Method",
      "The Audiolingual Method",
      "Cognitive Code Learning",
      "Language Learning versus Language Acquisition",
    ],
  },
  {
    title: "Phase 5. Importance of Play",
    items: [
      "Significance of play",
      "Different Stages of Play in Early Childhood Rules of Play",
      "Teacher's Role in Play",
      "Kinds of Play",
      "Play and Literacy",
      "Play and Numeracy",
      "Role of the Adult in Developing Numeracy through Play",
    ],
  },
  {
    title: "Phase 6. Instructional Strategies",
    items: [
      "Effective Teaching Strategies",
      "Evidence Based Teaching Strategies",
      "Language Teaching Strategies and Techniques",
      "Strategies for Motivating Students in Mathematics",
      "How classroom diversity does affect an educator?",
    ],
  },
  {
    title: "Phase 7. Classroom Management",
    items: ["Early Childhood Classroom Management", "Tips for Managing a Class"],
  },
  {
    title: "Phase 8. Curriculum & Lesson Plan (art and craft)",
    items: [
      "Curriculum Goals",
      "The Infant/Toddler Curriculum Framework rests on four principles",
      "Suggestive Developmentally Appropriate/Age-appropriate Activities",
      "Lesson Plans",
    ],
  },
  {
    title: "Phase 9. Different Teaching Methods",
    items: [
      "Dr. Maria Montessori – her philosophy and methodology",
      "Sensorial Training",
      "Mathematics in Montessori",
      "Language and Story Telling",
      "Music, Movement & Art",
    ],
  },
  {
    title: "Phase 10. Montessori Methodologies and Apparatus",
    items: [
      "The Importance of morning work circle in Montessori schools",
      "Sensorial Material",
      "Cylinder Blocks",
      "Pink Tower",
      "Exercises",
      "Language",
      "The Prepared Environment",
      "Mathematics",
    ],
  },
  {
    title: "Phase 11. Kindergarten",
    items: [
      "History of Kindergarten",
      "Froebel's Kindergarten Curriculum Method & Educational Philosophy",
      "Method of Teaching According to Froebel Role of the Educator",
    ],
  },
];

const schoolAdminPhase: CoursePhase = {
  title: "Phase 12. School Administration and Management",
  items: ["Planning and Infrastructure", "The Recruitment Process", "Crisis and Disaster Management"],
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
  ...phases1to11,
  schoolAdminPhase,
  {
    title: "Phase 13. Learning as a Process",
    items: ["Concept of learning", "Nature of learning", "Types of learning", "Theories of learning"],
  },
  {
    title: "Phase 14. Mother's Care and Habit Formation",
    items: ["Concept", "Approaches for achieving good habits", "Parental Control"],
  },
  {
    title: "Phase 15. Overview of a 21st Century Educator",
    items: [
      "Think outside the classroom",
      "Deal with the inclusive classroom",
      "Promote Digital and Inquiry based learning",
      "Make Students Your Co –Learner!",
    ],
  },
  {
    title: "Phase 16. Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
  {
    title: "Phase 17. Educational Supervision",
    items: [
      "Function of Supervision",
      "Aspects of Supervision - administration (normative); education (formative) and support (restorative)",
    ],
  },
];

const diplomaPhases: CoursePhase[] = [
  ...phases1to11,
  schoolAdminPhase,
  {
    title: "Phase 13. Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
];

const certificatePhases: CoursePhase[] = [
  { title: "Phase1. Educational Psychology", items: [] },
  { title: "Phase 2. Principles and Approaches", items: [] },
  { title: "Phase 3. Physical, Cognitive and Emotional Developmental stages.", items: [] },
  { title: "Phase 4. Language Learning", items: [] },
  { title: "Mid term Assignment", items: [] },
  { title: "Phase 5. Importance of Play", items: [] },
  { title: "Phase 6. Instructional Strategies", items: [] },
  { title: "Phase 7. Classroom Management", items: [] },
  { title: "Phase 8. Curriculum and Lesson Plan Lesson Plan (art and craft)", items: [] },
];

const longCertification = [
  "The world of education is often found to be spoiled by questionable certification of academic courses. In order to draw a line between genuine, bona fide qualifications and those that are fabricated for commercial gain, it is imperative that education companies provide accredited certification.",
  "GTT Academy is the only platform where teachers are facilitated with such a badge of authenticity. Global Teacher Training Academy provides an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of its courses. The Apostille certificate is accepted across all embassies worldwide and therefore across all board schools in India and abroad.",
  "The apostille certificate authenticates the credibility of personal, educational and commercial documents with the help of a signature, seal or stamp so that they get accepted when presented in another country. An Apostille contains a computer-generated unique identification number to maintain records online. It also helps to allow the concerned authorities to check the authenticity with ease. After receiving this Apostille from the MEA, there is no need for any added certification from the embassy.",
  "An Apostille can only be obtained for documents issued in one country party to the Apostille convention and can be used in another country that is also a party to the same convention. India is a signatory to the Apostille convention and had been delegated with the same authorities for authentication of documents for both Attestation and Apostille. In simple words, Apostille is an international attestation that is accepted across 112 countries, and most of the western world recognises the Apostille Service. Therefore you can apply for a teacher's job across all board schools in both India and abroad with this Apostille certificate with confidence.",
  "The Apostille certification ensures the standard of the academic processes and showcases it to the employers. All our courses fall under the Apostille certification to ensure a higher level of learning for the students.",
  "Global Teacher Training Academy helps teachers embark on a career that imbibes the best teaching methodologies and strategies that help them aim high in their teaching profession. It is devoted to design tailor-made teacher training courses and vows to exhibit the high standard of training and likely courses that it promises to offer.",
  "Our certificates do not specify the online or distance learning mode of study. This allows you to present your qualification with the same recognition as a traditional degree.",
  "On successful completion of the course, you shall be provided with an Apostille certificate granted by MEA (Ministry of External Affairs) which will speak about your eligibility in this field of global teaching.",
  "A transcript will also be provided to the students showcasing the content of the study. It lists the modules covered in the program and helps teachers while applying for a teacher's job across all board schools both in India and abroad.",
];

export const nurseryCourse = {
  title: "Nursery Teacher Training With Practical Session",
  image: "/images/courses/nursery-detail.jpg",
  pageIntro: [
    "Nursery teachers hold a position of prime importance in the formative years of a child. The teachers are the ones responsible for taking care of children while teaching them the fundamental basics of life and education. They are the ones who play a significant role in cultivating the next generation and helping them to be successful later in life. A nursery teacher's role can be summed up as a combination of a caregiver, enabler, and educator. Besides, he or she provides the primary emotional resource for young children. We at Global Teacher Training Academy (GTT Academy) offers the Nursery Teachers Training Course for teachers to assist them in their search for knowledge. They are trained in areas like child education, teaching methodology, nursery level subjects & communication. The Nursery Teacher Training Course could be availed in Online/Distance Mode of learning, encouraging greater independence, flexibility and autonomy on the part of the learner. At GTT Academy the Nursery Teacher Training course is offered in 3 levels",
  ],
  levelList: [
    "Certificate Course in Nursery Teacher Training",
    "Diploma Course in Nursery Teacher Training.",
    "PG Diploma Course in Nursery Teacher Training.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      intro: [
        "The Post Graduate Diploma in Nursery teachers Training, is a more advanced course for preparing teachers for the Pre-primary level. Nursery teachers needs to be creative and adaptive in their interactions with young learners. Lessons in early education classrooms are very hands-on. They involve arts and crafts, storytelling, exercise, educational games and more. This program helps teachers acquire the right knowledge to facilitate the training of young minds. The Course has been designed to provide a in-depth view of the theoretical as well as practical aspects of preschool education in the existing and emerging educational scenario. The course also covers Montessori methods which is generally based on the idea that children learn best when the environment supports their natural desire to acquire skills and knowledge. It is a 12 months course and enables flexible learning via Online/Distance Mode of education.",
      ],
      focus: focusPgDiploma,
      eligibility: "Minimum eligibility criteria for taking up the course are Graduation in any stream.",
      whoCanJoin: whoCanJoinPgDiploma,
      courseContentIntro: "The content of the course covers the follows:",
      phases: pgPhases,
      modeIntro,
      online,
      distance,
      fee: "PG Diploma in Nursery Teachers Training is a all inclusive course which enables one to become a versatile teacher. The course puts special emphasis on the “initial formative years” of the child helping them bloom into sound individuals. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You may avail this course for a reasonable fee of 20000 INR +GST or 325 USD along with tutor guidance and course material.",
    },
    {
      id: "diploma",
      label: "Diploma Course",
      intro: [
        "Diploma in Nursery teachers Training, is a more advanced course for preparing teachers for the Pre-primary level. Nursery teachers needs to be creative and adaptive in their interactions with young learners. Lessons in early education classrooms are very hands-on. They involve arts and crafts, storytelling, exercise, educational games and more. This program helps teachers acquire the right knowledge to facilitate the training of young minds. The Course has been designed to provide a in-depth view of the theoretical as well as practical aspects of preschool education in the existing and emerging educational scenario. The course also covers Montessori methods which is generally based on the idea that children learn best when the environment supports their natural desire to acquire skills and knowledge. It is a 8 month course and enables flexible learning via Online/Distance Mode of education.",
      ],
      focus: focusPgDiploma,
      eligibility: "Minimum eligibility criteria for taking up the course is (10+2) or graduation in any stream.",
      whoCanJoin: whoCanJoinPgDiploma,
      courseContentIntro: "The content of the course covers the follows:",
      phases: diplomaPhases,
      modeIntro,
      online,
      distance,
      fee: "Diploma in Nursery Teachers Training is a all inclusive course which enables one to become a versatile teacher. The course puts special emphasis on the “initial formative years” of the child helping them bloom into sound individuals. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You need eligibility criteria of completion of grade 12 or graduation to apply for this online course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material support .",
    },
    {
      id: "certificate",
      label: "Certificate Course",
      intro: [
        "Nursery teachers are the first teachers to provide instruction to the children, hence they play a huge part in the formative years of a child. The aspiring teachers will learn the advanced methodologies of education along with classroom management and conducting interactive activities for children to make the learning experience more enjoyable. Certificate course in Nursery teachers training is a quality course, wherein our experienced tutors provide students with outstanding support and mentorship. Trainees will learn the aspects of child development and how to make lesson plans, make crafts for kids and understanding child psychology. The course is taught with detailed study materials and examples so that the teacher can educate the children with expertise. It helps in understanding the educational practices foundational to beginning a career as a professional educator such as basic information about the human development, learning processes, instructional processes, diverse learners, educational psychology, research based instructional strategies, language teaching approaches and classroom management techniques. It is a 6 month course and enables flexible learning via Online/Distance Mode of education.",
      ],
      focus: focusCertificate,
      eligibility: "Minimum eligibility criteria for taking up the course is 10th Pass or (10+2) or a graduation in any stream.",
      whoCanJoin: whoCanJoinCertificate,
      courseContentIntro: "The content of the course covers the follows:",
      phases: certificatePhases,
      modeIntro,
      online,
      distance,
      fee: "Certificate course in Nursery Teachers Training is a complete course which enables one to become a versatile teacher. The course puts special emphasis on the “initial formative years” of the child helping them bloom into sound individuals. With the modern methodologies and skills, teachers can reach the skies and expand their teaching horizons globally. You need eligibility criteria of completion of grade 12 or graduation to apply for this online course to learn the early childhood teaching methodologies. You may pursue this course by spending a reasonable fee of 10000 INR + GST or 160 USD along with tutor guidance and course material support .",
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
    apostilleSteps: [
      "Notary Attestation",
      "Home Department Attestation.",
      "HRD Attestation",
      "SMD Attestation",
      "Chamber of Commerce Attestation",
      "MEA Attestation",
    ],
    apostilleNote:
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At GTT Academy we provide the apostilled Certificate for legalization which can save your valuable time and energy. Educational documents are documents that are proof of your educational history that deal with your academic performances and the courses accomplished over time.",
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
