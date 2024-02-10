import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
const Router = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todo, setTodo] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              isDone={isDone}
              setIsDone={setIsDone}
              todo={todo}
              setTodo={setTodo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
