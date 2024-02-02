import "./App.css";
import { useState } from "react";
import Working from "./components/todo/Working";
import TodoController from "./components/todo/TodoController";
import Header from "./components/layout/Header";
function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Header
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        todo={todo}
        setTodo={setTodo}
        isDone={isDone}
      />

      <TodoController
        todo={todo}
        setTodo={setTodo}
        isDone={isDone}
        setIsDone={setIsDone}
      />
    </>
  );
}

export default App;
