import { FunctionComponent } from "react";
import PortfolioCard from "./PortfolioCard";

export type Variant1Xl2SquareProjecType = {
  className?: string;
};

const Variant1Xl2SquareProjec: FunctionComponent<
  Variant1Xl2SquareProjecType
> = ({ className = "" }) => {

  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-10 box-border max-w-full text-left text-37xl text-gray-100 font-karla mq750:gap-[20px] mq1100:pt-[51px] mq1100:pb-[51px] mq1100:box-border mq450:pt-[33px] mq450:pb-[33px] mq450:box-border mq1275:pt-[78px] mq1275:pb-[78px] mq1275:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[40px] max-w-[1200px] mq750:gap-[20px] mq1275:max-w-full">
        <div className="w-full flex flex-col items-start justify-start gap-[8px] max-w-[800px] mq1100:max-w-full">
          <b className="self-stretch relative leading-[120%] mq750:text-26xl mq750:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Featured Projects
          </b>
          <div className="self-stretch relative text-lg leading-[150%] font-merriweather text-dimgray">
            Full Stack Engineer
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full text-lg font-merriweather mq750:gap-[20px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full mq750:gap-[20px]">
            <PortfolioCard
              imageLummi="/fesa.webp"
              heading="Android delivery apps"
              text="mobile, UX"
              icon="/icon.svg"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px_38px] max-w-full mq750:gap-[19px]">
            <PortfolioCard
              imageLummi="/sales.webp"
              heading="Sales Platform"
              text="sales, Next.js, Tailwind CSS"
              icon="/icon-1.svg"
              propMinWidth="551px"
            />
            <PortfolioCard
              imageLummi="/open_source.webp"
              heading="Open Source"
              text="web, Real State"
              icon="/icon.svg"
              propMinWidth="551px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variant1Xl2SquareProjec;
