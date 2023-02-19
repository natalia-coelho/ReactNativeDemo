import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";

const ContadorButton = () => {
    const [contador, setContaClick] = useState(0);

    return (
      <View>
        <Button
        onPress={
          () => {
            setContaClick(contador + 1)
          }
        }
        title={contador.toString()}
        />
      </View>
    );
  }

export default ContadorButton;