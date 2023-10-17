import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/brandData.json");
      const data = await res.json();

      // console.log(data);
      setBrands(data);
    };
    load();
  }, []);
  // console.log(brands);

  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h2 className="text-4xl text-black font-bold text-center my-4 ">
          Top <span className="text-red-700">Brands</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
          {brands.map((brand) => (
            <Link key={brand.id} to={`/brand/${brand.brand_name}`}>
              <div className="border border-red-500">
                <img src={brand.brand_image_url} alt="" />
                <h2 className="text-2xl font-bold text-center">
                  {brand.brand_name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
