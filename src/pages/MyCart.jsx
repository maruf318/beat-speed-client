import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import {
  FaAmazonPay,
  FaApplePay,
  FaCcPaypal,
  FaGooglePay,
  FaShoppingCart,
} from "react-icons/fa";
import { BsCarFront } from "react-icons/bs";

import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  // const [total, setTotal] = useState(0);
  // console.log(total);
  const userEmail = user.email;
  console.log(userEmail);
  const loadedCartData = useLoaderData();

  const filteredCartData = loadedCartData.filter(
    (cart) => cart.email == userEmail
  );
  const [cartData, setCartData] = useState(filteredCartData);
  // console.log(cartData);
  // cartData.find((a) => {
  //   return setTotal(parseInt(a.price) + total);
  // console.log(total);
  // });
  let delivery = 0;
  let total = 0;
  cartData.forEach((a) => {
    total = total + parseInt(a.price);
  });

  // console.log(total);
  // let delivery = 0;
  if (total > 1) {
    delivery = 500;
  }

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

        fetch(
          `https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <div className="max-w-7xl mx-auto  min-h-[80vh]">
      <h2 className=" text-center text-gray-500 underline my-10 text-3xl md:text-5xl font-semibold">
        Your Cart: {user.displayName}
      </h2>
      <div className="flex flex-col lg:flex-row ">
        <div className="grid lg:w-3/4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cartData.map((cartData, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img className="h-[300px]" src={cartData.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl font-bold ">
                  {cartData.name}
                </h2>

                <hr />
                <p className="font-bold"> Price: ${cartData.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(cartData._id)}
                    className="btn bg-red-900 text-white"
                  >
                    Delete <BsCarFront></BsCarFront>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 h-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-6 ">
              <h2 className="text-4xl flex justify-center items-center font-bold text-center underline">
                Checkout <FaShoppingCart></FaShoppingCart>
              </h2>
              <p className="font-bold text-2xl">Price: ${total}</p>
              <p className="font-bold text-base">
                Delivery Charge: ${delivery}
              </p>

              <hr />
              <h2 className="text-center text-3xl font-bold">
                Total Price: ${total + delivery}
              </h2>
              <hr />
              <div className="card-actions mx-auto">
                <button className="btn  bg-red-800 text-white">
                  Order Now
                </button>
              </div>
              <h2 className="  flex justify-center  gap-x-3 md:text-4xl text-3xl items-center">
                <span className="text-sm font-semibold">Payment Partners:</span>{" "}
                <FaGooglePay></FaGooglePay> <FaAmazonPay></FaAmazonPay>{" "}
                <FaCcPaypal></FaCcPaypal> <FaApplePay></FaApplePay>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
