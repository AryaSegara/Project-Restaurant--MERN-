import { FaStar } from "react-icons/fa";

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
            <blockquote className="">
              I Had the pleasure of dining at Foodi last night, and Im still
              raving about the experience The attetion to detail in presentation
              and service was impeccable
            </blockquote>

            {/* avatart with counter grup*/}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400"/>
                <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
