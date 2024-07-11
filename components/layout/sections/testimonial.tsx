"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
 
  {
    image: "https://github.com/shadcn.png",
    name: "Prakash Gurung",
    userName: "Chairman, CPFC",
    comment:
      "As the Chairman of CPFC, I love how easy the Nexis Gym Management Software is to use. Managing memberships and staying connected with the gym is so simple now. The renewal SMS alerts have solved the problems with delayed payments and disputes when asking members to pay. Plus, it's great for managing multiple gym branches.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Gurung",
    userName: "CPFC, Bharatpur",
    comment:
      "As the branch manager of CPFC Bharatpur, I find Nexis Gym Management System to be a game-changer for our gym. We can now use single integrated system to manage multiple tasks such as access management, account management, sms alert, etc. helping us to mangage members and accounts also the integrated sms system makes us easy to send the alerts about the various offers.",
    rating: 5.0,
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "Priya Shrestha",
  //   userName: "Fitness Enthusiast, Bhaktapur",
  //   comment:
  //     "I've been a member of several gyms, but Nexis Gym Management Software has been the most impressive. The automated SMS alerts and personalized content curation have kept me engaged and motivated to continue my fitness journey.",
  //   rating: 4.9,
  // },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Satisfied Clients in Nepal Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[100%] sm:w-[90%] lg:max-w-screen-xl mx-auto  "
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};