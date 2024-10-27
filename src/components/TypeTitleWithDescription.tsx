import { FunctionComponent } from "react";
import Feature from "./Feature";

export type TypeTitleWithDescriptionType = {
  className?: string;
};

const TypeTitleWithDescription: FunctionComponent<
  TypeTitleWithDescriptionType
> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-4 box-border max-w-full text-left text-lg text-goldenrod font-merriweather mq750:gap-[20px] mq750:pt-[78px] mq750:pb-[78px] mq750:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-center py-0 px-6 box-border gap-[56px] max-w-[1280px] mq750:gap-[28px] mq750:max-w-full mq1100:max-w-full mq450:max-w-full mq1275:max-w-full">
        <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-[800px] mq1100:max-w-full">
          <div className="w-full flex flex-col items-start justify-center gap-[8px] max-w-[560px] mq750:max-w-full">
            <div className="self-stretch relative leading-[150%]">
              Why Choose Me
            </div>
            <b className="self-stretch relative text-32xl tracking-[-0.02em] leading-[120%] [display:-webkit-inline-box] font-inter text-gray-100 overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq750:text-22xl mq750:leading-[49px] mq450:text-12xl mq450:leading-[37px]">
              Innovative Developer
            </b>
          </div>
          <div className="self-stretch relative leading-[150%] text-dimgray">
            I create visually stunning, high-performance websites tailored to
            your business needs.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px_38px] min-h-[326px] max-w-full text-gray-100 mq750:gap-[19px]">
          <Feature
            iconIcon="/icon--icon.svg"
            featureTitle="Luxury Design"
            featureDescription="My designs are both beautiful and functional, ensuring a premium user experience."
          />
          <Feature
            iconIcon="/icon--icon-1.svg"
            featureTitle="Cutting-Edge Technology"
            featureDescription="I use the latest technologies to build fast, responsive, and secure websites."
          />
          <Feature
            iconIcon="/icon--icon-2.svg"
            featureTitle="Expert Animations"
            featureDescription="I specialize in creating engaging animations that captivate your audience."
          />
          <Feature
            iconIcon="/icon--icon-3.svg"
            featureTitle="Mobile Optimization"
            featureDescription="All my designs are optimized for mobile devices, ensuring a seamless experience."
          />
          <Feature
            iconIcon="/icon--icon-4.svg"
            featureTitle="Continuous Learning"
            featureDescription="I am always learning new techniques to deliver the best possible service."
          />
          <Feature
            iconIcon="/icon--icon-5.svg"
            featureTitle="Client Satisfaction"
            featureDescription="My clients' satisfaction is my top priority, with exceptional support and service."
          />
        </div>
      </div>
    </section>
  );
};

export default TypeTitleWithDescription;
