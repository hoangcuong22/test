import React from "react"
import { View, Image, Dimensions, StyleSheet } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"

const images = [{ id: "1" }, { id: "2" }, { id: "3" }]
const imagePrd = require("../../../assets/images/splash.jpg")

const { width } = Dimensions.get("window")

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination
        paginationActiveColor="#3864FF"
        paginationDefaultColor="#CCCCCC"
        paginationStyleItemActive={{ width: 30 }}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.slide}>
            <Image source={imagePrd} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
})

export default ImageSlider
