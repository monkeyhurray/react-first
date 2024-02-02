import { useState } from "react";

const Working = ({ todo, setTodo, title }) => {
  const removeHandler = (id) => {
    const removeListArr = todo.filter((e) => e.id !== id);
    return setTodo(removeListArr);
  };

  const completeHandler = (id) => {
    return setTodo((todo) => {
      const addListArr = todo.map((element) => {
        if (element.id === id) {
          return { ...element, isDone: true };
        }
        return element;
      });

      return addListArr;
    });
  };

  const doneHandler = (id) => {
    return setTodo((todo) => {
      const addListArr = todo.map((element) => {
        if (element.id === id) {
          return { ...element, isDone: false };
        }
        return element;
      });
      return addListArr;
    });
  };

  return (
    <>
      <div className="titleGround">
        <b className="showTitle">
          <h2>{title}</h2>
        </b>
      </div>
      <div className="contentGround">
        <div className="contentBox">
          <div className="showContent">
            {todo.map((e) => {
              return (
                <div key={crypto.randomUUID()} className="todoBox">
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
                        onClick={() =>
                          e.isDone === true
                            ? doneHandler(e.id)
                            : completeHandler(e.id)
                        }
                      >
                        {e.isDone === true ? "취소" : "완료"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Working;
