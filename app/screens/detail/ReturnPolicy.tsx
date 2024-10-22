import { Icon } from "app/components"
import React from "react"
import { View, Text } from "react-native"

const ReturnPolicy = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20 }}>Chính sách đổi trả</Text>
        <Icon icon="chevron_right" size={24}></Icon>
      </View>
      <View>
        <Text style={{ fontSize: 12, fontWeight: "400", lineHeight: 16 }}>
          Trả hàng trong vòng 15 ngày • Đổi ý • Huỷ đơn dễ dàng
        </Text>
      </View>
    </>
  )
}

export default ReturnPolicy
