import React from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from "app/components" // Đảm bảo bạn đã có component Icon

const categories = [
  { id: "1", title: "Danh mục 1", icon: <Icon icon="frame1" size={28} /> },
  { id: "2", title: "Danh mục 2", icon: <Icon icon="frame1" size={24} /> },
  { id: "3", title: "Danh mục 3", icon: <Icon icon="frame1" size={24} /> },
  {
    id: "4",
    title: "Danh mục 4",
    icon: <Icon icon="frame1" size={24} style={{ borderRadius: 20 }} />,
  },
  { id: "5", title: "Danh mục 5", icon: <Icon icon="frame1" size={24} /> },
  { id: "6", title: "Danh mục 6", icon: <Icon icon="frame1" size={24} /> },
  { id: "7", title: "Danh mục 7", icon: <Icon icon="frame1" size={24} /> },
  {
    id: "8",
    title: "Danh mục 8",
    icon: <Icon icon="frame1" size={24} style={{ borderRadius: 20 }} />,
  },
]

const CategoriesHead = () => {
  const renderCategoryItem = ({
    item,
  }: {
    item: { id: string; title: string; icon: React.JSX.Element }
    index: number
  }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryContent}>
        {item.icon}
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={4} // Số cột
        columnWrapperStyle={styles.columnWrapper} // Căn giữa các cột
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  categoryContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 5,
    textAlign: "center",
  },
  columnWrapper: {
    justifyContent: "space-between", // Căn giữa các cột
  },
})

export default CategoriesHead
