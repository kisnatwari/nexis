import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Advanced Access Control",
    description:
      "Face recognition and fingerprint systems for secure access, preventing unauthorized entry and allowing quick access for members.",
  },
  {
    icon: "BadgeCheck",
    title: "Integrated Multi-Operational Software",
    description:
      "Combines various gym operations for easy management, allowing you to manage multiple locations from a single dashboard.",
  },
  {
    icon: "Goal",
    title: "Comprehensive Membership Management",
    description:
      "Handles registrations, renewals, attendance, and member updates, sending automated SMS alerts for renewals and announcements.",
  },
  {
    icon: "PictureInPicture",
    title: "Efficient QR Code System",
    description:
      "Simplifies registrations and renewals for members, providing convenience for members to create and renew memberships on the go.",
  },
  {
    icon: "MousePointerClick",
    title: "Robust Accounting Features",
    description:
      "Tracks payments and revenues with detailed records, allowing you to control finances across multiple branches.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover the unique features and capabilities that make our platform the
        preferred choice for innovative gym owners and managers.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};