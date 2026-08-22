export type SampleCertificatePage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SAMPLE_SIZE = { width: 1191, height: 1684 } as const;

function samplePages(slug: string, courseLabel: string, levelLabel: string): SampleCertificatePage[] {
  return [
    {
      src: `/images/courses/samples/${slug}-certificate.png`,
      alt: `Sample ${levelLabel} certificate for ${courseLabel}`,
      ...SAMPLE_SIZE,
    },
    {
      src: `/images/courses/samples/${slug}-transcript.png`,
      alt: `Sample ${levelLabel} transcript for ${courseLabel}`,
      ...SAMPLE_SIZE,
    },
  ];
}

function sharedLevels(pages: SampleCertificatePage[], levels: string[]): Record<string, SampleCertificatePage[]> {
  return Object.fromEntries(levels.map((level) => [level, pages]));
}

const threeLevels = ["pg-diploma", "diploma", "certificate"];
const twoLevels = ["pg-diploma", "diploma"];

export const courseSampleCertificates: Record<string, Record<string, SampleCertificatePage[]>> = {
  montessori: sharedLevels(
    samplePages("mtt-pg-diploma", "Montessori Teacher Training", "PG Diploma"),
    threeLevels,
  ),
  "pre-primary": sharedLevels(
    samplePages("pptt-pg-diploma", "Pre and Primary Teacher Training", "PG Diploma"),
    threeLevels,
  ),
  nursery: sharedLevels(
    samplePages("ntt-pg-diploma", "Nursery Teacher Training", "PG Diploma"),
    threeLevels,
  ),
  "diploma-teaching": {
    diploma: samplePages("dtt-diploma", "Diploma in Teaching and Training", "Diploma"),
  },
  ecce: sharedLevels(
    samplePages("ecce-pg-diploma", "Early Childhood Care and Education", "PG Diploma"),
    twoLevels,
  ),
  admin: sharedLevels(
    samplePages("ed-admin-pg-diploma", "Educational Administration and Management", "PG Diploma"),
    twoLevels,
  ),
  "special-education": sharedLevels(
    samplePages("special-education", "Special Education Teacher Training", "Diploma"),
    twoLevels,
  ),
  psychology: {
    diploma: samplePages("child-psy-diploma", "Diploma in Child Psychology", "Diploma"),
  },
  counseling: {
    diploma: samplePages("counseling-diploma", "Diploma in Child and Adolescent Counseling", "Diploma"),
  },
  "train-the-trainer": {
    diploma: samplePages("ttt-diploma", "Train the Trainer Program", "Diploma"),
  },
  "teaching-phonetics": {
    certificate: samplePages("phonetics", "Teaching Phonetics", "Certificate"),
  },
  "classroom-management": {
    diploma: samplePages("phonetics", "Classroom Management Skill", "Certificate"),
  },
  "teaching-grammar": {
    diploma: samplePages("phonetics", "Teaching Grammar", "Certificate"),
  },
  "tefl-140": {
    diploma: samplePages("tefl-140", "140 Hour TEFL Course", "Diploma"),
  },
  "tesol-200": {
    "pg-diploma": samplePages("tesol-200", "200 Hour TESOL Course", "PG Diploma"),
  },
  "tesol-400": {
    diploma: samplePages("tesol-200", "400 Hour TESOL Course", "PG Diploma"),
  },
  ielts: {
    diploma: samplePages("ielts", "IELTS for Teachers", "Certificate"),
  },
  nlp: {
    diploma: samplePages("nlp-diploma", "NLP for Students", "Diploma"),
  },
};

export function getCourseSampleCertificates(course: string, level = "diploma"): SampleCertificatePage[] {
  return courseSampleCertificates[course]?.[level] ?? [];
}
