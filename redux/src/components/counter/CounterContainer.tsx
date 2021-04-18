import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../modules';
import {increase, decrease, increaseBy} from '../../modules/counter';
import CounterPresenter from './CounterPresenter';

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => { dispatch(increase())};
  const onDecrease = () => { dispatch(decrease())};
  const onIncreaseBy = (diff: number) => { dispatch(increaseBy(diff))};

  return <CounterPresenter
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onIncreaseBy={onIncreaseBy}
  ></CounterPresenter>;
}

export default CounterContainer;

