import { FunctionComponent } from "react";

export type Property1BioWithProfilePiType = {
	className?: string;
};

const Property1BioWithProfilePi: FunctionComponent<
	Property1BioWithProfilePiType
> = ({ className = "" }) => {
	return (
		<section
			className={`self-stretch bg-white flex flex-col items-center justify-center py-[120px] px-10 box-border max-w-full text-center text-9xl text-goldenrod font-merriweather mq750:gap-[20px] mq750:pt-[33px] mq750:pb-[33px] mq750:box-border mq1275:pt-[51px] mq1275:pb-[51px] mq1275:box-border ${className}`}
		>
			<div className="w-full flex flex-col items-center justify-center gap-[40px] max-w-[1200px] mq750:gap-[20px] mq1275:max-w-full">
				<div className="self-stretch rounded-13xl overflow-hidden flex flex-row items-center justify-center min-w-[280px] max-w-full">
					<img
						className="h-[704px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover"
						loading="lazy"
						alt=""
						src="/profile-image--lummi@2x.png"
					/>
				</div>
				<div className="w-full flex flex-col items-center justify-start gap-[8px] max-w-[960px] mq1100:max-w-full">
					<div className="self-stretch relative leading-[39px] mq450:text-3xl mq450:leading-[31px]">
						About Juan Carlos
					</div>
					<b className="self-stretch relative text-27xl leading-[130%] font-karla text-gray-100 mq750:text-18xl mq750:leading-[48px] mq450:text-9xl mq450:leading-[36px]">
						Juan Carlos Jirón Juárez is a seasoned software engineer
						specializing in creating high-quality, luxury websites with stunning
						animations and visuals. Recognized as the top frontend developer
							and one of the best engineers in the country, Juan Carlos
						is committed to continuous learning and writing maintainable,
						excellent code. His expertise extends to both web and mobile
						applications, making him a versatile and sought-after professional.
					</b>
				</div>
				<div className="w-full flex flex-col items-start justify-start gap-[16px] min-w-[320px] max-w-[480px] text-xs text-gray-100 mq750:max-w-full">
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[28px]">
							2017
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
								Started career as a frontend developer.
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
							2017
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
								Started career as a Frontend Developer
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[28px]">
							2017
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="relative leading-[150%]">
							Designed systems and apps at IBM, enhancing digital support.
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[30px]">
						2018
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Web development and innovative banking solutions for GFT and Sabadell
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[30px]">
						2019
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Software improvement at Santander, reducing 95% of pre-production errors.
							</div>
						</div>
					</div>
						<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
						2020
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Leadership at Casai: Android/Frontend teams.
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
						2022
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Agile bug resolution in critical apps for Girl Scouts USA.
							</div>
						</div>
					</div>
					<div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
						2022
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Specialized in Google Maps and Geolocation at SPS
							</div>
						</div>
					</div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
						2023
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Led architecture and development at MovingLake.
							</div>
						</div>
					</div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-200 flex flex-col items-start justify-center p-4 gap-[4px]">
						<div className="relative leading-[160%] inline-block min-w-[29px]">
						2024
						</div>
						<div className="self-stretch flex flex-col items-start justify-center min-w-[220px] text-left text-lg text-dimgray">
							<div className="self-stretch relative leading-[150%]">
							Innovating at TCS with scalable solutions.
							</div>
						</div>
					</div>
				</div>
				<button className="cursor-pointer [border:none] py-[11px] px-5 bg-gold w-full rounded-lg flex flex-row items-center justify-center box-border max-w-[360px]">
					<div className="flex flex-row items-center justify-center p-1">
						<div className="relative text-lg leading-[150%] font-merriweather text-gray-200 text-center inline-block min-w-[84px]">
							Hire Juan
						</div>
					</div>
				</button>
				<div className="flex flex-row items-start justify-start gap-[16px]">
					<img
						className="h-6 w-6 relative min-h-[24px]"
						loading="lazy"
						alt=""
						src="/twitterlogo.svg"
					/>
					<img
						className="h-6 w-6 relative min-h-[24px]"
						loading="lazy"
						alt=""
						src="/instagramlogo.svg"
					/>
					<img
						className="h-6 w-6 relative min-h-[24px]"
						loading="lazy"
						alt=""
						src="/linkedinlogo.svg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Property1BioWithProfilePi;
