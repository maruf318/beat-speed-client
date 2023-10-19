import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate(null);
  const notifySuccess = () =>
    toast.success("Added to cart Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const loadedCar = useLoaderData();
  // console.log(loadedCar.brand);
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const cart = {
    email: user.email,
    name: loadedCar.name,
    image: loadedCar.image,
    price: loadedCar.price,
  };
  console.log(cart);
  const handleCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert("Added to cart");
          notifySuccess();
          navigate(-1);
        }
      });
  };
  // fetch("http://localhost:5000/cart", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(cart),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data.insertedId) {
  //       alert("Added to cart");
  //     }
  //   });

  return (
    <div className="max-w-7xl mx-auto">
      {/* <h2>Single Car details</h2> */}
      <h2
        className="text-center font-semibold border-y-4 my-4 border-red-900
      "
      >
        JUST GRAB AND GO
      </h2>
      <div className="flex h-full mx-auto border border-red-800 justify-center items-center  p-2 gap-4 flex-col lg:flex-row">
        <div className="flex-1  lg:h-full">
          <img className="lg:h-full" src={loadedCar.image} alt="" />
        </div>
        <div className="flex-1 space-y-2 md:space-y-4">
          <h2 className="text-5xl text-center font-extrabold">
            {loadedCar.brand}
          </h2>
          <h2 className="text-4xl text-center font-bold">
            Name: {loadedCar.name}
          </h2>
          <h2 className="text-2xl text-center">Price: ${loadedCar.price}</h2>
          <h2 className="font-bold text-center">Car Type: {loadedCar.type}</h2>
          <button
            onClick={handleCart}
            className="btn  btn-ghost bg-red-800 text-white w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
      <h2 className="text-xl text-black">
        Description: {loadedCar.description}
      </h2>

      {/* newslater */}
      <h2 className="mt-20 text-center text-3xl font-bold underline">
        Subscribe Us
      </h2>

      <div>
        <div className="mx-4 py-8">
          <div className="w-full  relative flex items-center justify-center">
            <img
              src="https://i.imgur.com/w1BDUQi.jpg"
              alt="dining"
              className="w-full h-full absolute z-0 "
            />
            {/* <img
              src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
              alt="dining"
              className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
            /> */}
            {/* <img
              src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
              alt="dining"
              className="w-full h-full absolute z-0 hidden"
            /> */}
            <div className=" md:my-16 bg-red-900 bg-opacity-50 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
              <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                Don’t miss out!
              </h1>

              <p className="text-base leading-normal text-center text-white mt-6">
                Subscribe to your newsletter to stay in the loop. Our newsletter
                is sent once in <br />a week on every friday so subscribe to get
                latest news and updates.
              </p>
              <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                <input
                  className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                  placeholder="Email Address"
                />
                <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
