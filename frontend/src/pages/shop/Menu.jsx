import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, SetCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // loading data
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
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
    SetCurrentPage(1);
  };

  // show all data function
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    SetCurrentPage(1);
  };

  // sorting based on A-Z , Z-A , Low - High pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
 
    // logic sorting
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // code blok
        break;
    }

    setFilteredItems(sortedItems);
    SetCurrentPage(1);
  };


  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

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
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all category btns */}
          <div className="flex justify-start md:items-center md:gap-10 gap-4 mb-10">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>

            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>

            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>

            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>

            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>

            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "driks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          {/* sorting base filtering */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24">
          {currentItems.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* pagination section */}
      <div className="flex justify-center my-8">
        {
          Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) => (
            <button 
            key={index + 1} 
            onClick={() => 
            paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full
              ${currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
