import React from "react";
import { useMemo } from "react";
import Working from "./Working";
function TodoController({ todo, setTodo, isDone, setIsDone }) {
  const workingTodo = todo.filter((e) => e.isDone === false);
  const doneTodo = todo.filter((e) => e.isDone === true);

  return (
    <main>
      <Working
        title={"Working"}
        todo={workingTodo}
        setTodo={setTodo}
        isDone={isDone}
        setIsDone={setIsDone}
      />
      <Working
        title={"Done"}
        todo={doneTodo}
        setTodo={setTodo}
        isDone={isDone}
        setIsDone={setIsDone}
      />
    </main>
  );
}

export default TodoController;
