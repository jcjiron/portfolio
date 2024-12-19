import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "./Button";

export type PortfolioCardType = {
  className?: string;
  imageLummi?: string;
  heading?: string;
  text?: string;
  icon?: string;
  url: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const PortfolioCard: FunctionComponent<PortfolioCardType> = ({
  className = "",
  imageLummi,
  heading,
  text,
  icon,
  propMinWidth,
  url,
}) => {
  const portfolioCardStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const goToProject = () => {
    window.open(url, "_blank")
  }

  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[320px] max-w-full text-left text-lg text-gray-100 font-merriweather ${className}`}
      style={portfolioCardStyle}
    >
      <div className="self-stretch rounded-29xl overflow-hidden flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[600px] flex-1 relative max-w-full overflow-hidden object-cover mq750:h-[350px] hover:cursor-pointer"
          loading="lazy"
          alt={heading}
          src={imageLummi}
          onClick={goToProject}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[24px] min-w-[240px] max-w-full mq1100:flex-wrap mq750:flex-row">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis" onClick={goToProject}>
            <p className="w-fit my-0 hover:underline hover:cursor-pointer">{heading}</p>
          </div>
          <div className="self-stretch relative text-base leading-[150%] text-dimgray overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
