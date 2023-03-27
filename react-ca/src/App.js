import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from './store/modules/listings';

function App() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.listings)

  useEffect(() => {
    dispatch(fetchAllProducts()) 
  }, [dispatch])
  console.log(products);
  
  return (
    <>
      {products.map((items) => (
       <span>{items.title}</span>
      ))}
     
    </>
   
    
  );
}

export default App;
