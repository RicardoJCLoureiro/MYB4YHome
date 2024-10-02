"use client";

import { useState } from "react";
import Modal from "@/components/Modal"; // Import the Modal component
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to handle opening and closing the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="cta" className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="section-paragraph mt-5">
            Let us bring your ideas to life with our UI/UX expertise,
          </p>
          <hr className="mt-5" />
          <p>
            AI-driven solutions, and flexible services tailored to your unique needs. Experience innovation at the right price.
          </p>
          <hr />
          <p>
            Get in touch with us today, and let us build something amazing together!
          </p>

          {/* Add floating animation to the star image */}
          <Image
            src={starImage}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px] animate-float"
          />
          {/* Add wobble animation to the spring image */}
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            className="absolute -right-[361px] -top-[29px] animate-wobble"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button
            className="btn btn-primary gap-1"
            onClick={openModal} // Open the modal when the button is clicked
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Render the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default CallToAction;
