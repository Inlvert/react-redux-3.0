import ACTION_TYPES from "./actionTypes";

export function increment () {
  const action = {
    type: ACTION_TYPES.INCREMENT
  };
  return action
};

export const decrement = () => ({
  type: ACTION_TYPES.DECREMENT
})

export const reset = () => ({
  type: ACTION_TYPES.RESET
})

export const step = (newStep) => ({
  type: ACTION_TYPES.STEP,
  payload: newStep
})