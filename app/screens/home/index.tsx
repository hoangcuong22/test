import { useNavigation } from "@react-navigation/native"
import { Icon } from "app/components"
import { AppStackParamList } from "app/navigators"
import React, { useState } from "react"
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageSourcePropType,
  Dimensions,
} from "react-native"
import { styles } from "./styleHome"
import ImageSlider from "./Slide"
import CategoriesHead from "./CategoriesHead"
import FlashSale from "./FlashSale"
import Brand from "./Brand"
import CategoryFooter from "./CategoryFooter"

const { width } = Dimensions.get("window")
const imagePrd = require("../../../assets/images/product.png")

export interface Product {
  id: string
  name: string
  price: string
  image: ImageSourcePropType
  statusBuy?: string
}

const products: Product[] = Array.from({ length: 100 }).map((_, index) => ({
  id: (index + 1).toString(),
  name: `Macbook Pro 16-inch M2 Pro 2021`,
  price: `60.000.000`,
  image: imagePrd,
  statusBuy: "Đã bán : 18",
}))

const Menu = [
  { id: "1", title: "Danh mục", icon: <Icon icon="menu" size={24} /> },
  { id: "2", title: "Mall", icon: <Icon icon="vector" size={24} /> },
  { id: "3", title: "Live", icon: <Icon icon="tv" size={24} /> },
  {
    id: "4",
    title: "Của tôi",
    icon: <Icon icon="image" size={24} style={{ borderRadius: 20 }} />,
  },
]

const HomeScreen = () => {
  const [data, setData] = useState<Product[]>(products.slice(0, 10))
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const navigation = useNavigation<AppStackParamList>()
  const [focusCategory, setFocusCategory] = useState(0)

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

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: { id: string; title: string; icon: React.JSX.Element }
    index: number
  }) => (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        width: width / 4.3,
        marginTop: 4,
      }}
      onPress={() => setFocusCategory(index)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        {item.icon}
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
      <View
        style={index === focusCategory ? { borderBottomWidth: 5, borderColor: "#3864FF" } : {}}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      {/* FlatList chính */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.logo}>Eric Shop</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Icon icon="search" size={28} />
                <Icon size={24} icon="bell" style={{ marginLeft: 8 }} />
                <Icon icon="cart" size={24} style={{ marginLeft: 8 }} />
              </View>
            </View>

            {/* Menu */}
            <View style={{ marginBottom: 10 }}>
              <FlatList
                data={Menu}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginHorizontal: 16 }}
              />
            </View>

            {/* Image Slider */}
            <View>
              <ImageSlider />
            </View>

            {/* Danh mục */}
            <CategoriesHead />
            <FlashSale />
            <Brand />
            <CategoryFooter />
          </>
        }
        ListFooterComponent={loadingGetMore}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
      />
    </View>
  )
}

export default HomeScreen
