import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const socialMediaLinks = [
  { label: "Facebook", href: "https://www.facebook.com/GTTAcademyIndia/", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/gttacademyindia/", icon: FaInstagram },
  { label: "X", href: "https://twitter.com/GTTAcademyIndia", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gtt-academy-india/", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCyZIENvB_cAU_Uvn_LXz1yg", icon: FaYoutube },
  { label: "WhatsApp", href: "https://wa.me/919674923512", icon: FaWhatsapp },
] as const;

type Props = {
  className?: string;
  iconClassName?: string;
  size?: number;
};

export default function SocialMediaLinks({
  className = "flex items-center gap-2",
  iconClassName = "grid size-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#30ad22]",
  size = 14,
}: Props) {
  return (
    <div className={className}>
      {socialMediaLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={iconClassName}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
