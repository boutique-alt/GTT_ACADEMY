import { Mail, MapPin, Phone } from "lucide-react";

const cards = [
  {
    title: "Address",
    icon: MapPin,
    accent: "from-[#f0faf3] to-white",
    iconBg: "bg-[#30ad22]/12 text-[#30ad22]",
    content: (
      <>
        <p>
          <strong className="text-[#05245b]">Address</strong>: Level 1, Unit 2, Sy.No. 83/1, Plot no 2, Inorbit Mall Road,
          <br />
          Raidurg Village, Hi-Tech City, Hyderabad - 500081, TS, India.
        </p>
        <p className="mt-4">
          <strong className="text-[#05245b]">Branches</strong>: Hyderabad&nbsp;&nbsp;Bangalore.&nbsp;&nbsp;Delhi.&nbsp;&nbsp;Kerala.&nbsp;&nbsp;Mysore&nbsp;&nbsp;Kolkata&nbsp;&nbsp;Pune&nbsp;
          Guwahati
        </p>
      </>
    ),
  },
  {
    title: "Call Us",
    icon: Phone,
    accent: "from-[#eef4ff] to-white",
    iconBg: "bg-[#0045bc]/10 text-[#0045bc]",
    content: (
      <>
        <p>
          <strong className="text-[#05245b]">India Toll Free Number :{" "}
            <a href="tel:18001203481" className="text-[#0045bc] transition hover:text-[#30ad22]">
              18001203481
            </a>
          </strong>
        </p>
        <p className="mt-2">
          <strong className="text-[#05245b]">Mobile/Whatsapp number:{" "}
            <a href="tel:9674923512" className="text-[#0045bc] transition hover:text-[#30ad22]">
              9674923512
            </a>
          </strong>
        </p>
      </>
    ),
  },
  {
    title: "Email",
    icon: Mail,
    accent: "from-[#fff8e8] to-white",
    iconBg: "bg-[#ffbc09]/20 text-[#b8860b]",
    content: (
      <p>
        <a
          href="mailto:enquiry@globalteachersacademy.com"
          className="block break-all text-sm font-semibold leading-6 text-[#0045bc] transition hover:text-[#30ad22] sm:text-[15px]"
        >
          enquiry@globalteachersacademy.com
        </a>
      </p>
    ),
  },
];

export default function ContactInfoCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map(({ title, icon: Icon, content, accent, iconBg }) => (
        <div
          key={title}
          className={`min-w-0 rounded-2xl border border-slate-100 bg-gradient-to-b ${accent} p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7`}
        >
          <span className={`mx-auto mb-4 grid size-12 place-items-center rounded-full ${iconBg}`}>
            <Icon size={22} />
          </span>
          <h3 className="font-serif text-xl font-bold text-[#05245b]">{title}</h3>
          <div className="mt-4 min-w-0 overflow-hidden text-[14px] leading-7 text-slate-600">{content}</div>
        </div>
      ))}
    </div>
  );
}
