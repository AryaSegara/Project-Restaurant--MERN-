const Menu = () => {
  return (
    <div>
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">

        <div className="py-20 flex flex-col justify-center items-center gap-8">
          {/* Text */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-4xl text-3xl font-bold md:leading-snug leading-snug">
              Dive into Delights of Delectable
              <span className="text-green"> Food</span>
              <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
                Where Each Plate Weaves a story of Culinary Mastery and
                Passionate
              </p>
              <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
                Order Now
              </button>
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
