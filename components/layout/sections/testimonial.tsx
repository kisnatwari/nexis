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
    name: "Anil Shrestha",
    userName: "Gym Owner, Kathmandu",
    comment:
      "Nexis Gym Management Software has been a game-changer for my gym. The advanced access control and seamless membership management have streamlined our operations, and the automated alerts have kept our members engaged and informed.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sita Thapa",
    userName: "Fitness Instructor, Pokhara",
    comment:
      "As a fitness instructor, I've been impressed by the versatility of Nexis Gym Management Software. The integrated multi-operational features make it easy for me to manage schedules, track attendance, and communicate with members.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Raj Khadka",
    userName: "General Manager, Gym Xpress, Biratnagar",
    comment:
      "Nexis Gym Management Software has been a lifesaver for our multi-location gym chain. The ability to manage everything from a single dashboard has streamlined our operations and allowed us to focus on providing an exceptional experience for our members.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Asha Gurung",
    userName: "Fitness Enthusiast, Lalitpur",
    comment:
      "As a gym member, I've been impressed by the convenience and user-friendliness of the Nexis Gym Management Software. The QR code system and mobile compatibility make it easy for me to manage my membership and stay connected with the gym.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Deepak Poudel",
    userName: "Gym Manager, Dharan",
    comment:
      "The robust accounting features of Nexis Gym Management Software have been a game-changer for our gym. We can now track payments and revenues with ease, which has helped us make more informed business decisions and improve our overall financial management.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Shrestha",
    userName: "Fitness Enthusiast, Bhaktapur",
    comment:
      "I've been a member of several gyms, but Nexis Gym Management Software has been the most impressive. The automated SMS alerts and personalized content curation have kept me engaged and motivated to continue my fitness journey.",
    rating: 4.9,
  },
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
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
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