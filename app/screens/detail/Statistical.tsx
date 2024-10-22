import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native"
import { Product } from "../home"
import { useNavigation } from "@react-navigation/native"
import { AppStackParamList } from "app/navigators"

const imagePrd = require("../../../assets/images/product.png")

const products: Product[] = Array.from({ length: 10 }).map((_, index) => ({
  id: (index + 1).toString(),
  name: `Macbook Pro 16-inch M2 Pro 2021`,
  price: `60.000.000`,
  image: imagePrd,
  statusBuy: "Đã bán : 18",
}))

const { width } = Dimensions.get("window")

const Statistical = () => {
  const [data, setData] = useState<Product[]>(products.slice(0, 10))
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const navigation = useNavigation<AppStackParamList>()

  const loadMore = () => {
    if (loading) return

    setLoading(true)
    setTimeout(() => {
      const newPage = page + 1
      const newItems = products.slice(page * 10, newPage * 10) // get more 10 products
      setData([...data, ...newItems])
      setPage(newPage)
      setLoading(false)
    }, 500) // get more loading 0.5s
  }

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => {
        navigation.navigate("DetailScreen", item)
      }}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text numberOfLines={1} style={styles.productName}>
        {item.name}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={{ fontSize: 10, fontWeight: "400", lineHeight: 15, marginTop: 8 }}>
        {item.statusBuy}
      </Text>
    </TouchableOpacity>
  )

  const loadingGetMore = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null
  }
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 14,
          backgroundColor: "#F9FAFB",
          marginBottom: 14,
        }}
      >
        <View>
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#0D121C" }}>
            226
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "400", lineHeight: 12, color: "#4D5761" }}>
            Sản phẩm
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#16B364" }}>
            116
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "400", lineHeight: 12, color: "#4D5761" }}>
            Tổng doanh số
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#EAAA08" }}>
            88%
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "400", lineHeight: 12, color: "#4D5761" }}>
            {` xuất kho trong 48 \ngiờ`}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 14 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#3864FF",
            flex: 1,
            alignItems: "center",
            paddingVertical: 4,
            justifyContent: "center",
            borderRadius: 8,
            borderWidth: 0.5,
            marginRight: 20,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#FFFFFF" }}>
            +{" "}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#FFFFFF" }}>
            Theo dõi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            flex: 1,
            alignItems: "center",
            paddingVertical: 4,
            justifyContent: "center",
            borderRadius: 8,
            borderWidth: 0.5,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#4D5761" }}>
            Tất cả mặt hàng
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListFooterComponent={loadingGetMore}
          onEndReached={loadMore}
          onEndReachedThreshold={0.9}
        />
      </ScrollView>
    </>
  )
}

export default Statistical
const styles = StyleSheet.create({
  productCard: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    maxWidth: width * 0.45,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productName: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "500",
  },
  productPrice: {
    marginTop: 5,
    fontSize: 16,
    color: "#0D121C",
    fontWeight: "600",
  },
  loader: {
    paddingVertical: 20,
  },
})
