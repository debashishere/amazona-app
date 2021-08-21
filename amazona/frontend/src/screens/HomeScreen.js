import React, { useEffect } from 'react'
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList

    // useEffect hook run after component did mount (rendering)
    // if no dependencies passed useEffect run only once
    // fetch product from backend

    useEffect(() => {
      dispatch(listProducts());

    }, [])


    return (
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ): error ? (
          <MessageBox varient="danger" >{error}</MessageBox>
        ):(
          <div className="row center">
          {
          products.map( (product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        )}

      </div>
    )
}
