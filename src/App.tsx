import React, { PropsWithChildren, useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { trigger } from "react-native-haptic-feedback";

import diceOne from '../assets/One.png'
import diceTwo from '../assets/Two.png'
import diceThree from '../assets/Three.png'
import diceFour from '../assets/Four.png'
import diceFive from '../assets/Five.png'
import diceSix from '../assets/Six.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}



const App = (): JSX.Element => {
  const [imageDice, setImageDice] = useState<ImageSourcePropType>(diceOne);

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6)+ 1;


    switch (randomNumber) {
      case 1:
        setImageDice(diceOne)
        break;
      case 2:
        setImageDice(diceTwo)
        break;
      case 3:
        setImageDice(diceThree)
        break;
      case 4:
        setImageDice(diceFour)
        break;
      case 5:
        setImageDice(diceFive)
        break;
      case 6:
        setImageDice(diceSix)
        break;

      default:
        setImageDice(diceOne)
        break;
    }

    trigger("impactHeavy", options);
  }



  return (
    <View style={styles.container}>
      <Dice imageUrl={imageDice} />

      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The dice</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;