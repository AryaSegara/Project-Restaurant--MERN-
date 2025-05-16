import { useEffect } from "react";
import { useState } from "react";

const Menu = () => {
  const [menu,setMenu] = useState([]);
  const [filteredItems,setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() =>{
    // fetch data from the backend
    const fetchData = async () =>{
      try{
        const response = await fetch("/menu.json");
        const data = await response.json();
        console.data(data);
      }catch(error){
        console.log("Error Fetching Data", error);
      }
    }

  },[])

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

      {/* menu shop section */}
      <div className="max-w-screen-2xl container mx-auto lx:px-24 px-4"> 

      </div>
    </div>
  );
};

export default Menu;
