import React from 'react'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
const Header = () => {
    const {numberOfProductsInCart} = useSelector(state => state.cart)
  return (
    <div className="bg-white"> 
        <header className="relative bg-gray-200">
            <nav className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="border-b border-gray-200" >
                    <div className="flex h-16 lg:px-8 items-center">  
                        <div className="flex">
                            <NavLink to="/">                             
                                    <span className="font-bold text-[25px]">Welcome</span>
                            </NavLink>
                        </div>
                        <div className="ml-auto flex justify-center item-center">
                            <div className="space-x-2 lg:space-x-8 flex flex-1 justify-center items-center">
                                    <NavLink to="/"
                                        className="text-[20px] font-medium text-gray-700  hover:text-gray-800">Products</NavLink>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                    <NavLink to="/contact" className="text-[20px]  justify-center item-center font-medium text-gray-700 hover:text-gray-800">Contact</NavLink>
                            </div>
                            <div className=" ml-4 flow-root lg:ml-6">
                                    <NavLink to="/cart" className="-m-2 flex items-center p-2 group">
                                        <svg
                                            className="h-10 w-10 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            fill="none" viewBox=" 3 2 24 28"
                                            stroke="currentColor" aria-hidden="true">
                                            <path
                                                d="M18.75 15.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                        </svg>
                                        <span className=" ml-2 text-[25px] font-medium text-gray-700 group-hover:text-gray800">{numberOfProductsInCart}</span>
                                        <span className=" sr-only"> items in the cart, viw bag</span>
                                    </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>    
    </div>
  )
}

export default Header