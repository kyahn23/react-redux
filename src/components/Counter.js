// import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const show = useSelector((state) => state.showCounter);

  const incHandler = () => {
    dispatch({ type: "inc" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const decHandler = () => {
    dispatch({ type: "dec" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// 클래스 컴포넌트
// class Counter extends Component {
//   incHandler() {
//     this.props.inc();
//   }
//   decHandler() {
//     this.props.dec();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>Increment</button>
//           <button onClick={this.decHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch({ type: "inc" }),
//     dec: () => dispatch({ type: "dec" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
