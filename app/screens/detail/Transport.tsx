import { Icon } from "app/components"
import React from "react"
import { View, StyleSheet, Text } from "react-native"

const Transport = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon icon="car" size={24} />
          <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20, marginLeft: 4 }}>
            Hình thức thanh toán
          </Text>
        </View>
        <Icon icon="chevron_right" size={24}></Icon>
      </View>
      <View style={{ marginRight: 8 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 4 }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 16,
              color: "#F04438",
            }}
          >
            Từ nước ngoài
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              lineHeight: 16,
              color: "#3864FF",
            }}
          >
            Đến Ba Đình
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.dot} />
          <View style={styles.line} />
          <View style={styles.dot2} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#F04438",
  },
  dot2: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#3864FF",
  },
})

export default Transport
