import { decrement, increment, reset } from "./counterSlice";
import {useSelector ,useDispatch} from "react-redux";
import { RootState } from '../store'

const Counter=()=>{
    const count = useSelector((state: RootState) => state.counterR.count);
    const dispatch =useDispatch();
    
    const handleIncrement=()=>{
       dispatch(increment());
    }
    const handleDecrement=()=>{
        dispatch(decrement());
     }
     const handleReset=()=>{
        dispatch(reset());
     }
 return(
<div>
<h1> Counter : {count}</h1>
<button onClick={handleIncrement}>+</button>
<button onClick={handleReset}>0</button>
<button onClick={handleDecrement}>-</button>
</div>
 );
};

export default Counter;