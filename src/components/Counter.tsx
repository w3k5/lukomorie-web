import {useState} from 'react';
import classes from './Counter.module.scss'

interface CounterProps {}

export const Counter = (props: CounterProps) => {
    const [counter, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)
    return <div>
        <h1>{counter}</h1>
        <button onClick={increment} className={classes.button}>increment</button>
    </div>;
};
