import { Icon } from "app/components"
import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const Payment = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20 }}>
          Hình thức thanh toán
        </Text>
        <Icon icon="chevron_right" size={24}></Icon>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#16B364",
            width: width * 0.1,
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 11, color: "white", padding: 3 }}>COD</Text>
        </View>
        <Text style={{ fontSize: 12, fontWeight: 400, marginLeft: 6 }}>
          Thanh toán bằng tiền mặt (COD)
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})

export default Payment
