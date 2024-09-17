export default function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-6">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights of Delectable
            <span className="text-green"> Food</span>
            <p className="text-xl text-[#4A4A4A]">
              Where Each Plate Weaves a story of Culinary Mastery and Passionate
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </h2>
        </div>



        <div className="md:w-1/2">Right</div>
      </div>
    </div>
  );
}
