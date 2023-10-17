import { useParams } from "react-router-dom";

const Brand = () => {
  const name = useParams();
  console.log(name.brand_name);
  return (
    <div className="min-h-[80vh]">
      <h2>Single Brand Page for:{name.brand_name}</h2>
    </div>
  );
};

export default Brand;
