import { Button } from "../button/Button.tsx"
import s from './counterControls.module.scss'

type Props = {
  onInc: () => void
  onReset: () => void
  isIncDisabled: boolean
  isResetDisabled: boolean
}

export const CounterControls = ({
                                  onInc,
                                  onReset,
                                  isIncDisabled,
                                  isResetDisabled
                                }: Props) => {
  return (
    <div className={s.buttonsWrapper}>
      <Button
        title="inc"
        onClick={onInc}
        disabled={isIncDisabled}
      />
      <Button
        title="reset"
        onClick={onReset}
        disabled={isResetDisabled}
      />
    </div>
  );
};

