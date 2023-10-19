import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);
  const loadedCartData = useLoaderData();
  const filteredCartData = loadedCartData.filter(
    (cart) => cart.email == userEmail
  );
  console.log(filteredCartData);
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className=" text-center text-3xl md:text-5xl font-semibold">
        Your Cart: {user.displayName}
      </h2>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCartData.map((cartData, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img className="h-[300px]" src={cartData.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cartData.name}</h2>
              <p> Price: ${cartData.price}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-red-900 text-white">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
