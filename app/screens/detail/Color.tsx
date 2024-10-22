import { Icon } from "app/components"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Color = () => {
  return (
    <>
      <View style={{ flexDirection: "row", marginVertical: 6 }}>
        <Text style={styles.productName}>{"Màu sắc"}</Text>
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
            {"Xám"}
          </Text>
          <Icon icon="chevron_right" size={18} style={{ transform: [{ rotate: "90deg" }] }} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#E5E7EB",
            width: 18,
            height: 18,
            borderRadius: 10,
            borderWidth: 1,
            marginHorizontal: 4,
          }}
        />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </>
  )
}

export default Color

const styles = StyleSheet.create({
  productName: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  dot: {
    backgroundColor: "#E5E7EB",
    width: 18,
    height: 18,
    borderRadius: 10,
    marginHorizontal: 4,
  },
})
