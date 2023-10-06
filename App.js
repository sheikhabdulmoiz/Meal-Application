import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {   

    ///github: https://github.com/sheikhabdulmoiz
  ///www.linkedin.com/in/sheikhabdulmoiz

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#b68c10" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#cbaf61" },
        drawerStyle: { backgroundColor: "#cbaf61" },
        drawerActiveBackgroundColor: "#b68c10",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        // drawerContentStyle: { backgroundColor: "#351401" },///same as drawer style
      }}
    >
      <Drawer.Screen
        name="Drawer"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerLabel: "Categories",
          drawerIcon: ({ size, color }) => {
            return <Ionicons size={size} color={color} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => {
            return <Ionicons size={size} color={color} name="star" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#b68c10" },
              contentStyle: { backgroundColor: "#cbaf61" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});