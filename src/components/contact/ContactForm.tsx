import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

export default function ContactForm() {
  return (
    <WufooEmbed
      formHash={wufooForms.application.formHash}
      height={wufooForms.application.height}
      className="min-h-[400px] w-full"
    />
  );
}
