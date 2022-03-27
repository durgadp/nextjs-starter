const review = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
duis tellus nec aliquam volutpat. Dui dictum tortor dapibus
integer convallis ut facilisi leo semper. Tristique nisl risus
tristique nunc quis id elit. Suspendisse felis, tellus in
sollicitudin.`;
const data = [
  {
    name: "Saul Ramirez",
    designation: "CEO, Mirrorly",
    review: review,
  },
  {
    name: "Isiah Walls",
    designation: "Marketing Lead, Zamora",
    review: review,
  },
  {
    name: "Forest Barrera",
    designation: "Managing Director, Teri",
    review: review,
  },
  {
    name: "Ruby Schwartz",
    designation: "Marketing Intern, Thornton",
    review: review,
  },
  {
    name: "Isaias Martinez",
    designation: "Head of Marketing, Moore",
    review: review,
  },
  {
    name: "Deidre Braun",
    designation: "CEO, Wilbert",
    review: review,
  },
];
export function Reviews() {
  return (
    <div className=" mt-20">
      <div className=" max-w-xl font-bold text-6xl text-gradient mx-auto text-center mb-6">
        {" "}
        Our Customer’s Reviews
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {data.map((val, ind) => (
          <div key={ind} className="border-gradient max-w-md rounded-3xl">
            <div className=" bg-black rounded-3xl flex flex-col gap-3 p-6 text-white">
              <span className=" font-normal opacity-70">
                {val.review}
              </span>
              <div className=" flex items-center gap-3">
                <div>
                  {" "}
                  <img
                    className=" rounded-full overflow-hidden"
                    src="https://source.unsplash.com/random/46x46?person"
                    alt="user"
                  />
                </div>
                <div className="flex flex-col">
                  <span className=" text-gradient font-bold text-xl">
                    {val.name}
                  </span>
                  <span className=" text-xs opacity-70">{val.designation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
