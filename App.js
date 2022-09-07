import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () => {

  const [Num, SetNum] = useState(0)
  const [Answer, SetAnswer] = useState()

  let calculate = () => {
    SetAnswer(eval(Num))
  }

  return (
    <View style={styles.cont}>
      <TextInput style={styles.cin} editable={false} value={Num.toString()} />
      <Text style={styles.text}>Answer: {Answer}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 1 : Num + 1)}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 2 : Num + 2)}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 3 : Num + 3)}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 4 : Num + 4)}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 5 : Num + 5)}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 6 : Num + 6)}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 7 : Num + 7)}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 8 : Num + 8)}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 9 : Num + 9)}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + 0 : Num + 0)}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + '+' : '')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => SetNum(Num != 0 ? Num.toString() + '-' : '')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <Button title="calculate" onPress={() => calculate()} />
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center"
  },
  text: {
    fontSize: 20,
  },
  cin: {
    width: '100%',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 20,
    textAlign: "right",
    paddingRight: 5
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  button: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App