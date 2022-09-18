export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "all-todo":
      return [...action.payload];

    case "add-todo":
      return [action.payload, ...initialState];

    case "remove-todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "toogle-todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

    case "search-todo":
      if (action.payload.search.trim()) {
        const searchArray = [...action.payload.todosInit.current];
        return searchArray.filter((todo) =>
          todo.title.includes(action.payload.search)
        );
      }
      return initialState;

    case "update-todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
