import { FunctionComponent } from "react";
import TypeHeroWithHugeImage from "../components/TypeHeroWithHugeImage";
import Property1BioWithProfilePi from "../components/Property1BioWithProfilePi";
import SquareProjec from "../components/SquareProjec";
import TypeTitleWithDescription from "../components/TypeTitleWithDescription";
import QuoteWrapper from "../components/QuoteWrapper";
import FrameComponent from "../components/FrameComponent";
import { HeroBanner } from "../components/HeroBanner";
import { Link } from "../components/Link";
import { githubUrl, linkedinUrl, medium, phoneNumber, whatsappUrl } from "../utils/social";
import { NavLink } from "../components/NavLink";
import { PagesUrls } from "../utils/PagesId";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-white overflow-hidden hidden flex-row items-center justify-between p-2 box-border top-[0] z-[99] sticky max-w-full gap-[0px] [row-gap:20px] text-left text-base text-gray-100 font-merriweather">
        <div className="flex flex-row items-center justify-start py-0 px-2">
          <div className="relative leading-[150%] whitespace-nowrap">
            Juan Carlos Jirón
          </div>
        </div>
        <div className="self-stretch w-[1115px] flex flex-row items-center justify-end gap-[12px] max-w-full text-xs mq1275:hidden">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] inline-block min-w-[49px]">
              Projects
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] inline-block min-w-[40px]">
              Profile
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] inline-block min-w-[49px]">
              Services
            </div>
          </div>
          <div className="h-[43px] rounded-lg bg-gold flex flex-row items-center justify-center py-[21px] px-10 box-border text-center text-gray-200">
            <div className="flex flex-row items-center justify-center p-2">
              <div className="relative leading-[160%] inline-block min-w-[46px]">
                Contact
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeroBanner />
      <TypeHeroWithHugeImage />
      <Property1BioWithProfilePi />
      <SquareProjec />
      <TypeTitleWithDescription />
      <section className="self-stretch bg-white flex flex-row flex-wrap items-center justify-center max-w-full">
        <QuoteWrapper
          imageLummiCategoryavatars="/edgar_cabrera.webp"
          testimonial="“Thanks for your resillience”"
          name1="Edgar Cabrera, CTO"
        />
        <QuoteWrapper
          imageLummiCategoryavatars="/julio_cueto.webp"
          testimonial="“It's good to work with someone so focused”"
          name1="Julio Cueto, Tech Manager"
          propBackgroundColor="#f0f2f5"
          propMarginLeft="-2px"
        />
      </section>
      {/* <FrameComponent /> */}
      <footer className="self-stretch flex flex-row items-start justify-start py-24 px-16 box-border max-w-full text-left text-lg text-gray-100 font-merriweather mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-8 box-border max-w-full">
            <div className="w-[379px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <Link href={githubUrl} target="_blank">
                  GitHub
                </Link>
                <Link href={medium} target="_blank">
                  Blog
                </Link>
                <Link href={linkedinUrl} target="_blank">
                  LinkedIn
                </Link>
                <Link href={whatsappUrl} target="_blank">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative bg-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-sm mq1100:flex-wrap">
            <small className={`relative leading-[150%] inline-block min-w-[60px]" text-dimgray active:text-dimgray no-underline text-sm`}>
              © 2024 Juan Carlos. All rights reserved.
            </small>
            <div className="w-[369px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
              <NavLink to={PagesUrls.PrivacyPolicy} className={`text-sm`}>
                Privacy Policy
              </NavLink>
              <NavLink to={PagesUrls.TermsOfService} className={`text-sm`}>
                Terms of Service
              </NavLink>
              <NavLink to={PagesUrls.CookieSettings} className={`text-sm`}>
                Cookie Settings
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
