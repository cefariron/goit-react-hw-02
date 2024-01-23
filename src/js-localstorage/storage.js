export const saveLocalStorage = (key, value) => {
    try {
      const state = JSON.stringify(value);
      localStorage.setItem(key, state);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  export const loadLocalStorage = key => {
    try {
      const state = localStorage.getItem(key);
      return state === null ? undefined : JSON.parse(state);
    } catch (error) {
      console.error(error.message);
    }
  };