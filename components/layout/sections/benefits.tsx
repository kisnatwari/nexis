import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Streamlined Operations",
    description:
      "Nexis Gym Management Software combines various operations into a single integrated platform, making it easier for gym owners and managers to oversee all aspects of their business.",
  },
  {
    icon: "LineChart",
    title: "Increased Member Engagement",
    description:
      "The software's automated SMS alert system and personalized content curation help keep members informed and engaged, reducing manual reminders and improving customer satisfaction.",
  },
  {
    icon: "Wallet",
    title: "Improved Financial Management",
    description:
      "Nexis Gym Management Software offers robust accounting features that allow gym owners to track payments, revenues, and expenses with detailed records, enabling better financial decision-making.",
  },
  {
    icon: "Sparkle",
    title: "Enhanced Security and Access Control",
    description:
      "The advanced access control system, which includes face recognition and fingerprint systems, ensures only authorized members can enter the gym, improving security and preventing unauthorized access.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Nexis Gym Management Software Can Benefit Your Gym
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how our comprehensive gym management software can help streamline your operations, improve member engagement, and enhance overall efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};