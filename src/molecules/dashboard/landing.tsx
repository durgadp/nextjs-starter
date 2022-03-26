import { ButtonOutlined } from '@/atoms';
import { AngleDownIcon, LeftArrowIcon } from '@/public/assets/svgIcons';

export function Landing() {
  return (
    <div className="mt-36 flex flex-col items-center gap-5 text-white md:gap-3">
      <h4 className="text-4xl font-normal md:text-5xl">Let Ai help your</h4>
      <h1 className="text-bg-gradient text-center text-7xl font-bold md:text-8xl">
        MARKETING TEAM
      </h1>
      <p className="max-w-xl text-center text-xl font-normal opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus
        odio tempor rutrum condimentum viverra ornare. Gravida tellus ut
        venenatis.
      </p>

      <div className=" mt-3">
        <ButtonOutlined>
          <div className="flex items-center gap-3">
            <span>Contact Us </span> <LeftArrowIcon />
          </div>
        </ButtonOutlined>
      </div>

      <div className="mt-20">
        <AngleDownIcon />
      </div>
    </div>
  );
}
