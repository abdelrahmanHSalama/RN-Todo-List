import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddTaskComponent from "./AddTaskComponent";
import FilterTasksComponent from "./FilterTasksComponent";
import ListTasksComponent from "./ListTasksComponent";

export default function Home({ navigation }) {
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
            completed: true,
        },
        {
            id: 3,
            title: "Meeting with Team",
            details: "Discuss project updates and upcoming deadlines.",
            completed: true,
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
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDetails, setTaskDetails] = useState("");

    useEffect(() => {
        const loadTasks = async function () {
            try {
                const storedTasks = await AsyncStorage.getItem("tasks");
                if (storedTasks != null) {
                    setTasks(JSON.parse(storedTasks));
                } else {
                    setTasks(tasksArray);
                }
            } catch (error) {
                console.error("Error Loading Tasks from AsyncStorage:", error);
            }
        };
        loadTasks();
    }, []);

    useEffect(() => {
        const saveTasks = async function () {
            try {
                await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
            } catch (error) {
                console.error("Error Saving Tasks to AsyncStorage:", error);
            }
        };
        saveTasks();
    }, [tasks]);

    const addTask = function () {
        if (!taskTitle.trim()) return;
        const newTask = {
            id: Date.now(),
            title: taskTitle.trim(),
            details: taskDetails.trim(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTaskTitle("");
        setTaskDetails("");
    };

    const filterTasks = tasks.filter((task) => {
        if (filter == "completed") return task.completed;
        if (filter == "uncompleted") return !task.completed;
        return true;
    });

    const deleteTask = function (taskID) {
        const updatedTasks = tasks.filter((task) => task.id != taskID);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = function (taskID) {
        const updatedTasks = tasks.map((task) => {
            if (task.id == taskID) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const updateTask = function (updatedTask) {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>👋🏻 Hello There!</Text>
            <AddTaskComponent
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
                taskDetails={taskDetails}
                setTaskDetails={setTaskDetails}
                addTask={addTask}
            />
            <View style={styles.separator} />
            <FilterTasksComponent filter={filter} setFilter={setFilter} />
            <ListTasksComponent
                filterTasks={filterTasks}
                navigation={navigation}
                updateTask={updateTask}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
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
