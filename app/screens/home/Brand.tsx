import React, { useRef } from "react"
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Animated } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Icon } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { AppStackParamList } from "app/navigators"
import { Product } from "."

const productImage = require("../../../assets/images/product.png")

const products: Product[] = Array.from({ length: 10 }).map((_, index) => ({
  id: (index + 1).toString(),
  name: `Macbook Pro 16-inch M2 Pro 2021`,
  price: `60.000.000`,
  image: productImage,
}))

const Brand = () => {
  const navigation = useNavigation<AppStackParamList>()
  const scrollX = useRef(new Animated.Value(0)).current
  const productListRef = useRef<FlatList>(null)

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("DetailScreen", item)}
    >
      <View style={{ borderRadius: 8, backgroundColor: "#fff", alignItems: "center" }}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <Text numberOfLines={1} style={styles.productName}>
        {item.name}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  )

  const scrollIndicatorWidth = scrollX.interpolate({
    inputRange: [0, products.length * 150],
    outputRange: [50, 200],
    extrapolate: "clamp",
  })

  const scrollIndicatorPosition = scrollX.interpolate({
    inputRange: [0, (products.length - 1) * 150],
    outputRange: [0, 200],
    extrapolate: "clamp",
  })

  return (
    <LinearGradient colors={["#B2DDFF", "#FFFFFF"]}>
      <View style={{ marginHorizontal: 16 }}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon icon="crown" size={24} />
            <Text style={styles.flashSaleText}>Thương hiệu chính hãng</Text>
          </View>

          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>Xem tất cả</Text>
            <Icon icon="chevron_right" size={20} />
          </TouchableOpacity>
        </View>

        {/* FlatList sản phẩm */}
        <FlatList
          ref={productListRef}
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
        />
      </View>
      {/* Thanh cuộn nhỏ nằm ngang ở góc trái */}
      <View style={styles.scrollBarContainer}>
        <Animated.View
          style={[
            styles.scrollBar,
            {
              width: scrollIndicatorWidth,
              transform: [{ translateX: scrollIndicatorPosition }],
            },
          ]}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flashSaleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E90FA",
    lineHeight: 24,
    marginLeft: 4,
  },

  timeText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 4,
  },
  seeMoreButton: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
  seeMoreText: {
    color: "#4D5761",
    fontWeight: "500",
  },
  productList: {
    paddingVertical: 8,
  },
  productCard: {
    padding: 10,
    width: 150,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 12,
    color: "#3864FF",
    fontWeight: "600",
  },
  scrollBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 32,
    height: 8,
    width: "20%",
    backgroundColor: "#FDEAE6",
    borderRadius: 4,
  },
  scrollBar: {
    height: 8,
    backgroundColor: "#2E90FA",
    borderRadius: 4,
    position: "absolute",
  },
})

export default Brand
