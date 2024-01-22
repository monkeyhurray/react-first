import { useState } from "react";
import Done from "./Done";

const Working = ({ todo, setTodo, setIsDone }) => {
  const [done, setDone] = useState([]);
  const removeHandler = (id) => {
    const removeListArr = todo.filter((e) => e.id !== id);
    return setTodo(removeListArr);
  };

  const completeHandler = (id) => {
    const addListArr = todo.filter((e) => {
      e.isDone = true;

      const removeListArr = todo.filter((e) => e.id !== id);
      setTodo(removeListArr);
      return e.id === id;
    });

    return setDone([...done, ...addListArr]);
  };
  return (
    <>
      <div className="titleGround">
        <b className="showTitle">
          <h2>Working...</h2>
        </b>
      </div>
      <div className="contentGround">
        <div className="contentBox">
          <div className="showContent">
            {todo.map((e) => {
              return (
                <div key={e.id} className="todoBox">
                  <h3>리액트 공부하기</h3>
                  <div className="todoTitle">제목: {e.title}</div>
                  <div className="todoTitle">내용: {e.content}</div>
                  <div className="btn">
                    <div className="lBtn">
                      <button
                        onClick={() => {
                          removeHandler(e.id);
                        }}
                      >
                        삭제하기
                      </button>
                    </div>
                    <div className="rBtn">
                      <button
                        onClick={() => {
                          completeHandler(e.id);
                        }}
                      >
                        완료
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Done
        setDone={setDone}
        done={done}
        setIsDone={setIsDone}
        todo={todo}
        setTodo={setTodo}
      />
    </>
  );
};
export default Working;
