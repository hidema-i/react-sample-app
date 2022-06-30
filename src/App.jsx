import React, { useState } from "react";
import "../src/styles.css";
import { InputTodo } from "./components/inputTodo";
import { InconpleteArea } from "./components/inconpleteArea";
import { ConpleteArea } from "./components/conpleteArea";

export const App = () => {
  //入力した値を格納
  const [todoText, setTodoText] = useState("");
  //未完了の配列を格納する
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  ///完了の配列を格納する
  const [completeTodos, setCompleteTodos] = useState([]);
  //inputの箇所が初期値で空になっているので以下を設定
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  ///追加のonClick関数
  const onClickAdd = () => {
    //もしtodoTextが空の場合は戻る
    if (todoText === "") return;
    //incompleteTodosを引き継がずに新しい配列を生成
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //入力した値が渡ったらinputを空にする
    setTodoText("");
  };

  //削除のonClick関数
  const onClickDelete = (index) => {
    //incompleteTodosを引き継がずに新しい配列を生成
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //完了のonClick関数
  const onClickComplete = (index) => {
    //incompleteTodosを引き継がずに新しい配列を生成
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻る
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      {/* 入力エリア */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* 未完了エリア */}
      <InconpleteArea
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* 完了エリア */}
      <ConpleteArea completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
