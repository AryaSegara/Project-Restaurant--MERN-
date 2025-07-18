import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function Cards({ item }) {
  const [isHeartFillted, setIsHeartFilled] = useState(false);

  const handleClickHeart = () => {
    setIsHeartFilled(!isHeartFillted);
  };
  return (
    <div>
      <div className="card bg-base-100 w-72 shadow-xl relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
            isHeartFillted ? "text-rose-500" : "text-white"
          }`}
          onClick={handleClickHeart}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        
        <Link to={"/menu/${item._id}"}>
          <figure>
            <img
              src={item.image}
              alt=""
              className="hover:scale-105 transition-all duration-200 md:h-60 w-64"
            />
          </figure>
        </Link>
        <div className="card-body">
          <Link to={"/menu/${item._id}"}>
            <h2 className="card-title">{item.name}</h2>
          </Link>
          <p>Description of the item</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold">
              <span className="tex-sm text-red ">$</span>
              {item.price} 
            </h5>
            <button className="btn bg-green text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
