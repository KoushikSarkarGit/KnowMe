import { AnimatedPinCard } from "@/components/AnimatedPinCard";

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
      <main className=" bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="w-full md:h-[31rem] h-[50rem] flex flex-col justify-end items-center   ">
          <div className="mt-2">
            <h1 className="relative text-2xl">Contact Me</h1>
          </div>

          <div className="md:w-[50rem] w-[16rem] flex flex-row flex-wrap items-end justify-center">
            <AnimatedPinCard
              platform={"Email"}
              title={"sarkarkoushik557@gmail.com"}
              href={"mailto:sarkarkoushik557@gmail.com"}
              image={"/email_logo.png"}
            />
            <AnimatedPinCard
              platform={"Phone"}
              title={"9051276204"}
              href={"mailto:sarkarkoushik557@gmail.com"}
              image={"/phone_logo.png"}
            />
            <AnimatedPinCard
              platform={"Linkedin"}
              title={"linkedin.com/in/koushik-sarkar-0a57501b3"}
              href={"https://www.linkedin.com/in/koushik-sarkar-0a57501b3/"}
              image={"/Linkedin_logo.png"}
            />
            <AnimatedPinCard
              platform={"Whatsapp"}
              title={"9051276204"}
              href={"https://www.linkedin.com/in/koushik-sarkar-0a57501b3/"}
              image={"/Whatsapp_logo.png"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
