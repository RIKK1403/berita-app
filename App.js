import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();
  const BolaScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Bola</Text>
      </View>
    );
  };

  const TrendingScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Trending</Text>
      </View>
    );
  };

  const JalanTolScreen = () => {
    return (
      <View style={styles.container}>
        <Text>JalanTol</Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bola" component={BolaScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
        <Tab.Screen name="JalanTol" component={JalanTolScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
