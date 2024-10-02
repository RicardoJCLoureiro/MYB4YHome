import logo from "@/assets/logo_transparent.png"
import Image from "next/image";
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py10 text-center">
      <div className="container">
      <div className="inline-flex relative before:content-[''] before:top-0 before:bottom-0 before:left-0 before:right-0 before:blur-lg before:rounded-full before:bg-[radial-gradient(circle,#333333,#1A1A1A,#0D0D0D)] before:absolute">
        <Image src={logo} height={140} alt="Logo Image" className="relative rounded-full" />
      </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">MYB4Y</a>
          <a href="#">Pricing</a>
          <a href="#">Recent</a>
          <a href="#">Portfolio</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta />
          <SocialLinkedIn />
        </div>
        <p className="mt-6">&copy; 2024 MYB4Y All rights reserved</p>
      </div>
    </footer>
  );
};
