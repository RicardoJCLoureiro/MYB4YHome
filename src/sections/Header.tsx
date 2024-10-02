import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo_transparent.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
        <p>
          Let&apos;s find the solution together
        </p>
        </div>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <Image src={Logo} alt="MYB4Y logo" height={100} width={100} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#hero">About</a>
            <a href="#MYB4Y">MYB4Y</a>
            <a href="#Pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#cta">Contact Us</a>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
