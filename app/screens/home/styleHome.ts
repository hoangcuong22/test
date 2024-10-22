import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginLeft: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  categoryList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 8,
    lineHeight: 15,
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productName: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "500",
  },
  productPrice: {
    marginTop: 5,
    fontSize: 16,
    color: "#0D121C",
    fontWeight: "600",
  },
  loader: {
    paddingVertical: 20,
  },
  discountContainer: {
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 2,
    borderColor: "#a39a30",
    backgroundColor: "#FEDF89",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  discount: {},
})
