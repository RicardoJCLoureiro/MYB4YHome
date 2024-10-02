import avatar1 from "@/assets/lovys_use_rl.png";
import avatar2 from "@/assets/jag_rl_use.png";
import avatar3 from "@/assets/parfois_rl_use.png";
import avatar4 from "@/assets/gog_rl_use.png";
import avatar5 from "@/assets/ff_rl_use.png";
import avatar6 from "@/assets/ac_comp_rl_use.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "MYB4Y took our initial idea and transformed it into a productivity powerhouse that has redefined our business operations. The seamless integration of innovative technology has made all the difference.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Turning our concept into reality seemed daunting, but MYB4Y guided us through each step, crafting a tailored solution that has truly revolutionized our workflow and boosted productivity.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "From a simple idea to a fully-functional business tool – MYB4Y's expertise brought our vision to life, transforming the way we operate and delivering outstanding results.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "MYB4Y's AI-driven solutions have not only streamlined our processes but also significantly cut down on time-consuming tasks. They've truly redefined what productivity means for our business.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "The way MYB4Y transforms raw ideas into powerful management tools is remarkable. Their AI-enhanced systems have empowered us to focus on what really matters – growing our business.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Thanks to MYB4Y's innovative approach, we've moved from manual processes to AI-powered automation. The result? Saved time, increased productivity, and a smarter way to manage our daily operations.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
];

const TestimonialsGrid = () => (
  <div className={twMerge(
    "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10",
    "[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_70%,transparent)]"
  )}>
    {testimonials.map(({ text, imageSrc, name, username }) => (
      <div className="card" key={name}>
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-0">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center gap-6">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our partners say about us</h2>
          <p className="section-paragraph mt-5">
            From a simple idea to a powerful, productivity-enhancing solution – hear how we&apos;ve transformed visions into reality for our clients
          </p>
        </div>
        <TestimonialsGrid />
      </div>
    </section>
  );
};
