import {Route, Routes} from "react-router-dom"
import Products from "../components/views/Products"
import ProductDetailsPage from "../components/views/ProductDetailsPage"
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactUsPage from "../components/views/ContactUsPage";
import PageNotFound from "../components/views/PageNotFound";

function Router () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>                               
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>                
                <Route path="/cart" element={<CartCheckOutPage/>}/>   
                <Route path="/contact" element={<ContactUsPage/>}/>          
                <Route path="*" element={<PageNotFound/>}/> 
            </Routes>
        </>
    )
}

export default Router;