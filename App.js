import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const btnClickHandler = (goalInput) => {
    console.log("Button log:", goalInput);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalInput, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput btnHandler={btnClickHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          // NB: unique key - 'id' refers to the id in the object on line 25
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
