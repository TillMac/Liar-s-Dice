import React, { useEffect, useState } from 'react'
import AlignCenter from '../../components/AlignCenter/AlignCenter';
import Button from '../../components/Button/Button';
import { Icon } from '../../models/icon';

const BasicDice = () => {
  const [diceNum, setDiceNum] = useState({
    dice1: '',
    dice2: '',
    dice3: '',
    dice4: '',
    dice5: '',
  });

  const getRandomNum = () => {
    setDiceNum({
      dice1: (Math.floor(Math.random()*6)+1).toString(),
      dice2: (Math.floor(Math.random()*6)+1).toString(),
      dice3: (Math.floor(Math.random()*6)+1).toString(),
      dice4: (Math.floor(Math.random()*6)+1).toString(),
      dice5: (Math.floor(Math.random()*6)+1).toString(),
    })
  };

  const getDiceImage = (num: string) => {
    switch (num) {
      case (''):
        return (
          <Icon.DiceOnFire />
        )
      case ('1'):
        return (
          <Icon.DiceNum1 />
        )
      case ('2'):
        return (
          <Icon.DiceNum2 />
        )
      case ('3'):
        return (
          <Icon.DiceNum3 />
        )
      case ('4'):
        return (
          <Icon.DiceNum4 />
        )
      case ('5'):
        return (
          <Icon.DiceNum5 />
        )
      case ('6'):
        return (
          <Icon.DiceNum6 />
        )
    }
  };

  useEffect(() => {
    getRandomNum();
  } , []);

  return (
    <div>
      <AlignCenter>
        <>
          {getDiceImage(diceNum.dice1)}{getDiceImage(diceNum.dice2)}{getDiceImage(diceNum.dice3)}{getDiceImage(diceNum.dice4)}{getDiceImage(diceNum.dice5)}
        </>
      </AlignCenter>
      <AlignCenter>
        <Button onClick={getRandomNum}>
          <Icon.DiceOnFire />
        </Button>
      </AlignCenter>
    </div>
  )
}

export default BasicDice;
