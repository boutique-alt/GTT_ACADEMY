import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialMediaLinks from "@/components/ui/SocialMediaLinks";
import { quickLinks, usefulLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#05245b] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-6 inline-block rounded-xl bg-white p-3">
            <Image src="/images/logo.png" alt="GTT Academy" width={174} height={58} />
          </div>
          <p className="text-sm leading-7 text-blue-100">A one-stop solution catering to a wide range of globally recognised teacher training courses.</p>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffbc09]">Follow us</p>
          <SocialMediaLinks className="mt-3 flex flex-wrap gap-2" size={16} />
        </div>
        <div>
          <h3 className="mb-5 text-lg font-bold">Contact us</h3>
          <ul className="space-y-4 text-sm leading-6 text-blue-100">
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#ffbc09]" size={17} />Level 1, Unit 2, Sy.No. 83/1, Plot no 2, Inorbit Mall Road, Raidurg Village, Hi-Tech City, Hyderabad - 500081, TS, India.</li>
            <li className="flex gap-3"><Mail className="shrink-0 text-[#ffbc09]" size={17} /><a href="mailto:enquiry@globalteachersacademy.com" className="transition hover:text-[#ffbc09]">enquiry@globalteachersacademy.com</a></li>
            <li className="flex gap-3">
              <Phone className="shrink-0 text-[#ffbc09]" size={17} />
              <span>
                <a href="tel:9674923512" className="transition hover:text-[#ffbc09]">9674923512</a>
                {" / "}
                <a href="tel:18001203481" className="transition hover:text-[#ffbc09]">18001203481</a>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-bold">Useful Links</h3>
          <ul className="grid gap-2.5 text-sm text-blue-100">
            {usefulLinks.map((item) => <li key={item.label}><a href={item.href} className="transition hover:text-[#ffbc09]">{item.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2.5 text-sm text-blue-100">
            {quickLinks.map((item) => <li key={item.label}><a href={item.href} className="transition hover:text-[#ffbc09]">{item.label}</a></li>)}
          </ul>
          <a
            href="https://goo.gl/maps/xJdUSuAhNABuXGAT7"
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#ffbc09]/40 hover:bg-white/10"
          >
            <p className="text-[#ffbc09]">★★★★★</p>
            <p className="mt-1 text-xs leading-5 text-blue-100">
              5 star rating based on 1014 reviews from our students on{" "}
              <span className="underline">Google</span>,{" "}
              <span className="underline">Facebook</span>
              {" "}&{" "}
              <span className="underline">Alumni</span>.
            </p>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-200">
        <p>© 2026 GTT Academy Pvt Ltd. All Rights Reserved.</p>
        <p className="mt-1.5">
          Design and developed by{" "}
          <a
            href="https://pixelsolution.in/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white transition hover:text-[#ffbc09]"
          >
            Pixel Solution
          </a>
        </p>
      </div>
    </footer>
  );
}
