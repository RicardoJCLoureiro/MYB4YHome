import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Adaptive",
    monthlyPrice: " Variable",
    buttonText: "Let's get started",
    popular: false,
    inverse: false,
    features: [
      "In-depth Problem Analysis",
      "Identifying Business Pain Points",
      "Strategic Action Planning",
      "Timeline and Milestone Discussions",
      "Transparent Pricing and Budgeting",
    ],
  },
  {
    title: "Starter",
    monthlyPrice: " Variable",
    buttonText: "Get Started",
    popular: true,
    inverse: true,
    features: [
      "Custom Design Landing Page",
      "Responsive and SEO-Optimized",
      "Up to 5 Sections Included",
      "Basic Contact Form Integration",
      "1 Revision Cycle",
      "Delivery in 5 Business Days",
      "Dedicated Support",
    ],
  },
  {
    title: "Adaptative",
    monthlyPrice: " Variable",
    buttonText: "Start Your Project",
    popular: true,
    inverse: true,
    features: [
      "Tailored Full-Stack Solutions",
      "Comprehensive Business Analysis",
      "Unlimited Revisions",
      "Custom Integrations & APIs",
      "Advanced Security & Compliance",
      "Dedicated Project Manager",
      "Priority Support 24/7",
      "Scalable Cloud Storage",
      "Detailed Analytics & Reporting",
      "Full Ownership & Source Code",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="Pricing" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-paragraph mt-5">
            Our pricing is tailored to the unique needs of each project. The prices listed serve as a starting point, but they are not fixed, as they depend on the complexity and scope of the solution required. We work closely with you to understand your business goals and challenges, ensuring a customized plan that fits your budget while delivering maximum value. Let&apos;s collaborate to find the perfect solution for your business!
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
              <div
                key={index}
                className={twMerge(
                  "card",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border bg-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    €{monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                   
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, featureIndex) => (
                    <li className="text-sm flex items-center gap-4" key={featureIndex}>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
