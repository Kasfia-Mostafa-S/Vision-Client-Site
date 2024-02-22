import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddProducts = () => {
  const axiosPublic = useAxiosPublic();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const newAddProduct = {
      name,
      brand,
      price,
      category,
      photo,
      description
    };

    axiosPublic.post("/products", newAddProduct).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-20 ">
        <div className="hero-content flex-col">
          <div className="card w-full shadow-xl bg-sky-100 ">
            <form onSubmit={handleAddProduct} className="card-body h-full">
              <div className=" grid grid-cols-2 gap-5">
                <div className="form-control grid">
                  <label className="label">
                    <span className="label-text text-lg">Product Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Property Brand</span>
                  </label>
                  <input
                    name="brand"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Product Image</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Product Price</span>
                  </label>
                  <input
                    name="price"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Product Category</span>
                  </label>
                  <input
                    name="category"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Product Rating</span>
                  </label>
                  <input
                    name="rating"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    value="pending"
                    name="status"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                    hidden
                  />
                </div>
              </div>
              <div>
                <p className="text-lg">Description</p>
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full text-gray-600 p-4 h-60"
                  placeholder="description"
                ></textarea>
              </div>
              <div className="flex justify-center gap-4">
                <div className="form-control mt-6 flex items-center">
                  <button className="btn w-40 text-white text-lg bg-gradient-to-r from-blue-800 to-sky-300">
                    Add Property
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
