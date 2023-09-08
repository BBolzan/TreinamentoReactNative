import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }
  return (
    <View style={styles.formContent}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            validationImc();
          }}
          style={styles.buttonCalculator}
        >
          <Text style={styles.textButtonCalculator}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc}></ResultIMC>
    </View>
  );
}
