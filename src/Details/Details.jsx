import { useLoaderData } from "react-router-dom";

const Details = () => {
  const eachProduct = useLoaderData();

  const { name, brand, price, category, photo, rating, description } =
    eachProduct || [];
  console.log(name);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center ">
      <div className="card w-2/4 bg-base-100 shadow-xl">
        <figure>
          <img className="w-fit h-56" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title bg-sky-100 dark:text-black rounded-md p-2">
            {name}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{brand}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
