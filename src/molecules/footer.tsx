import { ButtonOutlined } from "@/atoms";
import {
  FacebookIcon,
  InstagramIcon,
  LeftArrowIcon,
  LinkdinIcon,
  TwitterIcon,
} from "@/public/assets/svgIcons";
import Link from "next/link";

const site = ["Features", "Products", "Company", "Pricing", "Support"];

const legal = ["Privacy Policy", "Terms & Condition", "Company Policy"];

const company = ["About Us", "Our Team", "Our Story", "Career"];

const follow = ["Linkedin", "Facebook", "Instagram", "Twitter"];

export function Footer() {
  return (
    <div className=" container mt-0 md:mt-28">
      <div className=" grid md:grid-cols-2 py-28 items-center">
        <div className="flex flex-col gap-3 text-white">
          <h1 className=" w-fit font-bold text-6xl text-gradient">Markai</h1>
          <p className="my-5 text-xl font-normal opacity-70 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque.
          </p>
          <div>
            <ButtonOutlined>
              <div className="flex items-center gap-3">
                <span>Contact Us </span> <LeftArrowIcon />
              </div>
            </ButtonOutlined>
          </div>
          <div className="flex gap-8 md:gap-12 mt-5 items-center">
            <LinkdinIcon /> <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
          </div>
        </div>

        <div className=" grid grid-cols-2 text-white justify-end mt-10 md:mt-0">
          <div className="flex flex-col gap-3 my-5">
            <span className="font-bold text-xl">Site</span>
            {site.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" opacity-70 text-xl">{val}</a>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 my-5">
            <span className="font-bold text-xl">Legal</span>
            {legal.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" opacity-70 text-xl">{val}</a>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold text-xl">Company</span>
            {company.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" opacity-70 text-xl">{val}</a>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold text-xl">Follow us</span>
            {follow.map((val, ind) => (
              <Link key={ind} href={`/${val}`} replace>
                <a className=" opacity-70 text-xl">{val}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
