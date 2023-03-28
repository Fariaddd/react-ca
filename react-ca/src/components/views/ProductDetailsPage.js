import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSingleProduct } from "../../store/modules/listings";

const ProductDetailsPage = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.products);
    useEffect(()=>{
        dispatch(FetchSingleProduct(id))
    },[dispatch, id])
  return (
    <>
      {singleProduct && <div>{singleProduct.title}</div> }
    </>
  )
}

export default ProductDetailsPage