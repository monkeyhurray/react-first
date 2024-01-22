const Done = ({ todo, setTodo, done, setDone }) => {
  const removeHandler = (id) => {
    const newDone = done.filter((e) => e.id !== id);
    return setDone(newDone);
  };

  const cancelArr = (id) => {
    const addListArr = done.filter((e) => {
      e.isDone = false;

      const removeDoneArr = done.filter((e) => e.id !== id);
      setDone(removeDoneArr);
      return e.id === id;
    });
    return setTodo([...todo, ...addListArr]);
  };

  return (
    <>
      {" "}
      <div className="titleGround">
        <b className="showTitle">
          <h2>Done...</h2>
        </b>
      </div>
      <div className="contentGround">
        <div className="contentBox">
          <div className="showContent">
            {done.map((e) => {
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
                          console.log(e);
                        }}
                      >
                        삭제하기
                      </button>
                    </div>

                    <div className="rBtn">
                      <button
                        onClick={() => {
                          cancelArr(e.id);
                        }}
                      >
                        취소
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
export default Done;
