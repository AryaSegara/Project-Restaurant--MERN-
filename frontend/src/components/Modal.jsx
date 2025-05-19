const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        
        <div className="modal-action mt-0">
          <div className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Please Login!</h3>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input type="submit" value="login" className="btn btn-neutral mt-4" />
            </fieldset>
          </div>

        </div>
      </div>
    </dialog>
  );
};

export default Modal;
