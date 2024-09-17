export default function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-20 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4">
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

        {/* Image */}
        <div className="md:w-1/2">
          <img src="./images/bannerHome.png" alt="" />
          <div>
            <div>
              <img src="./images/banner-1.png" alt="" className="rounded-2xl" />
              <div>
                <h5>Spicy noodles</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
