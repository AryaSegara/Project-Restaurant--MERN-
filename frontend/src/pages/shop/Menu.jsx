const Menu = () =>{
    return(
        <div>
            {/* Menu Banner */}
             <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img src="./images/bannerHome.png" alt="" />
          <div className="flex flex-colo md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-2 shadow-md w-64">
              <img src="./images/banner-1.png" alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="text-sm mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>

            <div className="md:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-2 shadow-md w-64">
              <img src="./images/banner-1.png" alt="" className="rounded-2xl" />
              <div className="space-y-1">
                <h5 className="text-sm mb-1">Spicy noodles </h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-4xl text-3xl font-bold md:leading-snug leading-snug">
            Dive into Delights of Delectable
            <span className="text-green"> Food</span>
            <p className="text-lg text-[#4A4A4A]">
              Where Each Plate Weaves a story of Culinary Mastery and Passionate 
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now 
            </button>
          </h2>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Menu;