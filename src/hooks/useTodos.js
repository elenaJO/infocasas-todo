import { useEffect, useReducer, useRef, useState } from "react";
import { authApi } from "../apis";
import { todoReducer } from "../reducers/todoReducer";

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const todosInit = useRef([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const { data } = await authApi.get("/todos");
    data.sort((a, b) => {
      return a.completed - b.completed;
    });
    todosInit.current = data;
    dispatch({
      type: "all-todo",
      payload: data,
    });
    setLoading(false);
  };

  const handleNewTodo = async (title) => {
    setLoading(true);
    const body = {
      title,
      completed: false,
      userId: 1,
    };
    const { data } = await authApi.post("/todos", body);
    dispatch({
      type: "add-todo",
      payload: data,
    });
    setLoading(false);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "remove-todo",
      payload: id,
    });
  };

  const handleToogleTodo = (id) => {
    dispatch({
      type: "toogle-todo",
      payload: id,
    });
  };

  const searchTodo = (search) => {
    dispatch({
      type: "search-todo",
      payload: {
        search,
        todosInit,
      },
    });
  };

  const handleItem = (id, title) => {
    dispatch({
      type: "update-todo",
      payload: {
        id,
        title,
      },
    });
  };

  return {
    loading,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo,
    searchTodo,
    handleItem,
  };
};
