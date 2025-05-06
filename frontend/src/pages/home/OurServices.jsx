const serviceList = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavour and presentation",
    image: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    image: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering",
    image: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Catering",
    des: "Delight your guests with our flavour and presentation",
    image: "/images/home/services/icon1.png",
  },
];

export default function OurServices() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8 my-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="md:w-1/2">
          <div className="text-lef md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted i passions we curate unforgetable dining experiences and
              offer exepetional services , bliding culinary artistry with warm
              hospitality
            </p>

            <button className="btn bg-green text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
      </div>
    </div>
  );
}
