import React from "react"

import Header from "../../components/Header"
import { TaskInput } from "../../components/TaskInput"
import { Button } from "../../components/Button"

import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../../store/todoList"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
// import list_icon from "../../assets/icone_lista.png"
// import edit_icon from "../../assets/icone_editar.png"
// import delete_icon from "../../assets/icone_deletar_lista.png"
// import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

export default function NewList() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoReducer)

  return (
    <>
      <Header id="newlist-header" />
      <div className="newlist-container">
        <section className="todo-section">
          <div id="new-list-div">
            <h1>Criar Lista</h1>
          </div>
        </section>

        <form className="newlist-form">
          <section className="form-inputs-section">
            <input type="text" placeholder="Digite o nome da lista" />
            <br />
            <TaskInput id="taskinput">
              <input type="text" placeholder="Adicionar tarefa" />
              <img src={new_item} alt="new task icon" />
            </TaskInput>
          </section>
          <section className="form-buttons-section">
            <Button backgroundColor="#D3CE3D" fontColor="#574437">
              Cancelar
            </Button>
            <Button
              backgroundColor="#EF7734"
              fontColor="#F9F4C2"
              marginLeft={20}
            >
              Criar Lista
            </Button>
          </section>
        </form>
        <section className="list-just-created"> </section>
      </div>
    </>
  )
}
