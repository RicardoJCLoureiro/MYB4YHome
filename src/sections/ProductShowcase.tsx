import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section id="MYB4Y" className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your business to the next level</div>
          </div>
          <h2 className="section-title mt-8">Birthplace of Countless Solutions</h2>
          <p className="section-paragraph mt-7">
            With years of experience in retail, MYB4Y was founded to empower others to turn their ideas into reality, using cutting-edge technologies to bring dreams to life.
          </p>
        </div>
        <div className="relative">
          {/* Replacing the image with the iframe */}
          <div className="mt-10">
            <iframe
              src="https://rlportfolio-phi.vercel.app/"
              allowFullScreen
              className="w-full h-[900px] border-none"
            ></iframe>
            <div className="portfolio-description mt-2">
              <p className="flex justify-center items-center tag">
                <a href="https://rlportfolio-phi.vercel.app/" target="_blank" rel="noopener noreferrer">View on browser</a>
              </p>
            </div>
          </div>
          {/* Add floating animation to the pyramid image */}
          <Image
            src={pyramidImage}
            alt="pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 animate-float"
          />
          {/* Add wobble animation to the tube image */}
          <Image
            src={tubeImage}
            alt="tube Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36 animate-wobble"
          />
        </div>
      </div>
    </section>
  );
};
