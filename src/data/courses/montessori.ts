export type CoursePhase = {
  title: string;
  items: string[];
};

export type CourseExtraSection = {
  title: string;
  paragraphs: string[];
};

export type CourseLevel = {
  id: string;
  label: string;
  intro: string[];
  focus: string[];
  extraSections?: CourseExtraSection[];
  eligibility: string;
  whoCanJoin: string[];
  courseContentIntro?: string;
  phases: CoursePhase[];
  modeIntro: string;
  online: { title: string; text: string; items: string[] };
  distance: { title: string; text: string; items: string[] };
  fee: string;
  certification: string[];
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

const whoCanJoinPg = [
  "Aspiring teachers: who want to begin their careers as an early childhood instructor.",
  "Experienced teachers: of young children who wish to gain insight into the best way to individualize their teaching curriculum based on Montessori and modern methodologies.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening Montessori school.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const whoCanJoinDiploma = [
  "Aspiring teachers: who want to begin their careers as an early childhood instructor.",
  "Experienced teachers: of young children who wish to gain insight into the best way to individualize their teaching curriculum based on Montessori methods.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening Montessori school.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const whoCanJoinCertificate = [
  "Aspiring teachers: who want to begin their careers as an early childhood instructor.",
  "Experienced teachers: of young children who wish to gain insight into the best way to individualize their teaching curriculum, based on Montessori methodologies.",
  "Career changers: who want a shift in their career.",
  "Entrepreneurs: who are interested in opening Montessori school.",
  "Young mothers or Care givers: who want to be an effective educator at home for children.",
  "Homemakers: who are looking to take up a job that will help in maintaining the work-home balance.",
];

const phase1Block: CoursePhase[] = [
  {
    title: "Phase 1. Principles of Education",
    items: [
      "Social Agency of Education",
      "Family",
      "School",
      "Method of Education",
      "Kindergarten",
      "Play & Play way in Education",
    ],
  },
  {
    title: "Educators",
    items: ["Rousseau", "John Dewey", "Rabindranath Tagore", "Mahatma Gandhi", "Teacher and her Qualification"],
  },
  {
    title: "History of Development of Primary Education",
    items: ["Ancient", "Medieval", "Modern"],
  },
];

const phase2to6: CoursePhase[] = [
  {
    title: "Phase 2. Dr. Montessori and her life",
    items: [
      "Montessori Method and how it originated",
      "Personal and Social task of Man at Birth",
      "Sensitive Period",
      "The Child and Adult",
      "Nature's Teaching",
      "Observation and Discovery",
      "The Teacher's Preparation",
      "Spiritual Preparation",
      "Value of Story-telling",
      "Prejudices regarding the Child",
      "Non-violence and the Child",
      "Normalization through Work",
      "Building of the House of Children",
    ],
  },
  {
    title: "Phase 3. Child Psychology – theories and practice",
    items: [
      "Psychology and the Teacher",
      "Principles and Methods",
      "The Pre-natal Period, Importance of Conception",
      "Physical and Motor Development in Pre-school age",
      "Development of Motor abilities",
      "Social Development in Pre-school years",
      "Common Emotions of Early Childhood",
      "Discipline, Types of Discipline",
    ],
  },
  {
    title: "Phase 4. EPL (Exercises of practical Life)",
    items: [
      "Elementary Movements and Preliminary Activities",
      "Montessori Practical Life Exercises for Self-Care",
      "Montessori Practical Life Exercises for Environment Care",
      "Montessori Practical Life Exercises for the Development of Social Skills, Grace & Courtesy",
      "The Third Environment",
      "Developmental Activities",
    ],
  },
  {
    title: "Phase 5. Sensorial",
    items: ["The Purpose of Sensorial Work", "Exercise Groups", "The Designed Material"],
  },
  {
    title: "Phase 6. Montessori Apparatus",
    items: ["Sensorial Materials", "Practical Life Exercises", "Language", "Prepared Environment"],
  },
];

const phase7to11: CoursePhase[] = [
  {
    title: "Midterm Assignment",
    items: [],
  },
  {
    title: "Phase 7. Mathematics and Numbers in Montessori",
    items: [
      "Preliminary Activities",
      "Sandpaper Numerals",
      "Number Rods",
      "Spindle Box",
      "Cards and Counters",
      "Odds and Evens",
    ],
  },
  {
    title: "Phase 8. Language and Story Telling",
    items: ["The Components of Language", "Preparation of the child to receive language", "Storytelling"],
  },
  {
    title: "Phase 9. Music, Movement & Art",
    items: ["Introduction to Art", "Stages of Art", "Aims of Art", "Classroom procedure of Art"],
  },
  {
    title: "Phase 10. Yoga and Nutrition",
    items: [
      "Nutrition and Food Requirements for Pre-school Children",
      "Nutritional Requirements",
      "Factors Affecting Nutritional Status of Children",
      "Yoga for Children",
      "Health Benefits",
    ],
  },
  {
    title: "Phase 11. Computers",
    items: ["Computers in Montessori Classrooms", "Evaluation of current uses"],
  },
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

const pgPhases: CoursePhase[] = [
  ...phase1Block,
  ...phase2to6,
  ...phase7to11,
  {
    title: "Phase 12. Methodology",
    items: [
      "a. Direct/Traditional Teacher Centered",
      "i. Disadvantages of traditional teacher centered approach",
      "ii. Pros and corns of traditional teacher centered approach",
      "iii. Are traditional teaching methodologies still effective?",
      "b. Hands-on / Inquiry Student Centered",
      "i. How has inquiry-based learning developed since it first became popular",
      "ii. Objectives of inquiry/hands-on, student centric approach",
      "iii. What are the benefits of inquiry-based learning?",
      "iv. Which is best: Teacher-Centered or Student-Centered education?",
      "c. Collaborative/ Cooperative Shared Centered",
      "i. Meaning of collaboration/cooperative approach",
      "ii. Cooperative and Collaborative learning series",
      "iii. Similarities and Differences between Cooperative and collaborative learning",
      "iv. What are the benefits of cooperative and collaborative",
      "v. How do cooperative and collaborative learning diverge from the traditional approach",
      "d. Constructivist Teaching Methods",
    ],
  },
  {
    title: "Phase 13. Development",
    items: [
      "a. Physical Development",
      "i. Gross skill",
      "ii. Motor Skill",
      "b. Social development and emotional development",
      "c. Intellectual development",
    ],
  },
  {
    title: "Phase 14. School Administration",
    items: ["Planning and infrastructure", "The recruitment process", "Managing finances", "Anticipating disasters"],
  },
  {
    title: "Phase 15. Instructional strategies and Class Room management",
    items: [
      "Creating the Right Classroom Climate",
      "Effective teaching strategies",
      "Evidence Based Teaching Strategies",
      "Early Childhood Classroom Management",
      "Language Teaching Strategies and Techniques",
      "Strategies for Motivating Students in Mathematics",
      "Instructional Strategies used for social study classroom",
      "Educational Trends That Affect Teaching",
      "Instructional Approaches That Support Inclusion in Diverse, StandardsBased Classroom",
    ],
  },
  {
    title: "Phase 16. Educational Technology",
    items: [
      "Nature and scope of educational technology",
      "Benefits of Technology Integration in the Education Sphere",
      "Usage of Audio-visual aid in the teaching",
      "Usage of PowerPoint in the Classroom",
      "Usage of smart board in classroom",
    ],
  },
  {
    title: "Phase 17. Mastering AI and Digital Tools for Modern Education",
    items: aiPhaseItems,
  },
  {
    title: "Phase 18. Lesson planning and Evaluation (End term)",
    items: ["Creating a lesson plan", "Evaluation: Meaning, Principles and Functions"],
  },
];

const diplomaPhases: CoursePhase[] = [
  ...phase1Block,
  ...phase2to6,
  ...phase7to11,
  {
    title: "Phase 12. Mastering AI and Digital Tools for Modern Education",
    items: [...aiPhaseItems, "End –Term assignment and Making of Lesson Plan"],
  },
];

const certificatePhases: CoursePhase[] = [
  { title: "Phase1. Principles of Education", items: [] },
  { title: "Phase 2. Dr. Maria Montessori – her philosophy and methodology", items: [] },
  { title: "Phase 3. Child Psychology – theories and practice", items: [] },
  { title: "Phase 4. EPL (Exercises of practical Life)", items: [] },
  { title: "Phase 5. Sensorial", items: [] },
  { title: "Phase 6. Montessori Apparatus", items: [] },
  { title: "End –Term assignment", items: [] },
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

export const montessoriCourse = {
  title: "Montessori Teacher Training with Practical Session",
  image: "/images/courses/montessori-detail.jpg",
  pageIntro: [
    "Montessori Teachers Training Course, at Global Teacher Training Academy (GTT Academy) is a comprehensive course that empowers teachers to expand their horizons and become trusted aides in learning. The course teaches you educational philosophies and sensorial studies, mathematics and child psychology in en emerging society. Teachers are taught about the challenges each student in the 2-12 years old category face.",
    "Our goal at GTT Academy is to train aspirants wanting to become trained Montessori teachers with the help of Online, Distance programs and incorporating contemporary teaching techniques and methods.",
  ],
  levels: [
    {
      id: "pg-diploma",
      label: "PG Diploma Course",
      intro: [
        "Post Graduate Diploma Level in Montessori Teachers Training is an all inclusive,comprehensive course that deals with the Dr. Maria Montessori's methodologies and extensive with teaching styles in this particular school of thought. Over a century later, Dr. Maria Montessori's life's work and philosophy help us understand how children are the key to a more peaceful world. The Montessori curriculum helps build human connections, philanthropy, and an understanding that we are all interconnected and interdependent. In carefully- prepared learning environments and supported by their guides, children learn abstract ideas and are able to solve problems with materials that prompt self-correction. They strive to support the whole child, helping children at all stages of development become capable, independent, collaborative learners.",
        "Today, in Montessori schools around the world, staffed with Montessori-certified educators called 'guides', continue Dr. Montessori's work. Montessori preschools focus on child-centered learning. ... By emphasizing the development of the child's intellectual, physical, moral, social and emotional development, Montessori schools help children become independent thinkers with a lifelong love of learning.",
        'A pioneer in enabling children learn through meaningful experience, she is an inspiration worldwide to what is popularly known as the "Montessori schools". The course takes a extensive view at the Montessori Method and philosophy with an overview of its relevance and application in today\'s cyber age. The course takes an overall view of the philosophy and methodologies related to early childhood education world-wide and touches upon the psychology related to early childhood, before discussing in details the various aspects of the Montessori Method.',
      ],
      focus: [
        "Enables you to become a full fledged, well trained Montessori teacher equipped with skills to meet the professional level in Montessori and new teaching thoughts and practices.",
        "It will assist you to be fully qualified as a Teaching Assistant or Early Years Educator in any Montessori setup or school.",
        "It covers all aspects of specialist support including planning the lesson, delivering, and reviewing the assessment strategies to support learning/teaching.",
        "It provides an in-depth understanding of the knowledge and skills required when working directly with children.",
        "It covers all aspects of specialist support including planning the lesson, delivering, and reviewing the assessment strategies to support learning/teaching.",
        "It provides an in-depth understanding of the knowledge and skills required when working directly with children.",
        "It will make you proficient in comparing the preschool philosophies.",
      ],
      eligibility:
        "Minimum eligibility criteria for taking up the course is successful completion of graduation under any stream. Both aspiring as well as experienced teachers are eligible to apply for this online/Distance course to learn the Montessori teaching methodologies.",
      whoCanJoin: whoCanJoinPg,
      phases: pgPhases,
      modeIntro,
      online,
      distance,
      fee: "The Post Graduate Diploma Course In Montessori Teacher Training Course is an intensive 12 months program dedicated for aspiring as well as working teachers looking for skills and knowledge in early childhood education. This training program allows you to strengthen and learn those essential skills in Montessori Method that has been identified as one of the most popular and efficient training methods. The Post Graduate Diploma Course offers a complete, intensive knowledge, on the Montessori methodology in the conventional schools. This is the most advanced course for those who are interested in Montessori Teaching. The course material is designed to understand and implement the technology of Montessori. . You need eligibility criteria of completion of Graduation in any stream to apply for this online/Distance course to learn the Montessori Methodologies. You may avail this course for a reasonable fee of 20000 INR +GST or 325 USD along with tutor guidance and course material.",
      certification: [
        "On successful completion of the course, globally recognized appostilled certificate will be awarded which will speak about your eligibility in this field of global teaching.",
        "1.Apostilled Certificate from the– Global Teacher Training Academy",
        "The apostilled certificate will be useful for a successful career as it will produce upper hand over other applicants for the teaching job. The apostilled Certificate will be valid internationally as well as nationally.",
      ],
    },
    {
      id: "diploma",
      label: "Diploma Course",
      intro: [
        "Diploma in Montessori Teachers Training is one of the eminent courses taught at the GTT Academy. This course helps teachers learn about the basics of the Montessori Teachers Training and how the entire course is structured for learners at advanced level. The role of the teacher in the Montessori classroom is different from that of the traditional teacher. They first observes the child to ascertain his/her interests and developmental level, and then gently directs the child towards appropriate activities so that she/he learns for him/herself through the environment and through the specially designed educational materials. The entire Course is spread over a duration of 8 months. In Montessori classrooms children make creative choices in their learning, while the classroom and the highly trained teacher offer age-appropriate activities to guide the process. Montessori is a method of education that is based on self-directed activity, hands-on learning and collaborative play. These activities are grouped under 5 areas:-",
      ],
      focus: [
        "It will assist you to be fully qualified as a Teaching Assistant or Early Years Educator in any Montessori setup or school.",
        "Enables you to update the knowledge and skills as well as meet the professional level in Montessori field.",
        "It covers all aspects of specialist support including planning the lesson, delivering, and reviewing the assessment strategies to support learning/teaching.",
        "It provides an in-depth understanding of the knowledge and skills required when working directly with children.",
        "It covers all aspects of specialist support including planning the lesson, delivering, and reviewing the assessment strategies to support learning/teaching.",
        "It provides an in-depth understanding of the knowledge and skills required when working directly with children.",
        "It will make you proficient in comparing the preschool philosophies.",
      ],
      extraSections: [
        {
          title: "CULTURAL SUBJECTS",
          paragraphs: [
            'Dr. Maria Montessori wrote, "The child is both the hope and a promise for mankind."Children begin to realize that they are part of a larger community from an young age. Montessori methodologies and philosophy, helps in giving the children a cutting edge above their contemporaries in the traditional schools. Montessori children are exposed to some cultural subjects like Botany, Zoology, Life science, Geography, History, Music and Art to help feed their imagination and understand the functioning of the real world during the time that they are most sensitive to them. Impressionistic lessons lay the groundwork for future learning, by capturing the children\'s imaginations.',
          ],
        },
        {
          title: "MATHEMATICS",
          paragraphs: [
            "In Montessori method the children are helped to understand the abstract concept of numbers through concrete materials. Once a child is able to build a visual representation of a number, by working with concrete materials, the child can see and understand the operations of Addition, Multiplication, Subtraction and Division. Number itself cannot be defined and understanding of number grows from experience with real objects but eventually they become abstract ideas. It is one of the most abstract concepts that the human mind has encountered. In Montessori method a solid foundation is formed for Algebra and Geometry through working with concrete materials.",
          ],
        },
        {
          title: "LANGUAGE",
          paragraphs: [
            'Dr. Maria Montessori said, "To talk is in the nature of man." We humans need language in order to communicate, and thereafter the powers that come with language were revealed. The traditional method in Montessori approach to introduce the letters in alphabet is through sandpaper letters, which allow a child to trace the letter, feeling its pattern and hearing or making the sound. The child first learns the phonetic sound of the letters, which leads to building short phonetic words, he/she progresses at his/her own pace to reading longer phonetic words and is finally introduced to the different parts of grammar.',
          ],
        },
        {
          title: "SENSORIAL MATERIAL",
          paragraphs: [
            "According to Dr. Maria Montessori, sensorial experiences begin right when a child is born. Children use their senses in order to study their environment. By participating in sensory activities, children can consciously obtain clear information that helps them classify their surroundings. Sensorial materials help broaden and refine a child's senses. When a child combines Montessori designed materials with sensorial work, it helps them become more logical, perceptive, and aware. Each piece of material has one isolating quality, such as colour, weight, size, shape, texture, sound, smell, etc., which enables the child to take in impressions with true understanding and gives purpose, order and structure to his/her learning.",
          ],
        },
        {
          title: "PRACTICAL LIFE",
          paragraphs: [
            "Children are naturally curious and want to participate in the activities of daily life they see all around them. The practical life activities teach children how to take care of the space around them. Dr. Maria Montessori developed the Practical Life exercises to give children the opportunity to practice those skills, gain independence, and become fully functional members of their community.",
          ],
        },
      ],
      eligibility:
        "Minimum eligibility criteria for taking up the course is upon successful completion of Grade (10+2) or Graduation. Both aspiring as well as experienced teachers are eligible to apply for this online/Distance course to learn the Montessori teaching methodologies.",
      whoCanJoin: whoCanJoinDiploma,
      phases: diplomaPhases,
      modeIntro,
      online,
      distance,
      fee: "The Diploma Course In Montessori Teacher Training Course is an intensive 8 months program dedicated for aspiring as well as working teachers looking for skills and knowledge in early childhood education. This training program allows you to strengthen and learn those essential skills in Montessori Method that has been identified as one of the most popular and efficient training methods. The Diploma Course offers an up-gradation, on the Montessori methodology in the conventional schools. This is an advanced course for those who are interested in Montessori Teaching. The course material is designed to understand and implement the technology of Montessori. . You need eligibility criteria of completion of grade 12 or graduation to apply for this online/Distance course to learn the Montessori Methodologies. You may avail this course for a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material.",
      certification: longCertification,
    },
    {
      id: "certificate",
      label: "Certificate Course",
      intro: [
        "Montessori teaching presents an wonderful opportunity to connect with children, help them reach their potential, and guide them toward meaningful growth. It can be an incredibly rewarding career. To be trained as a Montessori teacher gives you the golden chance to change tomorrow by working with today's children. This job offers you engagement on a meaningful level and give you a career you can be passionate about. There is a large demand for trained Montessori teacher in India and abroad. It is a 6 month course and features complete knowledge about Montessori teaching imbibing concepts of Montessori principles, such as 'the absorbent mind, sensitive periods and the child tendencies, the subconscious power, which guide the child in self-construction and freedom to learn on its own within a structured environment. Dr. Maria Montessori described childhood as a process in which a hidden but definite plan of nature unfolds as the child works to create the adult personality. This course is imparted through Online/Distance Mode of learning. A globally recognized certificate will be awarded on completion of the course.",
      ],
      focus: [
        "Allows to teach at own pace, scientific method of teaching, reality orientated and specific materials – (sense of order).",
        "Preferences on activities according to inner need of the children.",
        "The course focuses on child and behavioural psychology.",
        "The course is developed with the prime motive to not only upgrade the skills of teachers, but also train them to smoothly conform to the modern teaching methodologies tinged with technological advancement, modernized classroom atmosphere and potentialities of future learners.",
        "Flexible curriculum.",
        "Help to arrange a cohesive and scientific environment which aids in self-learning.",
        "Recognition of sensitive periods in each child.",
        "Dig up the benefits of yoga, mindfulness and nourishment in to the children.",
        "Focus on developing the play materials for non-specific skills and multi- sensory materials to develop a specific skill.",
      ],
      eligibility:
        "Minimum eligibility criteria for taking up the course is upon successful completion of Grade (10+2) or Graduation. Both aspiring as well as experienced teachers are eligible to apply for this online/Distance course to learn the Montessori teaching methodologies.",
      whoCanJoin: whoCanJoinCertificate,
      courseContentIntro: "The content of the course covers the follows:",
      phases: certificatePhases,
      modeIntro,
      online,
      distance,
      fee: "The Certificate In Montessori Teacher Training Course is an intensive 6 months program dedicated for aspiring as well as working teachers looking for skills and knowledge in early childhood education. This training program allows you to strengthen and learn those essential skills in Montessori Method that has been identified as one of the most popular and efficient training methods. The Certificate Course offers an up-gradation, on the Montessori methodology in the conventional schools. This is an ideal course for those who are interested in Montessori Teaching. The course material is designed to understand and implement the technology of Montessori. . You need eligibility criteria of completion of grade 10/12 or graduation to apply for this online/Distance course to learn the Montessori Methodologies. You may avail this course for a reasonable fee of 10000 INR + GST or 160 USD along with tutor guidance and course material.",
      certification: longCertification,
    },
  ] satisfies CourseLevel[],
  shared: {
    accreditation: [
      "Global Teacher Training Academy (GTT Academy) stands out by offering teachers authentic, accredited certification through Apostille Certificates granted by the Ministry of External Affairs (MEA). These certificates, recognized globally, validate the credibility of educational documents, eliminating the need for additional embassy certification. GTT Academy simplifies the complex Apostille process, ensuring teachers receive internationally accepted certificates without hassle. This certification, accepted in 112 countries, enhances teachers' eligibility for global teaching positions. GTT Academy also provides transcripts detailing course content, further aiding job applications across various educational boards worldwide.",
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
      "It's quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At GTT Academy we provide the apostilled Certificate for legalization which can save your valuable time and energy.",
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
