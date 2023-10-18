import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CarCard = ({ car }) => {
  const { brand, image, name, price, rating, type, _id } = car || {};
  return (
    <div>
      <div className="card  lg:h-[350px] lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-3/5">
          <img className="lg:h-full w-full " src={image} alt="Album" />
        </figure>
        <div className="card-body lg:w-2/5">
          <h2 className="card-title text-red-800">{name}</h2>
          <h2 className="card-title">Brand Name: {brand}</h2>
          <p>Rating: {rating} out of 5</p>
          <p>Price: ${price}</p>
          <p>Type: {type}</p>
          <div className="card-actions flex mx-auto">
            <Link to={`/car/${_id}`}>
              <button className="p-3 rounded hover:bg-red-800 bg-black text-white">
                Details
              </button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className=" p-3 rounded hover:bg-red-800 bg-red-950 text-white">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
CarCard.propTypes = {
  car: PropTypes.bool,
};
