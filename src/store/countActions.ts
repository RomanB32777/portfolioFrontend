export const countInitialState = {
    count: 0
  };
  
  export const countActions = {
    increment: (state: any) => ({ count: state.count + 1 }),
    decrement: (state: any) => ({ count: state.count - 1 })
  };