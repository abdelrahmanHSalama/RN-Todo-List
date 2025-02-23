import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function AddTaskComponent({
    taskTitle,
    setTaskTitle,
    taskDetails,
    setTaskDetails,
    addTask,
}) {
    return (
        <>
            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Task Name"
                    value={taskTitle}
                    onChangeText={setTaskTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Task Details"
                    value={taskDetails}
                    onChangeText={setTaskDetails}
                />
            </View>
            <Pressable style={styles.submitButton} onPress={addTask}>
                <Text style={styles.submitButtonText}>Add Task</Text>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    inputsContainer: {
        margin: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        fontSize: 12,
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
        fontSize: 12,
    },
});
