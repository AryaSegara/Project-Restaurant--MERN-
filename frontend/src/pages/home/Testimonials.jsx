export default function Testimonials() {
  return (
    <div className="max-w-screen-2xl container mx-auto lx:px-24 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote>
              I Had the pleasure of dining at Foodi last night, and Im still raving about the experience The attetion to detail in presentation
              and service was impeccable
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
