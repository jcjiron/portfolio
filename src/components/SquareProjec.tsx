import { FunctionComponent } from "react";
import PortfolioCard from "./PortfolioCard";

export type Variant1Xl2SquareProjecType = {
  className?: string;
};

const SquareProjec: FunctionComponent<
  Variant1Xl2SquareProjecType
> = ({ className = "" }) => {

  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center px-10 box-border max-w-full text-left text-37xl text-gray-100 font-karla mq750:gap-[20px] mq1100:pt-[51px] mq1100:pb-[51px] mq1100:box-border mq450:pt-[33px] mq450:pb-[33px] mq450:box-border mq1275:pt-[78px] mq1275:pb-[78px] mq1275:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start gap-[40px] max-w-[1200px] mq750:gap-[20px] mq1275:max-w-full">
        <div className="w-full flex flex-col items-start justify-start gap-[8px] max-w-[800px] mq1100:max-w-full">
          <b className="self-stretch relative leading-[120%] mq750:text-26xl mq750:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Featured Projects
          </b>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full text-lg font-merriweather mq750:gap-[20px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full mq750:gap-[20px]">
            <PortfolioCard
              imageLummi="/fesa.webp"
              heading="Delivery Application for a Pharmaceutical Company in Mexico"
              text="android Development, Testign, Mobile"
              icon="/icon.svg"
              url="https://medium.com/@jcjiron4/farmacias-especializadas-fesa-107edbe6197d"
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px_38px] max-w-full mq750:gap-[19px]">
            <PortfolioCard
              imageLummi="/casai.webp"
              heading="Leading Mobile Development at Latin America’s Largest Real Estate Startup"
              text="Tech Lead, Web and Mobile"
              icon="/icon-1.svg"
              url="https://medium.com/@jcjiron4/casai-leading-mobile-development-at-latin-americas-largest-real-estate-startup-572af9028aeb"

            />
            <PortfolioCard
              imageLummi="/aceros.webp"
              heading="Integrating Technology and Adding Value to Global Projects"
              text="Software Development, Nextjs, Startup"
              icon="/icon.svg"
              url="https://medium.com/@jcjiron4/moving-lake-integrating-technology-and-adding-value-to-global-projects-40075fbf97b9"

            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquareProjec;
