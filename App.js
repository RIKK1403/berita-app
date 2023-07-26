import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
        <Tab.Screen
          name="Bola"
          component={BolaScreen}
          options={{
            tabBarLabel: "Bola",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="baseball" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingScreen}
          options={{
            tabBarLabel: "Trending",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="fire" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="JalanTol"
          component={JalanTolScreen}
          options={{
            tabBarLabel: "Jalan tol",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="road-variant" size={size} color={color} />;
            },
          }}
        />
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
