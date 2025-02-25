import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./store";
import Icons from "react-native-vector-icons/FontAwesome";
import TasksStack from "./TasksStack";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen
                        name="Tasks"
                        component={TasksStack}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icons
                                    name="list-ul"
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name="cog" size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
