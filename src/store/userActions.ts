export const userInitialState = {
    user: {
      loggedIn: false
    }
  };
  
  export const userActions = {
    login: () => {
      return { user: { loggedIn: true } };
    },
    logout: () => {
      return { user: { loggedIn: false } };
    }
  };