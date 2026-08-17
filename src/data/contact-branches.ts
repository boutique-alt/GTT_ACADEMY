export type ContactBranch = {
  region: string;
  name: string;
  address: string;
  contact: string;
  tollFree?: string;
};

const INDIA_ASSOCIATE = "Our Business Associate";
const INDIA_CONTACT = "9674923512";
const INDIA_TOLL_FREE = "18001203481";
const INTL_CONTACT = "+91 9674923512 (Mobile/ WhatsApp)";

export const contactBranches: ContactBranch[] = [
  {
    region: "India Admin Office",
    name: "Hyderabad Admin Office",
    address:
      "Level 1, Unit 2, Sy.No. 83/1, Plot no 2, Inorbit Mall Road, Raidurg Village, Hi-Tech City, Hyderabad - 500081, TS, India.",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Bangalore",
    address:
      "Cosmic Academy\n#315, 1st Floor, near Sukh Sagar, opposite Western Union, Kammanahalli\nBangalore 560084",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Mysore",
    address: "Parigyan Preschool and Activity Center\nI block, #22 Ramakrishna Nagar\nMysore - 570022",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Pune",
    address: "Dolphins playschool and nursery\nWanowrie, Pune 411040",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Guwahati",
    address: "S.S. Consultancy\n6-mile, Khanapara, Guwahati - 781022",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Kerala",
    address: "Address will be updated shortly.",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Ahmedabad",
    address: "Cifl Educational training center\nCity center, Swastik cross road.\nAhmedabad - 380009",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Chhattisgarh",
    address: "Mrs. Jyoti Dewan\nKavita Nagar, Avanti Vihar\nRaipur, Chhattisgarh - 492001",
    contact: INDIA_CONTACT,
    tollFree: INDIA_TOLL_FREE,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Dubai - UAE",
    address: "Futurise Institute (Mr. Hiraz - +971 503041768)\nKnowledge Park, Dubai - United Arab Emirates",
    contact: INTL_CONTACT,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Riyadh - Saudi Arabia",
    address: "Mrs. Khanam Sikander\nClass and Care Academy\nKSA",
    contact: INTL_CONTACT,
  },
  {
    region: INDIA_ASSOCIATE,
    name: "Sint Maarten",
    address: "Ideal and Green Learning Academy\nAmaryllis Road #24, Mary's Fancy (Saunders), St. Maarten.",
    contact: INTL_CONTACT,
  },
];
