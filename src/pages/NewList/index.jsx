import React from "react"

import Header from "../../components/Header"
import TaskInput from "../../components/TaskInput"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
import list_icon from "../../assets/icone_lista.png"
import edit_icon from "../../assets/icone_editar.png"
import delete_icon from "../../assets/icone_deletar_lista.png"
import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

export default function NewList() {
  return (
    <>
      <Header id="newlist-header" />
      <div className="newlist-container">
        <section className="todo-section">
          <div id="new-list-div">
            <h1>Criar Lista</h1>
          </div>
        </section>

        <setion className="newlist-form">
          <input type="text" placeholder="Digite o nome da lista" />
          <br />
          <TaskInput />
        </setion>
      </div>
    </>
  )
}
