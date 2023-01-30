import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Button,
  Image,
} from "react-native";

const GoalInput = ({ btnHandler, visible, onCancel }) => {
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={onCancel} color='#f31282'/>
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={btnClickHandler} color='#530acc'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center", 
    padding: 16,
    alignItems: "center",
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: "100%",
    height: 40,
    paddingLeft: 8,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    marginHorizontal: 8,
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
