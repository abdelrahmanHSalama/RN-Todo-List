import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    loadTasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    updateTask,
    setFilter,
} from "./tasksSlice";
import AddTaskComponent from "./AddTaskComponent";
import FilterTasksComponent from "./FilterTasksComponent";
import ListTasksComponent from "./ListTasksComponent";

export default function Home({ navigation }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDetails, setTaskDetails] = useState("");

    const dispatch = useDispatch();
    const { tasks, filter } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    const handleAddTask = () => {
        if (!taskTitle.trim()) return;
        const newTask = {
            id: Date.now(),
            title: taskTitle.trim(),
            details: taskDetails.trim(),
            completed: false,
        };
        dispatch(addTask(newTask));
        setTaskTitle("");
        setTaskDetails("");
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "uncompleted") return !task.completed;
        return true;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>👋🏻 Hello There!</Text>
            <AddTaskComponent
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
                taskDetails={taskDetails}
                setTaskDetails={setTaskDetails}
                addTask={handleAddTask}
            />
            <View style={styles.separator} />
            <FilterTasksComponent
                filter={filter}
                setFilter={(newFilter) => dispatch(setFilter(newFilter))}
            />
            <ListTasksComponent
                filterTasks={filteredTasks}
                navigation={navigation}
                updateTask={(updatedTask) => dispatch(updateTask(updatedTask))}
                toggleTaskCompletion={(id) =>
                    dispatch(toggleTaskCompletion(id))
                }
                deleteTask={(id) => dispatch(deleteTask(id))}
            />
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
        fontSize: 24,
    },
    separator: {
        height: 1,
        backgroundColor: "grey",
        marginVertical: 10,
        width: "90%",
    },
});
