import React, { useState } from 'react';
import  {View, Text, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import Shop from './Shop';

const ShopList = () => {

    const [title, setTitle] = useState('Shop List');
    const [text, setText] = useState();
    const [list, setList] = useState(['Wellcome to Xibazaranine Shop']);

    const addItem = () => {
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList)
        setText('')
    }

    const removeItem = () => {
         
    }

    return(
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                {list.map((x, index) => <Shop key = {index} item = {x} index={index}/>)}
            </ScrollView>
            <View>
                <TextInput 
                    style={styles.input} 
                    value={text}
                    onChangeText={(text) => setText(text)}

                /> 
            </View>
            <Button color='gray' title='Add item' onPress={addItem}/>
            <Button color='red' title='Remove item' onPress={removeItem}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    align:{
        alignSelf: 'center'
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    input: {
        borderRadius: 5,
         borderWidth: 1,
         marginBottom: 8,
         padding: 8
    }
})

export default ShopList;