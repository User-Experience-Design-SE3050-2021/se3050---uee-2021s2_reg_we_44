import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text , Image , Dimensions , FlatList,Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CarouselItem from './CarsouselItem';
import { positions } from '@mui/system';


const {width , height} = Dimensions.get("window")

const Carousel = ({data}) =>{

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX,width)

    if (data && data.length){
        return(
            <View>
                <FlatList data = {data}
                keyExtractor = {(item,index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment='center'
                scrollEventThrottle = {16}
                decelerationRate = {"fast"}
                showsHorizontalScrollIndicator = {false}
                renderItem ={({item}) => {
                    return <CarouselItem item = {item}/>
                }}
                onScroll = {Animated.event(
                    [{ nativeEvent:{ contentOffset: {x: scrollX} } }]
                )}
                />

                <View style ={ styles.dotView}>
                    {data.map((_,i) =>{
                        let opacity = position.interpolate({
                            inputRange: [ i-1,i,i+1],
                            outputRange: [0.3,1,0.3],
                            extrapolate:'clamp'
                        })
                        return(
                            <Animated.View
                                key ={i}
                                style = {{opacity,height:10,width:10,backgroundColor:"#5956E9",margin:8,borderRadius:5}}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log("please provide Image")
    return null
}


const styles = StyleSheet.create({
    dotView:{
        flexDirection:"row",
        justifyContent:'center'
        
    }
})

export default Carousel;