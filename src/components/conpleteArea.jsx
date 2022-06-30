import React from "react";

export const ConpleteArea = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
