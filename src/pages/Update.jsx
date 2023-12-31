import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const notifySuccess = () =>
    toast.success("Updated the Product Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const description = form.description.value;
    const type = form.type.value;
    const updatedCar = { name, brand, image, price, rating, description, type };
    // console.log(updatedCar);
    fetch(
      `https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/car/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCar),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // alert("Updated successfully");
          notifySuccess();
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl text-gray-500 font-bold my-10">
        Update: {data.name}
      </h2>
      <div>
        <form onSubmit={handleUpdate} className="p-4 mb-14">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                // for="first_name"
                className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                defaultValue={data.name}
                name="name"
                required
              />
            </div>
            <div>
              <label
                // for="last_name"
                className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
              >
                Brand Name
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
                name="brand"
                defaultValue={data.brand}
                id=""
              >
                <option value="TOYOTA">TOYOTA</option>
                <option value="FORD">FORD</option>
                <option value="BMW">BMW</option>
                <option value="MERCEDES">MERCEDES</option>
                <option value="TESLA">TESLA</option>
                <option value="HONDA">HONDA</option>
              </select>
            </div>

            <div>
              <label
                // for="image"
                className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                id="image"
                defaultValue={data.image}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image Url"
                name="image"
                required
              />
            </div>
            <div>
              <label
                // for="type"
                className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
              >
                Type
              </label>

              {/* <input
              type="text"
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type"
              name="Type"
              required
            /> */}
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
                name="type"
                defaultValue={data.type}
                id=""
              >
                <option value="Luxury Cars">Luxury Cars</option>
                <option value="Compact Cars">Compact Cars</option>
                <option value="Off-Road and Adventure Vehicles">
                  Off-Road and Adventure Vehicles
                </option>
                <option value="Electric and Hybrid Cars">
                  Electric and Hybrid Cars
                </option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Trucks">Trucks</option>
                <option value="Basic Cars">Basic Cars</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label
              // for="price"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              defaultValue={data.price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Price"
              name="price"
              required
            />
          </div>

          <div className="mb-6">
            <label
              // for="rating"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Rating Out of 5
            </label>
            <input
              type="number"
              id="rating"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•• out of 5"
              name="rating"
              defaultValue={data.rating}
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              // for="Short Description"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Short Description
            </label>
            <input
              type="text"
              id="short_description"
              className="bg-gray-50 h-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              name="description"
              defaultValue={data.description}
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              // for="remember"
              className="ml-2 text-sm font-medium text-pink-600 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="flex mx-auto text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
