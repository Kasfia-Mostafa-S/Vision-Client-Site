import { Link } from "react-router-dom";

const AllProduct = ({ product }) => {
    const {
      name,
      category,
      photo,
      _id,
    } = product || [];

    
    return (
      <div>
       <div className="card w-96 shadow-xl">
  <figure><img className="w-full h-56" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
  
    <div className="card-actions justify-start">
            <Link to={`/allProducts/${_id}`}>
              <div className="badge badge-outline bg-sky-400 text-white p-4">
                Details
              </div>
            </Link>
    </div>
  </div>
</div>
      </div>
    );
  };

export default AllProduct
