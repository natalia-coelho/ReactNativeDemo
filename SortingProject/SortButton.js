import React from "react";
import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const SortButton = () => {
  const [firstNumber, setFirstNumber] = useState(1);
  const [secondNumber, setSecondNumber] = useState(1);
  const [sortResult, setSortResult] = useState(0);

  return (
    <View>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder="First Number"
          onChangeText={firstNumberText => setFirstNumber(parseInt(firstNumberText))}
          defaultValue={firstNumber}
          style={styles.text}>
        </TextInput>
        <TextInput 
          placeholder="Second Number"
          onChangeText={secondNumberText => setSecondNumber(parseInt(secondNumberText))}
          defaultValue={secondNumber}
          styles={styles.text}>
        </TextInput>
      </View>
        <View> 
          <Text style={styles.resultText}>Resultado: {sortResult}</Text>
          <Button
            onPress={
              () => {
                setSortResult(sortNumber(firstNumber, secondNumber));
              }
            }
            title={"Sortear"}
            color="#587792"
          />
        </View>
    </View>
  );
};

function sortNumber(firstNumber, secondNumber) {
  let result = Math.random() * (secondNumber - firstNumber) + firstNumber;
  return parseInt(result);
};

const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    padding: 20,
    textAlign: "center",
    marginLeft: 50
  },
  resultText: {
    textAlign: "center",
    padding: 10
  },
});


export default SortButton;