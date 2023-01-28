import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ btnHandler }) => {
  const [goalInput, setGoalInput] = useState("");

  const goalInputHandler = (enteredText) => {
    console.log(enteredText);
    setGoalInput(enteredText);
  };

  const btnClickHandler = () => {
    btnHandler(goalInput);
    setGoalInput("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goalInput}
      />
      <Button title="Add Goal" onPress={btnClickHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    paddingLeft: 8,
  },
});
