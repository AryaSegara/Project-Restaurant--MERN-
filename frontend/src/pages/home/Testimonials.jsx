export default function Testimonials() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-center">
            <p className="subtitle">Customer Favorites</p>
            <h2 className="title">Popular Categories</h2>
          </div>
        </div>
      </div>
    </div>
  );
}