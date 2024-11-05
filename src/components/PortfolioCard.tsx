import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "./Button";

export type PortfolioCardType = {
  className?: string;
  imageLummi?: string;
  heading?: string;
  text?: string;
  icon?: string;

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
}) => {
  const portfolioCardStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[320px] max-w-full text-left text-lg text-gray-100 font-merriweather ${className}`}
      style={portfolioCardStyle}
    >
      <div className="self-stretch rounded-29xl overflow-hidden flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[600px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={imageLummi}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[24px] min-w-[240px] max-w-full mq1100:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[718px] max-w-full mq1100:min-w-full">
          <div className="self-stretch relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap">
            {heading}
          </div>
          <div className="self-stretch relative text-base leading-[150%] text-dimgray overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </div>
        </div>
        {icon && <Button icon="icon.svg" />}
      </div>
    </div>
  );
};

export default PortfolioCard;
