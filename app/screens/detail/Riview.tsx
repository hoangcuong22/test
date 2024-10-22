import { Icon } from "app/components"
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

interface Review {
  id: string
  user: string
  comment: string
  rating: number
}

const reviews: Review[] = [
  {
    id: "1",
    user: "Nguyen Van A",
    comment: "Sản phẩm rất tốt, phù hợp với da nhạy cảm.",
    rating: 5,
  },
]

const Riview = () => {
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome key={i} name={i <= rating ? "star" : "star-o"} size={16} color="#FFD700" />,
      )
    }
    return <View style={styles.starsContainer}>{stars}</View>
  }
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20 }}>Đánh giá</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#4D5761", fontSize: 12, fontWeight: "400" }}>Xem thêm</Text>
          <Icon icon="chevron_right" size={24} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text>5.0</Text>
          <Text style={{ color: "#9DA4AE" }}>/5</Text>
        </View>
        <View style={{ marginLeft: 6 }}>{renderStars(5)}</View>
      </View>

      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon icon="image" size={20} style={{ borderRadius: 20 }} />
          <Text style={{ fontWeight: "500", fontSize: 12, lineHeight: 16, marginLeft: 8 }}>
            Nguyễn Thọ Trung
          </Text>
        </View>
        <View style={{ marginVertical: 4 }}>{renderStars(5)}</View>
        <Text style={{ color: "#9DA4AE", fontSize: 11, lineHeight: 12, fontWeight: "400" }}>
          Mặt hàng...
        </Text>
        <Text style={{ color: "#0D121C", fontSize: 12, lineHeight: 16, fontWeight: "400" }}>
          Nội dung bình luận
        </Text>
      </View>
    </>
  )
}

export default Riview
const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
  },
})
