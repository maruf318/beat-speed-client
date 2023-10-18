const CarCard = ({ car }) => {
  const { brand, description, image, name, price, rating, type } = car || {};
  return (
    <div>
      <div className="card lg:h-[350px] lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img className="lg:h-full " src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-red-800">{name}</h2>
          <h2 className="card-title">Brand Name: {brand}</h2>
          <p>Rating: {rating} out of 5</p>
          <p>Price: ${price}</p>
          <p>Type: {type}</p>
          <div className="card-actions flex">
            <button className="p-3 rounded hover:bg-red-800 bg-black text-white">
              Details
            </button>
            <button className=" p-3 rounded hover:bg-red-800 bg-red-950 text-white">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
