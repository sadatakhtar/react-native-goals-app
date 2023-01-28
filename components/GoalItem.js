import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.listedGoal}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
    listedGoal: {
        margin: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "blue",
        padding: 6,
        backgroundColor: "#5e0acc",
      },
      goalText: {
        color: "white",
      },
})
