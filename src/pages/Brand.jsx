import { Link, useLoaderData } from "react-router-dom";
import CarCard from "../components/CarCard";
import "../../src/App.css";

const Brand = () => {
  // const param = useParams();
  // const name = param.brand_name;
  // console.log(name);
  const loadedCars = useLoaderData();
  console.log(loadedCars);
  // const filterCar = loadedCars.filter((car) => car.brand == name);
  // console.log(filterCar);
  //   fetch(`https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/brand/${name}`,{
  // method:
  //   })
  //   .then(res=>res.json())
  //   .then(result=>{
  //     console.log(result);
  //   })
  console.log(loadedCars.length);
  return (
    <div className="min-h-[50vh] max-w-7xl mx-auto">
      <div className="p-2">
        <div className="carousel  opacity-80  w-full h-[55vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.imgur.com/l0QaZ4e.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn bg-black btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn bg-black btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.imgur.com/fO1fVue.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn bg-black btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn bg-black btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.imgur.com/ymP3mcW.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn bg-black btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn bg-black btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.imgur.com/KFj0IBH.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn bg-black btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn bg-black btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <h2 className="text-3xl text-center font-bold my-10">
        Brand:{loadedCars.name}
      </h2> */}
      {loadedCars.length ? (
        ""
      ) : (
        <div>
          <h2 className="text-center text-gray-500">
            <span className="text-3xl">Sorry,</span> We do not have any products
            of this brand. Please add{" "}
            <Link to={"/addproduct"}>
              <button style={{ "--clr": "#ff1867" }} className="buttonBody">
                <span>Add Product</span> <i></i>
              </button>
              {/* <button className="btn bg-red-800 text-white">Add Product</button> */}
            </Link>{" "}
          </h2>
        </div>
      )}
      <div className="grid p-2 grid-cols-1 lg:grid-cols-2 gap-4">
        {loadedCars.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))}
      </div>
      {/* <div className="box mx-auto">
        <span></span>
        <h2>Extra Section</h2>
      </div> */}
      {/* <button style={{ "--clr": "#ff1867" }} className="buttonBody">
        <span>Button</span> <i></i>
      </button> */}
    </div>
  );
};

export default Brand;
