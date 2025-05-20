import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action mt-0">
          <form className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Please Login!</h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />
              <label className="label mt-2">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}

            {/* Login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="login"
                className="btn bg-green text-white"
              />
            </div>

            <p className="text-center my-2">
              Dont gave an account?{" "}
              <Link to="/sigup" className="underline text-red ml-1">
                {" "}
                Sigup Now
              </Link>
            </p>
          </form>

          {/* Social Sign in */}
          <div>
            <button className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
