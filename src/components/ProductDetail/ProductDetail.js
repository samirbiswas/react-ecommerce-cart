import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetail = () => {
    const {productKey} = useParams();
    const pds = fakeData.find(pd=> pd.key === productKey);
    //console.log(pds);
    return (
        <div>
            <h1>Product details Here</h1>
           <Products addShowBtn ={false} product={pds}></Products>
        </div>
    );
};

export default ProductDetail;