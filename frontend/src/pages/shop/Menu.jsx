import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../components/Cards";
import {} from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.data(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };

    // call the function
    fetchData();
  }, []);

  // filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };


  // show all data function
  const showAll = () =>{
    setFilteredItems(menu);
    setSelectedCategory("all");
  }


  // sorting based on A-Z , Z-A , Low - High pricing
  const handleSortChange = (option) =>{
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // logic
    switch(option){
      case "A-Z":
            sortedItems.sort((a,b) => a.name.localCompare(b.name));
      break;
      case "A-A":
            sortedItems.sort((a,b) => b.name.localCompare(a.name));
      break;
      case "low-to-high":
            sortedItems.sort((a,b) => a.price - b.price);
      break;
      case "high-to-low":
            sortedItems.sort((a,b) => a.price - b.price);
      break;

      default:
            // code blok
      break;
    }

    setFilteredItems(sortedItems);
  }


  
  return (
    <div>
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-36 flex flex-col justify-center items-center gap-8">
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
      <div className="max-w-screen-2xl container mx-auto lx:px-24 px-12">

        {/* filtering adn sorting */}
        <div>
          {/* all category btns */}
          <div className="flex justify-start md:items-center md:gap-10 gap-4 mb-10">
              <button onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
              >All</button>

              <button onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
              >Salad</button>

              <button onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}  
              >Pizza</button>

              <button onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
              >Soups</button>

              <button onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}  
              >Desserts</button>

              <button onClick={() => filterItems("drinks")}
              className={selectedCategory === "driks" ? "active" : ""}  
              >Drinks</button>
          </div>

          {/* sorting base filtering */}
          <div>
            <div>
              
            </div>
          </div>
          
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24">
          {
            filteredItems.map((item) =>(
                <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
