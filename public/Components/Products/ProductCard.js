import React from "react";
import { 
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native';
    
var {width} = Dimensions.get("window");


const ProductCard = (props) => {
    const {name, price, image,currency, countInStock} = props;

    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                resizeMode="contain"
                source={{uri : image ? image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd39sxb1by9cmtn.cloudfront.net%2FCustom%2FContent%2FThemes%2FBillabong%2FImagens%2Fsem-foto.gif&imgrefurl=https%3A%2F%2Fwww.billabong.com.br%2Fmasculino%2Flancamentos%2Fjuvenil-e-infantil&tbnid=u77gWNrZXIDcvM&vet=10CBcQxiAoB2oXChMI6Ka-nrmg9gIVAAAAAB0AAAAAEAc..i&docid=WzIiymrlWWNLfM&w=1200&h=1200&itg=1&q=sem%20producto&ved=0CBcQxiAoB2oXChMI6Ka-nrmg9gIVAAAAAB0AAAAAEAc'}}
                />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3 )
                    + '...' : name
                }
            </Text>
            <Text style={styles.price}>{currency} {price}</Text>
            {countInStock > 0 ? (
               <View style={{marginBottom:60 }}>
                    <Button title="Add" color={'green'}/>
               </View> 
            ) : <Text style={{marginTop: 20 }}>Currently Unavailable</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45 
    },
    card:{
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginBottom: 10
    }
})
export default ProductCard;