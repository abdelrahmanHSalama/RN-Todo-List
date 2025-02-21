import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import TaskDetails from "./TaskDetails";

const Stack = createNativeStackNavigator();

export default function TasksStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Tasks App" }}
            />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
    );
}
