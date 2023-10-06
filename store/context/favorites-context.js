import { createContext, useState } from "react";

export const FavoriteMealContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId((currentFavorites) => [...currentFavorites, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((currentFavorites) =>
      currentFavorites.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteMealContext.Provider value={value}>
      {children}
    </FavoriteMealContext.Provider>
  );
}

export default FavoriteContextProvider;