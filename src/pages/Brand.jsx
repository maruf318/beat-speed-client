import { useLoaderData, useParams } from "react-router-dom";
import CarCard from "../components/CarCard";

const Brand = () => {
  const param = useParams();
  const name = param.brand_name;
  console.log(name);
  const loadedCars = useLoaderData();
  console.log(loadedCars);
  const filterCar = loadedCars.filter((car) => car.brand == name);
  console.log(filterCar);
  //   fetch(`http://localhost:5000/brand/${name}`,{
  // method:
  //   })
  //   .then(res=>res.json())
  //   .then(result=>{
  //     console.log(result);
  //   })
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto">
      <div>
        <div className="carousel w-full h-[80vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.imgur.com/tBHDKKP.jpg" className="w-full" />
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
            <img src="https://i.imgur.com/9pdVzcg.jpg" className="w-full" />
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
      <h2 className="text-3xl text-center font-bold my-10">Brand:{name}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filterCar.map((car) => (
          <CarCard key={car._id} car={car}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default Brand;
