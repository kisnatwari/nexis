import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What features does the Nexis Gym Management Software offer?",
    answer: `The software includes:
1. Advanced Access Control System: Secure access with face recognition and fingerprint systems.
2. Integrated Multi-Operational Software: Combines various operations for easy management.
3. Comprehensive Membership Management: Handles registrations, renewals, attendance, and updates.
4. Automated SMS Alert System: Sends notifications for renewals and announcements.
5. Efficient QR Code System: Simplifies registrations and renewals.
6. Robust Accounting Features: Tracks payments and revenues with detailed records.`,
    value: "item-1",
  },
  {
    question: "How does the Advanced Access Control System enhance security and efficiency?",
    answer: `Our software uses face recognition and fingerprint systems to ensure only authorized and active members access the gym. This system improves security by preventing unauthorized entry and enhances efficiency by allowing quick and seamless access for members.`,
    value: "item-2",
  },
  {
    question: "Can I manage multiple gym locations with Nexis Gym Management Software?",
    answer: `Yes, you can manage multiple locations from a single dashboard. This allows control over memberships, staff, schedules, and finances across all branches.`,
    value: "item-3",
  },
  {
    question: "How does Nexis Gym Management Software improve member engagement?",
    answer: `The software sends timely alerts for payment expirations and special promotions. This keeps members informed and engaged, reducing manual reminders for management and improving customer satisfaction.`,
    value: "item-4",
  },
  {
    question: "Is the Nexis Gym Management Software compatible with mobile devices?",
    answer: `Yes, the software is fully compatible with mobile devices. Members can create and renew memberships by scanning a QR code, providing convenience on the go.`,
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Nexis Gym Management Software Features
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-4">
                {answer.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};