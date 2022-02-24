import React from "react";
import {View, Text, Button, StyleSheet } from 'react-native';


const Shop = (props) => {
    return (
        <View style={[{ margin: 8, padding: 8}, styles.item]}>
            <Text>
                {props.item}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
   item:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor: 'whitesmoke'

    } 
})
export default Shop
