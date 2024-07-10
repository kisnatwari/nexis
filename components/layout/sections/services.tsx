import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Gym Management Software",
    description:
      "Our comprehensive gym management software helps streamline your operations, from membership management to financial tracking.",
    pro: 1,
  },
  {
    title: "Automated Member Engagement",
    description:
      "Keep your members informed and engaged with our automated SMS alert system and personalized content curation.",
    pro: 1,
  },
  {
    title: "Advanced Access Control",
    description:
      "Enhance security and efficiency with our face recognition and fingerprint-based access control system.",
    pro: 1,
  },
  {
    title: "Multi-Location Management",
    description:
      "Manage multiple gym locations from a single dashboard, with complete control over memberships, staff, schedules, and finances.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Elevate Your Gym with Nexis
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover how our comprehensive gym management solutions can help you streamline operations, improve member engagement, and drive business growth.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader className="flex flex-col gap-3">
              <CardTitle className="text-center">{title}</CardTitle>
              <CardDescription className="text-center">{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};