import { ButtonOutlined } from "@/atoms";

export function AboutWebsite() {
  return (
    <div className=" mt-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div className=" text-white flex flex-col gap-2 justify-center pl-8 border-l-2 border-white">
          <span className=" font-normal text-3xl">What is</span>
          <h1 className=" font-bold text-6xl text-gradient">
            Custom Interface
          </h1>
          <span className=" font-normal text-xl opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </span>
          <div>
            <ButtonOutlined>
              <span>Learn More...</span>
            </ButtonOutlined>
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            className=" w-full max-w-xl"
            src="/assets/images/custom-interface.png"
            alt="custom"
          />
        </div>

        <div className=" flex justify-center order-last md:order-3">
          <img
            className=" w-full max-w-xl"
            src="/assets/images/monitor.png"
            alt="custom"
          />
        </div>

        <div className=" text-white flex flex-col gap-2 justify-center pl-8 border-l-2 border-white">
          <span className=" font-normal text-3xl">You can maintain your</span>
          <h1 className=" font-bold text-6xl text-gradient">Website with Ai</h1>
          <span className=" font-normal text-xl opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </span>
          <div>
            <ButtonOutlined>
              <span>Learn More...</span>
            </ButtonOutlined>
          </div>
        </div>
      </div>
    </div>
  );
}
