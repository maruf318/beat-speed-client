import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);
  const loadedCartData = useLoaderData();

  const filteredCartData = loadedCartData.filter(
    (cart) => cart.email == userEmail
  );
  const [cartData, setCartData] = useState(filteredCartData);
  // console.log(cartData);

  const handleDelete = (_id) => {
    // console.log("clicked: ", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your product has been deleted.", "success");
        const remaining = cartData.filter((car) => car._id !== _id);
        setCartData(remaining);

        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className=" text-center text-3xl md:text-5xl font-semibold">
        Your Cart: {user.displayName}
      </h2>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cartData.map((cartData, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img className="h-[300px]" src={cartData.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cartData.name}</h2>
              <p> Price: ${cartData.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDelete(cartData._id)}
                  className="btn bg-red-900 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
