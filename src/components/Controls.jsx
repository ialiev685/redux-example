export const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Уменьшить на{" "}
    </button>
    <button type="button" onClick={onDecrement}>
      Увеличить на{" "}
    </button>
  </div>
);
