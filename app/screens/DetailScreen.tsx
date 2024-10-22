import { RouteProp, useNavigation } from "@react-navigation/native"
import { Header } from "app/components"
import { AppStackParamList } from "app/navigators"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { useRoute } from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons"

interface Review {
  id: string
  user: string
  comment: string
  rating: number
}

export interface IData {
  id: string
  name: string
  price: string
  image: ImageSourcePropType
}

//fake data review
const reviews: Review[] = [
  {
    id: "1",
    user: "Nguyen Van A",
    comment: "Sản phẩm rất tốt, phù hợp với da nhạy cảm.",
    rating: 5,
  },
  {
    id: "2",
    user: "Le Thi B",
    comment: "Giao hàng nhanh, nhưng chưa dùng thử ",
    rating: 4,
  },
  {
    id: "3",
    user: "Tran Van C",
    comment: "Sản phẩm không gây kích ứng, nhưng giá hơi cao.",
    rating: 3,
  },
  {
    id: "4",
    user: "Pham Thi D",
    comment: "Rất thích sản phẩm này, da mình không bị khô ",
    rating: 5,
  },
  {
    id: "5",
    user: "Hoang Van E",
    comment: "Sản phẩm ổn nhưng không như mong đợi.",
    rating: 2,
  },
]

const DetailScreen = () => {
  const navigation = useNavigation<AppStackParamList>()
  const route = useRoute<RouteProp<{ params: IData }, "params">>()
  const { params } = route

  const renderReview = ({ item }: { item: Review }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewUser}>{item.user}</Text>
      <Text style={styles.reviewComment}>{item.comment}</Text>
      {renderStars(item.rating)}
    </View>
  )

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome key={i} name={i <= rating ? "star" : "star-o"} size={20} color="#FFD700" />,
      )
    }
    return <View style={styles.starsContainer}>{stars}</View>
  }

  return (
    <>
      <Header leftIcon="back" onLeftPress={() => navigation.goBack()} title="CHI TIẾT SẢN PHẨM" />
      <ScrollView style={styles.container}>
        <View>
          <Image source={params.image} style={styles.productImage} />

          <Text style={styles.productName}>{params?.name}</Text>
          <View style={styles.containerPrice}>
            <Text style={styles.productPrice}>{params?.price}</Text>
            <TouchableOpacity style={styles.btnBuy}>
              <Text>Mua ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAddCart}>
              <Text>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
            <Text style={styles.sectionContent}>
              {`THÔNG TIN THƯƠNG HIỆU \nSimple là thương hiệu dành cho da nhạy cảm được ưa chuộng số 1 ở thị trường UK, sản phẩm được bán hầu hết trong các hiệu thuốc, thành phần lành tính, là sản phẩm hoàn hảo nhất cho làn da nhạy cảm.`}
            </Text>
            <Text style={styles.sectionContent}>
              {`CÔNG DỤNG \nSimple là thương hiệu dành cho da nhạy cảm được ưa chuộng số 1 ở thị trường UK, sản phẩm được bán hầu hết trong các hiệu thuốc, thành phần lành tính, là sản phẩm hoàn hảo nhất cho làn da nhạy cảm.`}
            </Text>
            <Text style={styles.sectionContent}>
              {`THÀNH PHẦN \nSimple là thương hiệu dành cho da nhạy cảm được ưa chuộng số 1 ở thị trường UK, sản phẩm được bán hầu hết trong các hiệu thuốc, thành phần lành tính, là sản phẩm hoàn hảo nhất cho làn da nhạy cảm.`}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Đánh giá sản phẩm</Text>
        <ScrollView horizontal={true} scrollEnabled={false} showsVerticalScrollIndicator={false}>
          <FlatList data={reviews} renderItem={renderReview} keyExtractor={(item) => item.id} />
        </ScrollView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "green",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4D5761",
    marginBottom: 4,
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },
  reviewUser: {
    fontWeight: "bold",
  },
  reviewComment: {
    marginVertical: 5,
  },
  reviewRating: {
    color: "orange",
  },
  starsContainer: {
    flexDirection: "row",
  },
  containerPrice: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBuy: {
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#FEDF89",
  },
  btnAddCart: {
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#f05050",
  },
})

export default DetailScreen
