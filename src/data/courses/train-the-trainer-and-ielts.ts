export type CoursePhase = {
  title: string;
  items: string[];
};

const shared = {
  accreditation: [
    "Global Teacher Training Academy (GTT Academy) stands out by offering teachers authentic, accredited certification through Apostille Certificates granted by the Ministry of External Affairs (MEA). These certificates, recognized globally, validate the credibility of educational documents, eliminating the need for additional embassy certification. GTT Academy simplifies the complex Apostille process, ensuring teachers receive internationally accepted certificates without hassle. This certification, accepted in 112 countries, enhances teachers' eligibility for global teaching positions. GTT Academy also provides transcripts detailing course content, further aiding job applications across various educational boards worldwide.",
  ],
  certification: [
    "The world of education is often found to be spoiled by questionable certification of academic courses. In order to draw a line between genuine, bona fide qualifications and those that are fabricated for commercial gain, it is imperative that education companies provide accredited certification.",
    "GTT Academy is the only platform where teachers are facilitated with such a badge of authenticity. Global Teacher Training Academy provides an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of its courses. The Apostille certificate is accepted across all embassies worldwide and therefore across all board schools in India and abroad.",
    "The apostille certificate authenticates the credibility of personal, educational and commercial documents with the help of a signature, seal or stamp so that they get accepted when presented in another country. An Apostille contains a computer-generated unique identification number to maintain records online. It also helps to allow the concerned authorities to check the authenticity with ease. After receiving this Apostille from the MEA, there is no need for any added certification from the embassy.",
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
    "The trainers guide the students extensively in completing their assigned projects. If, while completing the project a student faces a problem, he or she can get in touch with the trainer who will help the student immediately by providing tips on the subject. Students can contact their tutor from Monday to Sunday between 10 A.M to 7:30 pm by phone, email.",
  ],
  assessment: [
    "The trainees enrolling in any of the courses of GTT Academy can expect complete guidance from the experienced tutors who are committed to helping the trainees to achieve their learning goals.",
    "At the GTT Academy we have experienced tutors that help shape the learning curve of the learners.",
    "The assessments actually help trainees understand exactly where they are lacking and identify the room for change. Once the assessments are well documented and sent to learners, they will be awarded a globally recognized certificate that will fetch a lot of new job opportunities globally.",
    "A lot of importance is given on the evaluation process and the tutors take a maximum of 7 to 10 days to evaluate the assignments. The trainees can expect a thorough evaluation in the form of errors being pointed out along with encouraging remarks which boost their confidence level.",
  ],
};

export const trainTheTrainerCourse = {
  title: "Training the Trainer Program",
  image: "/images/courses/train-the-trainer-detail.jpg",
  pageIntro: [
    "The Train the Trainer course featured by Global Teacher Training Academy (GTT Academy) helps to produce skilled facilitators who can transform knowledge into a lasting and real-world learning. This comprehensive programme equips aspiring trainers with the mindset, methods, and management skills necessary to guide learners toward self-discovery in engaging, memorable ways. The 8 months course, will help participants master the art of group facilitation—learning to navigate group dynamics, manage challenging personalities, and cultivate strong team relationships using cooperative learning tools.",
    "At GTT Academy we wish to design a programme that successfully trains aspirants to conduct thorough Training Needs Analysis (TNA) to uncover root problems, determine if training is the proper solution, and set clear, purposeful goals. Participants also hone critical evaluation and feedback skills, learning how to use sharp observation techniques to deliver constructive spoken and written feedback while tracking learner progress.",
    "Upon completion of Train the Trainer course, our students will emerge as confident, well-rounded trainers fully prepared to design, deliver, and evaluate high-impact training programs in any professional setting.",
  ],
  focus: [
    "Master group facilitation and navigate group dynamics with confidence.",
    "Manage challenging personalities and cultivate strong team relationships.",
    "Apply cooperative learning tools for engaging, memorable sessions.",
    "Conduct thorough Training Needs Analysis (TNA) to uncover root problems.",
    "Determine whether training is the right solution and set clear goals.",
    "Deliver constructive spoken and written feedback using sharp observation techniques.",
    "Design, deliver, and evaluate high-impact training programs in any professional setting.",
  ],
  eligibility: "You may apply for the course on successful completion of Graduation in any stream.",
  whoCanJoin: [
    "Aspiring trainers and facilitators who want to build professional training skills.",
    "Practicing teachers and corporate trainers seeking structured facilitation methods.",
    "HR and L&D professionals responsible for workplace learning programs.",
    "Career changers eager to begin a coaching or training practice.",
  ],
  phases: [
    {
      title: "Phase 1 — Trainer Mindset & Facilitation Foundations",
      items: [
        "Role of a modern trainer and facilitator",
        "Transforming knowledge into real-world learning",
        "Mindset, methods, and management skills for trainers",
        "Guiding learners toward self-discovery",
        "Creating engaging and memorable learning experiences",
      ],
    },
    {
      title: "Phase 2 — Group Dynamics & Cooperative Learning",
      items: [
        "Art of group facilitation",
        "Navigating group dynamics",
        "Managing challenging personalities",
        "Building strong team relationships",
        "Cooperative learning tools and techniques",
      ],
    },
    {
      title: "Phase 3 — Training Needs Analysis (TNA)",
      items: [
        "Purpose and process of Training Needs Analysis",
        "Uncovering root problems behind performance gaps",
        "Determining if training is the proper solution",
        "Setting clear and purposeful training goals",
        "Aligning training design with organisational needs",
      ],
    },
    {
      title: "Phase 4 — Evaluation, Feedback & High-Impact Delivery",
      items: [
        "Observation techniques for learner progress",
        "Constructive spoken feedback",
        "Constructive written feedback",
        "Tracking learner progress effectively",
        "Designing, delivering, and evaluating high-impact training programs",
      ],
    },
  ] satisfies CoursePhase[],
  modeIntro:
    "At GTT Academy our courses are designed around the core teaching principles to help teachers continue their development and improve the lives of their students. GTT Academy offers well-tailored training programmes for aspiring as well as active professionals through ONLINE learning Mode.",
  online: {
    title: "ONLINE Learning Mode",
    text: "In Online mode, the course materials are sent to the students directly through email. They can access it and study whenever they want. This is the most flexible method of learning as the candidates who have time constraints can complete the course at their convenient time. Students both from India and abroad can avail this mode.",
    items: [
      "Course materials sent online through email.",
      "Full Tutor Support",
      "Online MCQ and Teaching assignments",
    ],
  },
  fee: "Training the Trainer Program is an 8-month comprehensive course that builds facilitation, TNA, and evaluation skills for professional trainers. You need eligibility criteria of graduation to apply for this Online course. You may pursue this course by spending a reasonable fee of 14000 INR + GST or 230 USD along with tutor guidance and course material support.",
  levelLabel: "Diploma",
  shared,
};

