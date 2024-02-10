import Header from "../components/layout/Header";
import TodoController from "../components/todo/TodoController";

function Home({
  title,
  setTitle,
  setContent,
  content,
  todo,
  setTodo,
  isDone,
  setIsDone,
}) {
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

export default Home;
