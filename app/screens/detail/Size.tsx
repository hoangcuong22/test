import { Icon } from "app/components"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Size = () => {
  return (
    <>
      <View style={{ flexDirection: "row", marginVertical: 6 }}>
        <Text style={styles.productName}>{"kích thước, phiên bản"}</Text>
        <View style={{ marginLeft: 8, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 16,
              borderWidth: 0.5,
              borderRadius: 6,
              paddingHorizontal: 4,
            }}
          >
            {"kiểu"}
          </Text>
          <Icon icon="chevron_right" size={18} style={{ transform: [{ rotate: "90deg" }] }} />
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View
          style={{
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: "#E5E7EB",
            paddingHorizontal: 5,
            marginVertical: 4,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 20 }}>
            kích thước, phiên bản
          </Text>
        </View>
        <View
          style={{
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: "#E5E7EB",
            paddingHorizontal: 5,
            marginVertical: 4,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 20 }}>
            kích thước, phiên bản
          </Text>
        </View>
        <View
          style={{
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: "#E5E7EB",
            paddingHorizontal: 5,
            marginVertical: 4,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", lineHeight: 20 }}>
            kích thước, phiên bản
          </Text>
        </View>
      </View>
    </>
  )
}

export default Size
const styles = StyleSheet.create({
  productName: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
})
