import { Icon } from "app/components"
import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"

const Menu = [
  { id: "1", title: "Đề nghị" },
  {
    id: "2",
    title: "Mới nhập",
    icon: <Icon icon="lightning" size={18} style={{ tintColor: "black" }} />,
  },
  { id: "3", title: "Mall", icon: <Icon icon="check1" size={18} /> },
  {
    id: "4",
    title: "Giảm giá",
    icon: <Icon icon="frame" size={24} style={{ tintColor: "black" }} />,
  },
  {
    id: "5",
    title: "Bán chạy",
    icon: <Icon icon="image" size={24} style={{ borderRadius: 20 }} />,
  },
]

const CategoryFooter = () => {
  const [focusCategory, setFocusCategory] = useState(0)
  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: { id: string; title: string; icon?: React.JSX.Element }
    index: number
  }) => (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        marginTop: 4,
      }}
      onPress={() => setFocusCategory(index)}
    >
      <View
        style={
          index === focusCategory
            ? {
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
                backgroundColor: "#3864FF",
                borderRadius: 16,
                marginHorizontal: 4,
                paddingVertical: 6,
                paddingHorizontal: 8,
              }
            : {
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6,
                borderWidth: 0.5,
                borderColor: "#ccc",
                borderRadius: 16,
                padding: 8,
                marginHorizontal: 4,
                paddingVertical: 6,
                paddingHorizontal: 8,
              }
        }
      >
        {item.icon}
        <Text
          style={
            index === focusCategory
              ? {
                  fontSize: 12,
                  fontWeight: "500",
                  marginLeft: 4,
                  lineHeight: 15,
                  color: "white",
                }
              : {
                  fontSize: 12,
                  fontWeight: "500",
                  marginLeft: 4,
                  lineHeight: 15,
                }
          }
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={{ marginVertical: 12 }}>
      <FlatList
        data={Menu}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 16 }}
      />
    </View>
  )
}

export default CategoryFooter
