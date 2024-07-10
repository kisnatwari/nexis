import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 25000,
    description:
      "Best suited for gym startups.",
    buttonText: "Get Started",
    benefitList: [
      "Complete Membership Management",
      "Automated SMS Alert",
      "1000 Free SMS"
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 60000,
    description:
      "Best suited for growing gym houses.",
    buttonText: "Get Started",
    benefitList: [
      "Complete Membership Management",
      "Automated SMS Alert",
      "Face Recognition system with 1500 member capacity",
      "Accounting System",
      "5000 Free SMS"
    ],
  },
  {
    title: "Pro",
    popular: 0,
    price: 80000,
    description:
      "Best fit for gym houses with multiple branches and franchaises.",
    buttonText: "Get Started",
    benefitList: [
      "Complete Membership Management",
      "Automated SMS Alert",
      "Face Recognition system with 1500 member capacity",
      "Accounting System",
      "10000 Free SMS",
      "Multi Branch Management",
      "Free domain and server for first year",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimited access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className="flex flex-col overflow-hidden"
            >
              <div className="grow">
                <CardHeader className="relative">
                  {
                    popular === PopularPlan.YES &&
                    <div className="absolute top-0 right-0 flex items-center justify-center text-xl w-[100px] h-10 bg-primary z-10 rounded-bl-xl" style={{fontFamily: 'cursive'}} >
                      Popular
                    </div>
                  }
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    {description}
                  </CardDescription>

                  <div>
                    <span className="text-3xl font-bold">Rs. {price}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter>
                <Button
                  variant={'ghost'}
                  className="w-full group"
                >
                  {buttonText}
                  <ArrowRight className="ms-5 group-hover:translate-x-[5px] transition-all duration-300" />
                </Button>
              </CardFooter>
            </Card>
          )
        )}

      </div>
    </section>
  );
};
