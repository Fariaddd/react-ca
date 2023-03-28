import {Route, Routes} from "react-router-dom"
import Products from "../components/views/Products"
import ProductDetailsPage from "../components/views/ProductDetailsPage"

function Router () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>                
                <Route path="Products" element={<Products/>}/>                
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>                
            </Routes>
        </>
    )
}

export default Router;