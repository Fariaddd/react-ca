import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeSingleProductFromCart } from "../../store/modules/CartSlice";

const CartCheckOutPage = () => {
    const dispatch = useDispatch();
    const {productsInCart} = useSelector(state => state.cart);
    return (
        <>
            <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
                {productsInCart && productsInCart.length > 0 && <div className="flex h-full flex-col overflow-y-scroll bg-white">
                    <div className="flex-1 overflow-y-aout py-6 px-4 sm:px-6">
                        <div className=" flex items-start justify-between">
                            <h1 className="text-[20px] items-center font-bold text-gray-900"
                                id="slde-over-litle"> Shopng Cart</h1>
                        </div>
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-900">
                                    {productsInCart.map((product, index) => (
                                        <li className="flex py-6 " key={index} >
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-mdborder border-gray-200">
                                                <img src={product.imageUrl} alt="Salom orange fabric pouch with match zipper gray ziooer pull."
                                                    className="h-full w-full object-contain object-center" />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-[30px] font-medium text-gray-900">
                                                        <h1>
                                                            {product.title}
                                                        </h1>
                                                        <p className="ml-4"> NOK {product.price}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <div className="flex">
                                                        <button type="button"
                                                                className="font-medium text-[30px] text-indigo-600 hover:text-indigo-500"
                                                                onClick={() => dispatch(removeSingleProductFromCart(product.id))}
                                                                >Remove                                                                   
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>                                                   
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">   
                            <div className="mt-6">
                                <NavLink to="/check-out"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout
                                </NavLink>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500"> </div>
                        </div>
                    </div>}
                    {productsInCart && productsInCart.length === 0 && <h1 className="flex text-[45px] ml-[110px] py-[200px] ">Make sure you have added any item to your cart! </h1>}
            </div>  
        </> 
    )  
} 
export default CartCheckOutPage;