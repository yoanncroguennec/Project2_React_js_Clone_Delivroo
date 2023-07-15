import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { CircleLoader } from "react-spinners";
// COMMONS
import { Restaurant, Categories, Cart } from "../../components/common";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [data, setData] = useState();
  // State used to know if the data has been recovered
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // The callback of my useEffect will be called only once when my component is first rendered
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://deliveroo-api.vercel.app/"
          // "http://localhost:3200/",
        );
        // console.log(res.data);
        setData(res.data);
        // I set isLoading to false
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  // Function checking whether the dish the user clicks on is already in the basket
  function handleAddToCart(meal) {
    /* "meal", contient l'objet du produit, sélectionné. Exemple : 
    {
      id: "1519055545-88",
      title: "Brunch authentique 1 personne",
      description: "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
      picture: "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
      popular: true,
      price: "25.00"
    }" */
    // Clone du state "cart"
    const cartCopy = [...cart];

    // Si trouve id égal à l'id return "true" (objet meal) sinon return "false" (undefined) stocké dans "mealExist"
    const mealExist = cartCopy.find((idMeal) => idMeal.id === meal.id);
    // console.log(mealExist);
    if (mealExist) {
      // Si "mealExist" est vrai: incrémente la quantité de "1"
      mealExist.quantity++;
    } else {
      // Sinon : on push meal et la quantity de "1", qui va créer "quantity", dans l'objet "meal" et mettre dans notre array "cartCopy"
      cartCopy.push({ ...meal, quantity: 1 });
      console.log(cartCopy);
    }

    setCart(cartCopy);
  }

  return loading ? (
    <CircleLoader size={100} color={"#3d2514"} />
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* RESTAURANT */}
      <Restaurant data={data} />

      {/* CATEGORIES */}
      {data.categories.map((category, index) => {
        if (category.meals.length !== 0) {
          return (
            <Categories
              category={category}
              key={index}
              handleAddToCart={handleAddToCart}
            />
          );
        } else {
          return null;
        }
      })}

      {/* CART */}
      <Cart
        matches={matches}
        cart={cart}
        setCart={setCart}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
