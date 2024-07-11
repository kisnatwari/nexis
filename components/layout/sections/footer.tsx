import { Separator } from "@/components/ui/separator";
import { ArrowUpWideNarrow, ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ArrowUpWideNarrow />
              <h3 className="text-2xl">NEXIS</h3>
            </Link>
          </div>
{/* 
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="https://github.com/kisnatwari" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="https://www.facebook.com/profile.php?id=61562362920758&mibextid=LQQJ4d" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="https://www.linkedin.com/in/krishna-tiwari-3259a5214/" className="opacity-60 hover:opacity-100">
                Linkedin
              </Link>
            </div>
          </div> */}

        

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div> */}
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Conceptualized and developed by
            <Link
              target="_blank"
              href="https://krishnat.com.np"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Krishna Tiwari
            </Link>
            &nbsp;and&nbsp;
            <Link
              target="_blank"
              href="https://www.facebook.com/krishna.chapagain.399"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Krishna Chapagain
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
