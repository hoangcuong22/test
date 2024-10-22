import { RouteProp, useNavigation } from "@react-navigation/native"
import { Header, Icon } from "app/components"
import { AppStackParamList } from "app/navigators"
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { useRoute } from "@react-navigation/native"
import Voucher from "./detail/Voucher"
import Payment from "./detail/Payment"
import Transport from "./detail/Transport"
import ReturnPolicy from "./detail/ReturnPolicy"
import ProductIntroduction from "./detail/ProductIntroduction"
import Riview from "./detail/Riview"
import Statistical from "./detail/Statistical"
import Size from "./detail/Size"
import Color from "./detail/Color"

export interface IData {
  id: string
  name: string
  price: string
  image: ImageSourcePropType
  statusBuy?: string
}

const { height } = Dimensions.get("window")

const DetailScreen = () => {
  const navigation = useNavigation<AppStackParamList>()
  const route = useRoute<RouteProp<{ params: IData }, "params">>()
  const { params } = route

  return (
    <>
      <Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View>
          <Image source={params.image} style={styles.productImage} />
          <View style={styles.containerPrice}>
            <Text style={styles.productPrice}>{params?.price}</Text>
            {!!params?.statusBuy && (
              <TouchableOpacity style={styles.btnBuy}>
                <Text style={{ fontWeight: "400", fontSize: 11 }}>{params?.statusBuy}</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.productName}>{params?.name}</Text>
          <Color />
          <Size />
          <Voucher />
          <Payment />
          <Transport />
          <ReturnPolicy />
          <ProductIntroduction />
          <Riview />
          <Statistical />
        </View>
      </ScrollView>
      <View
        style={{
          height: height * 0.085,
          flexDirection: "row",
          marginHorizontal: 16,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", marginRight: 12 }}>
            <Icon icon="shop" size={19} />
            <Text style={{ color: "#4D5761", fontSize: 8, fontWeight: "500", lineHeight: 12 }}>
              Cửa hàng
            </Text>
          </View>
          <View style={{ alignItems: "center", marginRight: 12 }}>
            <Icon icon="chat" size={20} />
            <Text style={{ color: "#4D5761", fontSize: 8, fontWeight: "500", lineHeight: 12 }}>
              Trò chuyện
            </Text>
          </View>
          <View style={{ alignItems: "center", marginRight: 12 }}>
            <Icon icon="heart" size={20} />
            <Text style={{ color: "#4D5761", fontSize: 8, fontWeight: "500", lineHeight: 12 }}>
              Yêu thích
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              borderWidth: 0.5,
              paddingHorizontal: 8,
              paddingVertical: 3,
              borderColor: "#3864FF",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#3864FF" }}>
              {` Thêm vào \n giỏ hàng`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "#3864FF",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              borderWidth: 0.5,
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", lineHeight: 20, color: "#FFFFFF" }}>
              {` Mua với \n voucher`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  productPrice: {
    fontSize: 20,
    color: "#F04438",
    fontWeight: "700",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnBuy: {
    borderRadius: 6,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 70,
    backgroundColor: "#F3F4F6",
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
