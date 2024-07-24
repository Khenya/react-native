import { View, StyleSheet, Button, ScrollView  } from "react-native"
import { useCartStore } from "../store/store";
import ProductCard from "../components/ProductCard"
const CartScreen = () => {
    const cart = useCartStore((state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);
  return (
    <View>
      <Button title="Vaciar carrito" onPress={emptyCart} />
      <ScrollView>
        {cart.map((product) => (
          <ProductCard hideButton={false} key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 100,
      width: "90%",
      backgroundColor: "#6EACDA",
      borderRadius: 10,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      marginVertical: 20,
      alignItems: "center",
      justifyContent: "space-between",
    },
    buyButton: {
      backgroundColor: "#021526",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  });
export default CartScreen;