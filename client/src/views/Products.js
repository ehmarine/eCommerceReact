import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import {getProductCatalog} from '../store/actions/productCatalogActions';

const Products = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])
  
  const productCatalog = useSelector(state => state.productCatalog.products)

  return (
    productCatalog && <div className="row row-cols-1 row-cols-md-3 g-4">
      {
         productCatalog.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
