import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { useTranslation } from 'react-i18next'

const ContadorButton = () => {
    const [contador, setContaClick] = useState(0);
    const { t, i18n } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState("en")

    return (
      <View>
        <Button
        onPress={
          () => {
            setContaClick(contador + 1)
            setCurrentLanguage(currentLanguage == "en" ? "pt" : "en")
            i18n.changeLanguage(currentLanguage);
          }
        }
        title={t('demoScope.title') + contador.toString() + t('demoScope.times')}
        color="#587792"
        />
      </View>
    );
  }

export default ContadorButton;