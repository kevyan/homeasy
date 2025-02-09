import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import Image from "next/image";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-slate-600
  z-30
  shadow-sm
  "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              <Image
                src="/homeasy-logo-text.png"
                width="100"
                height="20"
                alt="Banner Image"
                className="object-contain"
                color="black"
              />
            </Link>
            <div className="hidden md:block"><SearchBar/></div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
        <div className="sticky top-0">
          <Categories />
        </div>
    </div>
  );
};

export default NavBar;
