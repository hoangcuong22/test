import { Icon } from "app/components"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const Voucher = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 20 }}>
          Voucher & khuyến mãi
        </Text>
        <Icon icon="chevron_right" size={24}></Icon>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <View style={styles.notchLeft} />
              <View style={styles.notchRight} />
              <Text style={styles.discountText}>Giảm giá 70%</Text>
              <Text style={styles.description}>Không có mức chi tiêu tối thiểu</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F04438",
                paddingHorizontal: 8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <View style={styles.notchLeft} />
              <View style={styles.notchRight} />
              <Text style={styles.discountText}>Giảm giá 70%</Text>
              <Text style={styles.description}>Không có mức chi tiêu tối thiểu</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F04438",
                paddingHorizontal: 8,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>Nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#FECDCA",
    borderStyle: "dashed",
    borderRadius: 10,
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: width * 0.7,
    marginRight: 10,
  },
  discountText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    marginLeft: 12,
  },
  description: {
    fontSize: 11,
    color: "#9DA4AE",
    fontWeight: "400",
    lineHeight: 12,
    marginLeft: 12,
  },
  notchLeft: {
    position: "absolute",
    top: "50%",
    left: 0, // Lỗi vị trí 0
    width: 20,
    height: 20,
    backgroundColor: "#FFF",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ translateY: -10 }],
  },
  notchRight: {
    position: "absolute",
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    transform: [{ translateY: -10 }],
  },
})

export default Voucher
