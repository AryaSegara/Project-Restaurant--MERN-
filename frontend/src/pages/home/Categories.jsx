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
      <div>
        {
          categoryItems.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
          ))
        }
      </div>
    </div>
  );
}
