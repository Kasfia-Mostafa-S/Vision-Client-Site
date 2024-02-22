import { useEffect, useState } from "react"
import useAxiosPublic from "../Hooks/useAxiosPublic"
import AllProduct from "./AllProduct";

const AllProducts = () => {

    const axiosPublic = useAxiosPublic()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosPublic.get('/products')
           .then((res) => {
              setProducts(res.data);
           })
           .catch((error) => {
              console.error('Error fetching products:', error);
           });
     }, []);
     

      console.log(products)


  return (
    <div className="bg-white pb-16">
    <div className="bg-pink-100 ">
      <h2 className="text-6xl  text-center py-10 text-pink-800">
        All Products
      </h2>
      
    </div>
    <div className="max-w-6xl mx-auto mt-14">
      <div className="grid grid-cols-3 gap-10">
        {products
          .map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
      </div>
      
    </div>
  </div>
  )
}

export default AllProducts
