import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../store/modules/listings';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products)
  
    useEffect(() => {
      dispatch(fetchAllProducts()) 
    }, [dispatch])
  return (
    <div className='w-full bg-gray-800 max-auto'>
    <div bg-gray-900>
      <div className='mx-auto max-w-2x1 py-4 sm:py-24 sm:px-4 lg:max-w-7x1 lg:px-8'>
        <h1 className='text-[40px] font-bold tracking-tight text-center text-white'>AVAILABLE  PRODUCTS!</h1>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 xl.:gap-x-8'>
          {products.map((product) => (
            <div key={product.id} className='group relative flex flex-col gap-y-3' >
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-[5px] bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'> 
                    <img 
                    src={product.imageUrl}
                    alt={product.title}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                 </div>
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h2 className='text-sm text-gray-700'>
                        <Link to={`product/${product.id}`} className='relative text-lg  text-white'>
                          <span aria-hidden="true" className='absolute  inset-0'/>
                            {product.title}
                        </Link> 
                      </h2>
                      <p className='mt-0.5  text-lg  text-white'>{product.description}</p>
                    </div>
                    <p className='text-lg text-white font-bold'>NOK{product.price}</p>
                  </div>
                  <button type='button' className='rounded-[5px] bg-white py-1.5 px-2.5 text-lg font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-300 mt-auto' >
                    Add to cart
                  </button>
            </div>       
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products