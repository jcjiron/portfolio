import { FunctionComponent } from "react";
import { Button } from "./Button";
import { medium } from "../utils/social";

export type TypeHeroWithHugeImageType = {
  className?: string;
};

const TypeHeroWithHugeImage: FunctionComponent<TypeHeroWithHugeImageType> = ({
  className = "",
}) => {

  const goMedium = () => {
    window.open(medium, "_blank")
  }

  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-start max-w-full z-[1] text-left text-53xl text-gray-100 font-karla ${className}`}
    >
      <div className="w-full overflow-hidden flex flex-row items-center justify-center max-w-[1440px]">
        <img
          className="h-[484px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/image--lummi@2x.png"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-center p-6 box-border max-w-[1440px]">
        <div className="w-[840px] flex flex-col items-start justify-center gap-[40px] max-w-[840px] mq1100:max-w-full mq450:gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <b className="self-stretch relative tracking-[-0.01em] leading-[78px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq750:text-39xl mq750:leading-[62px] mq450:text-24xl mq450:leading-[47px]">
              Luxury Web Designs
            </b>
            <div className="self-stretch relative text-3xl leading-[31px] font-merriweather text-dimgray mq450:text-lg mq450:leading-[25px]">
              Exquisite websites for your business.
            </div>
          </div>
          <Button onClick={goMedium} className="self-stretch">
            Explore My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TypeHeroWithHugeImage;
