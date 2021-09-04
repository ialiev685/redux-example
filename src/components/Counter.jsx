import { Controls } from "./Controls.jsx";
import { Value } from "./Value.jsx";
import { connect } from "react-redux";

import * as actions from "../Redux/Counter/counter-action.js";

import "./Counter.scss";

const Counter = ({ value, onIncrement, onDecrement }) => {
  console.log(value);
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        onIncrement={() => onIncrement(10)}
        onDecrement={() => onDecrement(20)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
