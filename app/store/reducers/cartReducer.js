let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log(" ✅ add to cart");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log(" ❌ remove to cart");
        newState.selectedItems = {
          // si la checkbox est false, on garde dans le state que les plats qui sont différent du plat retiré
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log(newState, "👉");
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
