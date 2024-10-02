import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <section id="hero" className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Cutting-edge technology</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              MYB4Y: 
              <br />
              Driving Innovation with Full-Stack Expertise
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with apps that track your progress, motivate your efforts, and celebrate your success!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary gap-1">
                <span>Contact us</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* Add spinning animation to the cog image */}
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 animate-spin-slow"
            />
            {/* Add floating animation to the cylinder image */}
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute animate-float"
            />
            {/* Add wobble animation to the noodle image */}
            <Image
              src={noodleImage}
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] animate-wobble"
              alt="Noodle Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
