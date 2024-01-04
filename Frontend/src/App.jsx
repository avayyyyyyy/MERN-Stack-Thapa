import { useSelector, useDispatch } from "react-redux";
import { decreament, increament } from "../store/countSlice";

const App = () => {
  let count = useSelector((state) => state.count.value);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
