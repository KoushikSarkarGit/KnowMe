import { AnimatedPinCard } from "@/components/AnimatedPinCard";
import { number } from "motion";

export default function ContactMe() {
  interface contactdatatype {
    id: number;
    platform: string;
    contact: string;
    platformImage: string;
  }
  const contactdata: contactdatatype[] = [
    {
      id: 1,
      platform: "Email",
      contact: "sarkarkoushik557@gmail.com",
      platformImage: "/email_logo.png",
    },
    {
      id: 2,
      platform: "Mobile",
      contact: "9051276204",
      platformImage: "/email_logo.png",
    },
    {
      id: 3,
      platform: "WhatsApp",
      contact: "9051276204",
      platformImage: "/email_logo.png",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="w-full h-[40rem] flex justify-center items-center flex-wrap">
          <AnimatedPinCard
            platform={"Email"}
            title={"sarkarkoushik557@gmail.com"}
            href={"mailto:sarkarkoushik557@gmail.com"}
            image={"/email_logo.png"}
          />
          <AnimatedPinCard
            platform={"Email"}
            title={"sarkarkoushik557@gmail.com"}
            href={"mailto:sarkarkoushik557@gmail.com"}
            image={"/email_logo.png"}
          />
          <AnimatedPinCard
            platform={"Email"}
            title={"sarkarkoushik557@gmail.com"}
            href={"mailto:sarkarkoushik557@gmail.com"}
            image={"/email_logo.png"}
          />
        </div>
      </main>
    </>
  );
}
