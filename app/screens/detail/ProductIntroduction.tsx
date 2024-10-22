import { Icon } from "app/components"
import React from "react"
import { View, Text } from "react-native"

const ProductIntroduction = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20 }}>Giới thiệu sản phẩm</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#4D5761", fontSize: 12, fontWeight: "400" }}>Xem thêm</Text>
          <Icon icon="chevron_right" size={24} />
        </View>
      </View>
      <View>
        <View>
          <Text style={{ color: "#4D5761", fontSize: 12, fontWeight: "500", lineHeight: 16 }}>
            Chi tiết
          </Text>
          <Text style={{ color: "#0D121C", fontSize: 12, fontWeight: "500" }}>
            Loại dụng cụ pha cà phê: Bộ dụng cụ pha cà phê pour over
          </Text>
          <Text style={{ color: "#0D121C", fontSize: 12, fontWeight: "500" }}>
            Kỹ thuật sản xuất: Làm bằng máy
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 4 }}>
        <View>
          <Text style={{ color: "#4D5761", fontSize: 12, fontWeight: "500", lineHeight: 16 }}>
            Mô tả
          </Text>
          <Text style={{ color: "#0D121C", fontSize: 12, fontWeight: "500" }}>
            Sản xuất tại: Trung Quốc
          </Text>
          <Text style={{ color: "#0D121C", fontSize: 12, fontWeight: "500" }}>
            Thương hiệu: CAFE DE KONA
          </Text>
        </View>
      </View>
    </>
  )
}

export default ProductIntroduction
