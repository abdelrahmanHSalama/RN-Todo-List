import { StyleSheet, Text, View, Pressable } from "react-native";

export default function FilterTasksComponent({ filter, setFilter }) {
    return (
        <>
            <View style={styles.filterButtonsContainer}>
                <Pressable
                    style={[
                        styles.filterButton,
                        filter === "all" && styles.activeFilterButton,
                    ]}
                    onPress={() => setFilter("all")}
                >
                    <Text
                        style={[
                            styles.filterButtonText,
                            filter === "all" && styles.activeFilterButtonText,
                        ]}
                    >
                        All
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.filterButton,
                        filter === "completed" && styles.activeFilterButton,
                    ]}
                    onPress={() => setFilter("completed")}
                >
                    <Text
                        style={[
                            styles.filterButtonText,
                            filter === "completed" &&
                                styles.activeFilterButtonText,
                        ]}
                    >
                        Completed
                    </Text>
                </Pressable>
                <Pressable
                    style={[
                        styles.filterButton,
                        filter === "uncompleted" && styles.activeFilterButton,
                    ]}
                    onPress={() => setFilter("uncompleted")}
                >
                    <Text
                        style={[
                            styles.filterButtonText,
                            filter === "uncompleted" &&
                                styles.activeFilterButtonText,
                        ]}
                    >
                        Uncompleted
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 12,
        textAlign: "center",
    },
    activeFilterButtonText: {
        color: "white",
    },
});
