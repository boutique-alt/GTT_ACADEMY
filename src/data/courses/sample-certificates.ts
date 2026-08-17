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

export const courseSampleCertificates: Record<string, Record<string, SampleCertificatePage[]>> = {
  montessori: {
    "pg-diploma": samplePages("mtt-pg-diploma", "Montessori Teacher Training", "PG Diploma"),
    diploma: samplePages("mtt-diploma", "Montessori Teacher Training", "Diploma"),
  },
  "pre-primary": {
    "pg-diploma": samplePages("pptt-pg-diploma", "Pre and Primary Teacher Training", "PG Diploma"),
    diploma: samplePages("pptt-diploma", "Pre and Primary Teacher Training", "Diploma"),
  },
  nursery: {
    "pg-diploma": samplePages("ntt-pg-diploma", "Nursery Teacher Training", "PG Diploma"),
    diploma: samplePages("ntt-diploma", "Nursery Teacher Training", "Diploma"),
  },
  "diploma-teaching": {
    diploma: samplePages("dtt-diploma", "Diploma in Teaching and Training", "Diploma"),
  },
  ecce: {
    "pg-diploma": samplePages("ecce-pg-diploma", "Early Childhood Care and Education", "PG Diploma"),
    diploma: samplePages("ecce-diploma", "Early Childhood Care and Education", "Diploma"),
  },
  admin: {
    "pg-diploma": samplePages("ed-admin-pg-diploma", "Educational Administration and Management", "PG Diploma"),
    diploma: samplePages("ed-admin-diploma", "Educational Administration and Management", "Diploma"),
  },
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
  "tefl-140": {
    diploma: samplePages("tefl-140", "140 Hour TEFL Course", "Diploma"),
  },
  "tesol-200": {
    "pg-diploma": samplePages("tesol-200", "200 Hour TESOL Course", "PG Diploma"),
  },
  nlp: {
    diploma: samplePages("nlp-diploma", "NLP for Students", "Diploma"),
  },
};

export function getCourseSampleCertificates(course: string, level = "diploma"): SampleCertificatePage[] {
  return courseSampleCertificates[course]?.[level] ?? [];
}
