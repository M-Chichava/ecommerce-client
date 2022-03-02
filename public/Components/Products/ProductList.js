import React from "react";
import { TouchableOpacity,View, Text, Dimensions } from "react-native"; 
import ProductCard from './ProductCard';

var {width} = Dimensions.get("window");

const ProductList = (props) => {

    const {item} = props;

    return (
        <TouchableOpacity style={{width: '50%'}}>
            <View 
                style={{
                    width: width/2, 
                    backgroundColor: 'grainsboro'
                }}>
                <ProductCard 
                    {...item}
                />

            </View> 
        </TouchableOpacity>
    )
}

export default ProductList;