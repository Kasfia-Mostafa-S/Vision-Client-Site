
const AllProduct = ({ product }) => {
    const {
      name,
      brand,
      price,
      category,
      photo,
      rating,
      description,
      _id,
    } = product || [];

    
    return (
      <div>
       <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-56" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
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

export default AllProduct
