import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import ProductList from './ProductList';
import { NativeBaseProvider, Box, Container } from "native-base";
import Header from '../../Layout/Header/header'; 
 
const data = require('../../../assets/data/products.json');


const Products = () => {

  const [products, setProducts] =   useState([])

  useEffect(()=>{
    setProducts(data);

    return () => {
      setProducts([])
    }
  }, []); 

  return (
    <NativeBaseProvider>
    <Header searchBar rounded>
      
    </Header>
      <View>
      <View style={{marginTop: 100}}>
          <FlatList  
            numColumns={2}            
            data={products}
            renderItem={({item}) => <ProductList 
            key={item.id} 
            item={item}
            />}
            keyExtractor={item => item.name}
          />
      </View>     
   </View>
    </NativeBaseProvider>
   
  );
}

export default Products;