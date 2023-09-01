import Image from "next/image";
import Link from "next/link";

import CustomButton from "./ui/CustomButton";
import Logo from "@/public/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={Logo}
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex justify-center items-center gap-3">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
          <CustomButton
            title="Log In"
            btnType="button"
            containerStyles="bg-primary-blue text-white rounded-full min-w-[130px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
