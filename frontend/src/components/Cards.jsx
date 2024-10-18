/* eslint-disable react/prop-types */
export default function Cards({ item }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Description of the item</p>
          <div className="card-actions justify-end">
            
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
