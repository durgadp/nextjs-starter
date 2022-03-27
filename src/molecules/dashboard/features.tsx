import {
  AnalyticsIcon,
  CustomAiIcon,
  SeoLoveIcon,
  SettingIcon,
  WorldIcon,
} from "@/public/assets/svgIcons";

const data = [
  {
    title: "Create Ai Based Website",
    icon: <WorldIcon />,
  },
  {
    title: "Write SEO Friendly Contents",
    icon: <SeoLoveIcon />,
  },
  {
    title: "Maintain site with Artificial Intelligence",
    icon: <SettingIcon />,
  },
  {
    title: "Response customer with analyzing data",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Show custom interface with Ai",
    icon: <CustomAiIcon />,
  },
];
export function Features() {
  return (
    <div className=" mt-20">
      <div className="text-center md:text-left">
        <h4>
          <span className="font-bold text-6xl text-gradient">
            Explore the features!
          </span>
        </h4>
        <span className="inline-block mt-3 opacity-70 text-white text-xl max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mt-10 flex-wrap">
        {data.map((val, ind) => (
          <div
            key={ind}
            className=" border-gradient rounded-3xl max-w-md group z-10 relative overflow-hidden"
          >
            <div className="bg-black p-12 pr-0 rounded-3xl min-h-[20rem] 2xl:min-h-[16rem] 2xl:p-8 flex flex-col justify-center">
              <div className="">{val.icon}</div>
              <div className="text-white font-bold text-3xl mt-3">
                {val.title}
              </div>
            </div>
            <span className="absolute top-0 left-0 z-10 rounded-3xl h-full w-0 group-hover:w-full transition-all ease-in-out duration-[3000ms] opacity-20 bg-gradient-to-r from-cyan via-blue to-pink"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
