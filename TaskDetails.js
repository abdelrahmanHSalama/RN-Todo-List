import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function TaskDetails({ route, navigation }) {
    console.log(route);
    console.log(route.params);
    const { task, updateTask } = route.params;
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDetails, setEditedDetails] = useState(task.details);
    const [detailsHeight, setDetailsHeight] = useState(0);

    const saveTask = function () {
        const updatedTask = {
            ...task,
            title: editedTitle,
            details: editedDetails,
        };
        updateTask(updatedTask);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputsContainer}>
                <Text>Title:</Text>
                <TextInput
                    placeholder="Enter Task Title"
                    value={editedTitle}
                    onChangeText={setEditedTitle}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputsContainer}>
                <Text>Description:</Text>
                <TextInput
                    placeholder="Enter Task Details"
                    value={editedDetails}
                    onChangeText={setEditedDetails}
                    multiline={true}
                    onContentSizeChange={(event) =>
                        setDetailsHeight(event.nativeEvent.contentSize.height)
                    }
                    style={[styles.input, { height: detailsHeight }]}
                />
            </View>
            <Pressable style={styles.saveButton} onPress={saveTask}>
                <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    inputsContainer: {
        padding: 10,
    },
    saveButton: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
    },
    saveButtonText: {
        color: "white",
        fontSize: 12,
    },
});
