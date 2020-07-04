import React from "react"

import { TaskInput } from "./styles"

import new_item from "../../assets/botao_adicionar.png"

function TarefaInput() {
  return (
    <TaskInput>
      <input type="text" placeholder="Adicionar subtarefa" />
      <img src={new_item} alt="new task icon" />
    </TaskInput>
  )
}

export default TarefaInput
