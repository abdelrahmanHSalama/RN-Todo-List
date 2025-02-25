import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultTasks = [
    {
        id: 1,
        title: "Grocery Shopping",
        details: "Buy fruits, vegetables, and dairy products for the week.",
        completed: false,
    },
    {
        id: 2,
        title: "Workout",
        details: "Complete a 30-minute cardio and strength training session.",
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
        details: "Finish reading the last two chapters of the current book.",
        completed: false,
    },
    {
        id: 5,
        title: "Clean the House",
        details: "Vacuum and dust all rooms, especially the living area.",
        completed: false,
    },
];

export const loadTasks = createAsyncThunk("tasks/loadTasks", async () => {
    const storedTasks = await AsyncStorage.getItem("tasks");
    if (storedTasks != null) {
        return JSON.parse(storedTasks);
    }
    return [...defaultTasks];
});

const saveTasks = async (tasks) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        filter: "all",
        status: "idle",
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
            saveTasks(state.tasks);
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            saveTasks(state.tasks);
        },
        toggleTaskCompletion(state, action) {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
            saveTasks(state.tasks);
        },
        updateTask(state, action) {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
            saveTasks(state.tasks);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tasks = action.payload;
            })
            .addCase(loadTasks.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const {
    addTask,
    deleteTask,
    toggleTaskCompletion,
    updateTask,
    setFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
