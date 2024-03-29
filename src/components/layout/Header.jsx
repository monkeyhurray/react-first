import React from "react";

function Header({
  todo,
  isDone,
  setTodo,
  title,
  setTitle,
  content,
  setContent,
}) {
  return (
    <>
      <div className="entire">
        <div className="title">
          <h3>제목: &nbsp;</h3>
          <input
            className="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="content">
          <h3>내용: &nbsp;</h3>
          <input
            className="contentInput"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          className="addBtn"
          onClick={() => {
            if (title.trim() === "") {
              alert("제목을 입력하세요");
              return;
            }
            if (content.trim() === "") {
              alert("내용을 입력하세요");
              return;
            }
            setTodo([...todo, { id: todo.length, isDone, title, content }]);
            setTitle("");
            setContent("");
          }}
        >
          추가하기
        </button>
      </div>
    </>
  );
}

export default Header;
