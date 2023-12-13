import { increment } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Counter() {
    const selector = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return <div>
        count: {selector}
        <button onClick={() => dispatch(increment())}>Add</button>
    </div>
}

export default Counter;