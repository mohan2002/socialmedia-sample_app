import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Add from "./screens/Add";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Saved from "./screens/Saved";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <View style={styles.container}>
        <Text style={styles.txt}>Hello world</Text>
      </View> */}
        <Tab.Navigator>
          <Tab.Screen
            component={Home}
            name="Home"
            options={{
              tabBarIcon: () => {
                return <Entypo name="home" size={24} color="#434343" />;
              },
              headerTitle: () => (
                <Image
                  source={require("./assets/Logo.png")}
                  style={{ width: 180, height: 30 }}
                  resizeMode="contain"
                />
              ),
            }}
          />
          <Tab.Screen
            component={Add}
            name="Add"
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#434343"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            component={Saved}
            name="Saved"
            options={{
              tabBarIcon: () => {
                return (
                  <FontAwesome name="bookmark" size={24} color="#434343" />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "900",
  },
});