export const ieltsForTeachersCourse = {
  title: "IELTS for Teachers",
  image: "/images/courses/ielts-for-teachers-detail.jpg",
  pageIntro: [
    "IELTS (International English Language Testing System) is the world’s leading English proficiency test for higher education and global career opportunities. GTT Academy’s (Global Teacher Training Academy) IELTS training course helps you excel in the test, unlocking new possibilities.",
    "In today’s globalized world, demand for qualified EFL teachers is soaring. IELTS assesses your English skills, and our 6-month online training course prepares you for a successful career in English teaching. To enroll, you must be a graduate. The course is flexible, allowing you to learn at your own pace.",
    "Our globally recognized certificate enhances your credibility, giving you an edge in job applications. Additionally, we provide a transcript—a permanent academic record—exclusive to our course. No other institute offers this benefit, making our program a premium choice for career advancement.",
  ],
  focus: [
    "Prepare thoroughly for the world’s leading English proficiency test — IELTS.",
    "Strengthen English skills for higher education and global career opportunities.",
    "Build readiness for a successful career in English language teaching (EFL).",
    "Learn online with flexible pacing over 6 months.",
    "Earn a globally recognized certificate that strengthens job applications.",
    "Receive an exclusive transcript — a permanent academic record of your study.",
  ],
  eligibility: "To enroll, you must be a graduate.",
  whoCanJoin: [
    "Graduates preparing for IELTS for higher education or overseas opportunities.",
    "Aspiring EFL teachers who want stronger English proficiency credentials.",
    "Practicing teachers upgrading English language skills for career growth.",
    "Professionals seeking a globally recognized certificate and academic transcript.",
  ],
  phases: [
    {
      title: "Phase 1 — IELTS Overview & Skill Foundations",
      items: [
        "Understanding IELTS and its global recognition",
        "Overview of Listening, Reading, Writing and Speaking modules",
        "Building core English proficiency for test success",
        "Academic and general pathways for career and education goals",
      ],
    },
    {
      title: "Phase 2 — Module Mastery",
      items: [
        "Listening strategies and practice approaches",
        "Reading techniques for accuracy and speed",
        "Writing task structure, coherence and vocabulary",
        "Speaking fluency, pronunciation and confidence",
      ],
    },
    {
      title: "Phase 3 — Teaching Pathway & Professional Edge",
      items: [
        "Preparing for a career in English language teaching",
        "Connecting IELTS proficiency with EFL classroom readiness",
        "Flexible online learning at your own pace",
        "Globally recognized certification and exclusive transcript benefit",
      ],
    },
  ] satisfies CoursePhase[],
  modeIntro:
    "At GTT Academy our courses are designed around the core teaching principles to help teachers continue their development and improve the lives of their students. This IELTS for Teachers programme is offered through flexible ONLINE learning Mode.",
  online: {
    title: "ONLINE Learning Mode",
    text: "In Online mode, the course materials are sent to the students directly through email. They can access it and study whenever they want. This is the most flexible method of learning as the candidates who have time constraints can complete the course at their convenient time. Students both from India and abroad can avail this mode.",
    items: [
      "Course materials sent online through email.",
      "Full Tutor Support",
      "Online practice and assignments",
      "Learn at your own pace over 6 months",
    ],
  },
  fee: "IELTS for Teachers is a 6-month online training course that prepares graduates for IELTS excellence and English teaching careers. You must be a graduate to enroll. You may pursue this course by spending a reasonable fee of 12000 INR + GST or 200 USD along with tutor guidance and course material support.",
  levelLabel: "Certificate",
  shared,
};
