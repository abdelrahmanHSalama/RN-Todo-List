import { StyleSheet, Text, View } from "react-native";

export default function TaskDetails({ route }) {
    console.log(route);
    const { task } = route.params;

    return (
        <View>
            <Text>Task Detail</Text>
            <Text>Task: {task.title}</Text>
            <Text>Description: {task.details}</Text>
        </View>
    );
}
