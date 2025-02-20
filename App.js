import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
    const tasksArray = [
        {
            id: 1,
            title: "Grocery Shopping",
            details: "Buy fruits, vegetables, and dairy products for the week.",
            completed: false,
        },
        {
            id: 2,
            title: "Workout",
            details:
                "Complete a 30-minute cardio and strength training session.",
            completed: false,
        },
        {
            id: 3,
            title: "Meeting with Team",
            details: "Discuss project updates and upcoming deadlines.",
            completed: false,
        },
        {
            id: 4,
            title: "Read a Book",
            details:
                "Finish reading the last two chapters of the current book.",
            completed: false,
        },
        {
            id: 5,
            title: "Clean the House",
            details: "Vacuum and dust all rooms, especially the living area.",
            completed: false,
        },
    ];

    const [tasks, setTasks] = useState(tasksArray);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App</Text>
            <View style={styles.inputsContainer}>
                <TextInput style={styles.input} placeholder="Enter Task Name" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Task Details"
                />
            </View>
            <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Add Task</Text>
            </Pressable>
            <View style={styles.separator} />
            <View style={styles.filterButtonsContainer}>
                <Pressable
                    style={[styles.filterButton, styles.activeFilterButton]}
                >
                    <Text
                        style={[
                            styles.filterButtonText,
                            styles.activeFilterButtonText,
                        ]}
                    >
                        All
                    </Text>
                </Pressable>
                <Pressable style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>Completed</Text>
                </Pressable>
                <Pressable style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>Uncompleted</Text>
                </Pressable>
            </View>
            <View style={styles.tasksListView}>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <View style={styles.taskItem}>
                            <Text style={styles.taskTitle}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.tasksList}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 50,
    },
    inputsContainer: {
        margin: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        fontSize: 15,
        height: 50,
        borderWidth: 1,
        borderColor: "grey",
        color: "grey",
        padding: 10,
        borderRadius: 5,
        width: "90%",
        margin: 5,
    },
    submitButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
    },
    submitButtonText: {
        color: "white",
        fontSize: 15,
    },
    separator: {
        height: 1,
        backgroundColor: "grey",
        marginVertical: 10,
        width: "90%",
    },
    filterButtonsContainer: {
        flexDirection: "row",
        width: "90%",
    },
    filterButton: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeFilterButton: {
        backgroundColor: "black",
    },
    filterButtonText: {
        fontSize: 15,
        textAlign: "center",
    },
    activeFilterButtonText: {
        color: "white",
    },
    taskTitle: {
        fontSize: 15,
    },
    tasksListView: {
        width: "100%",
        alignContent: "center",
    },
    tasksList: {
        width: "100%",
        alignContent: "center",
        marginVertical: 10,
    },
    taskItem: {
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        alignSelf: "center",
        marginBlockEnd: 5,
        borderRadius: 5,
    },
});
