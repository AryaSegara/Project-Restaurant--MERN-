const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 Breakfast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 Desserts)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(255 Items)",
    image: "/images/home/category/img4.png",
  },
];

export default function Categories() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-4 py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* Category Card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-lg bg-white py-6 px-5 w-52 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center ">
              <img
                src={item.image}
                alt=""
                className="bg-[#C1F1C6] p-5 rounded-full w-24 h-24"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
