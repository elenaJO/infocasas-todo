import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { BtnApp } from "../shared/BtnApp";
import { InputApp } from "../shared/InputApp";
import { ItemApp } from "../shared/ItemApp";

export const HomeList = () => {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [action, setAction] = useState("Agregar");
  const [id, setId] = useState(null);

  const {
    loading,
    todos,
    handleDeleteTodo,
    handleToogleTodo,
    handleNewTodo,
    handleTodo,
    searchTodo,
    handleItem,
  } = useTodos();

  const handleInputChange = (value) => {
    setTask(value);
  };

  const handleSearch = (value) => {
    setSearch(value);
    searchTodo(value);
  };

  const addTask = () => {
    if (action === "Agregar") handleNewTodo(task);
    else handleItem(id, task);
    setTask("");
    setAction("Agregar");
  };

  const updateItem = (id, title) => {
    setTask(title);
    setId(id);
    setAction("Editar");
  };

  return (
    <div className="home-list">
      <h2 className="home-list__title">Lista de Tareas</h2>
      <div className="home-list__content-button mb-16">
        <InputApp
          name="task"
          type="text"
          placeholder="Tarea"
          optionalClass="home-list__input"
          value={task}
          handleInputChange={({ target }) => handleInputChange(target.value)}
        />
        <BtnApp
          disabled={task.length === 0 || loading}
          title={action}
          handleClick={addTask}
        />
      </div>
      <InputApp
        name="search"
        type="text"
        placeholder="Buscar tarea"
        optionalClass="mb-16"
        value={search}
        handleInputChange={({ target }) => handleSearch(target.value)}
      />
      <div className="home-list__content-item">
        {todos.map((item, index) => (
          <ItemApp
            key={index}
            title={item.title}
            completed={item.completed}
            id={item.id}
            handleItem={(id, title) => updateItem(id, title)}
            handleItemDelete={(id) => handleDeleteTodo(id)}
            handleItemToogle={(id) => handleToogleTodo(id)}
          />
        ))}
      </div>
    </div>
  );
};
