import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleProduct } from "../../store/modules/listings";
import { addSingleProductToCart } from "../../store/modules/CartSlice";

const ProductDetailsPage = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.products);
    useEffect(()=>{
        dispatch(FetchSingleProduct(id))
    },[dispatch, id])
  return (
    <>  
        <div className="relative mx-auto max-w-screen px-3 py-20 bg-gray-900">
        {singleProduct && 
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-1">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                  <img
                    alt="Les Paul"
                    src={singleProduct.imageUrl}
                    className="aspect-square w-full rounded-xl object-cover"/>
                  <img
                    alt="Les Paul"
                    src={singleProduct.imageUrl}
                  className="aspect-square w-full rounded-xl object-cover"/>
              </div>
            </div>
              <div className=" flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold text-white sm:text-2xl">
                  {singleProduct.title}
                  </h1>
                  <p className=" font-bold text-white  text-[25px] ">Highest Rated Product</p>
                  <div className="-ml-0.5  flex">
                    <ul>
                      <li className="text-gray-900"><span className="capitalize text-red-600 text-[23.5px]  font-semibold" >rating: {singleProduct.rating} --    Stock: Available! {singleProduct.stock}</span></li>
                    </ul>
                  </div>
                </div>
                <p className="text-[25px] text-white font-bold">NOK {singleProduct.price}</p>
              </div>
                <div className="prose max-w-none text-white text-[20px]">
                  <p>
                    {singleProduct.description}
                  </p>
                </div>
                    <button
                      type="submit"
                      className="rounded-[5px] bg-white py-1.5 px-2.5 text-[25px] font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-100 hover:bg-gray-900 hover:text-white hover:text-[37px]   mt-auto"
                      onClick={() => dispatch(addSingleProductToCart(singleProduct))} >
                      Add to Cart
                    </button>
            </div>
          }
          </div>   
    </>
  )
}

export default ProductDetailsPage