import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

export default function ListTasksComponent({
    filterTasks,
    navigation,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
}) {
    return (
        <View style={styles.tasksListView}>
            <FlatList
                data={filterTasks}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.taskItem}
                        onPress={() =>
                            navigation.navigate("TaskDetails", {
                                task: item,
                                updateTask: updateTask,
                            })
                        }
                    >
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <View style={styles.buttonsContainer}>
                            <Icons
                                name={
                                    item.completed
                                        ? "check-circle-o"
                                        : "circle-o"
                                }
                                style={styles.taskIcons}
                                onPress={() => toggleTaskCompletion(item.id)}
                            />
                            <Icons
                                name="trash"
                                style={styles.taskIcons}
                                onPress={() => deleteTask(item.id)}
                            />
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()}
                style={styles.tasksList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center",
        marginBlockEnd: 5,
        borderRadius: 5,
    },
    taskIcons: {
        fontSize: 25,
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 10,
    },
});
