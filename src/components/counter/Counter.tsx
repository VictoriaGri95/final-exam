import {DisplayCounter} from "../displayCounter/DisplayCounter.tsx";
import {useState} from "react";
import {CounterControls} from "../counterControls/CounterControls.tsx";
import s from './Counter.module.scss'


export const Counter = () => {
  const maxValue = 5
  const minValue = 0


  const [count, setCount] = useState(minValue)

  const onClickIncHandler = () => {
    const newCount = count + 1;
    if (newCount <= maxValue) {
      setCount(newCount)
    }
  }

  const onClickResetHandler = () => {
    setCount(minValue)

  }
  const hasReachedMax = count === maxValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter count={count} isMax={hasReachedMax}/>

      <CounterControls
        onInc={onClickIncHandler}
        onReset={onClickResetHandler}
        isIncDisabled={count === maxValue}
        isResetDisabled={count === minValue}
      />

    </div>
  );
};

