import { useNavigation } from "@react-navigation/native"
import { Icon } from "app/components"
import { AppStackParamList } from "app/navigators"
import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native"
import { styles } from "./styleHome"

const imagePrd = require("../../assets/images/product.png")

export interface Product {
  id: string
  name: string
  price: string
  image: ImageSourcePropType
}

const products: Product[] = Array.from({ length: 100 }).map((_, index) => ({
  id: (index + 1).toString(),
  name: `Product ${index + 1}`,
  price: `$${index + 1}.00`,
  image: imagePrd,
}))

const categories = [
  { id: "1", title: "Điện thoại" },
  { id: "2", title: "Máy tính" },
  { id: "3", title: "Màn hình" },
  { id: "4", title: "Bàn phím" },
  { id: "5", title: "Tai nghe" },
  { id: "6", title: "Bàn ghế" },
  { id: "7", title: "Macbook" },
  { id: "8", title: "SAMSUNG" },
  { id: "9", title: "IPHONE" },
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
      const newItems = products.slice(page * 10, newPage * 10) // get  more 10 products
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
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.discountContainer}>
        <Icon icon="frame" size={16} />
        <Text style={{ color: "#F79009", fontSize: 13, marginLeft: 2 }}>Mua 2 giảm giá 20%</Text>
      </View>
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
    item: { id: string; title: string }
    index: number
  }) => (
    <TouchableOpacity
      style={focusCategory === index ? styles.categoryButton0 : styles.categoryButton}
      onPress={() => setFocusCategory(index)}
    >
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ERIC SHOP</Text>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchBar} placeholder="Tìm kiếm..." />
        </View>
        <TouchableOpacity>
          <Icon icon="cart" size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={styles.avatar} icon="user" />
        </TouchableOpacity>
      </View>

      {/* categories */}
      <View>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />
      </View>

      {/* product */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        ListFooterComponent={loadingGetMore}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
      />
    </View>
  )
}

export default HomeScreen
