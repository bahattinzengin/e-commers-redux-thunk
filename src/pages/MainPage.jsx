import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductData,
  setloading,
  setProducts,
}
  from "../redux/action/productActions";


import Loading from "../components/Loading";
import Card from '../components/Card'

import {
  getBasketData,
  setBasketLoading
} from './../redux/action/basketAction';



const MainPage = () => {

  const dispatch = useDispatch();
  const state = useSelector((store) => store.productReducer);
  useEffect(() => {

    dispatch(setloading());
    dispatch(setBasketLoading());


    dispatch(getProductData());
    dispatch(getBasketData());




  }, []);

  return (

    <div>
      {state.isLoading && <Loading />}
      {state.isError && (
        <p>Üzgünüz verileri alırken hata oluştu</p>
      )}
      <div  className="d-flex flex-wrap gap-4 p-5">
        {state?.products.map((product) => (
          <Card key={product.id} product={product} />

        ))}
      </div>

    </div>
  );
};
export default MainPage;