import React from "react"

import Header from "../../components/Header"
import TaskInput from "../../components/TaskInput"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
import list_icon from "../../assets/icone_lista.png"
import edit_icon from "../../assets/icone_editar.png"
import delete_icon from "../../assets/icone_deletar_lista.png"
import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

function Profile() {
  return (
    <>
      <Header id="profile-header" />
      <div className="profile-container">
        <section className="todo-section">
          <div id="new-list-div">
            <h1>Listas</h1> <img src={new_item} alt="new list icon" />
          </div>
          <ul className="todo-list">
            <li className="list-item">
              <div className="lista-div" id="lista1">
                <section id="list-title-sec">
                  <img src={list_icon} alt="List icon" />
                  <p>Lista 1</p>
                </section>
                <section id="list-btns-sec">
                  <span>
                    <img src={edit_icon} alt="Edit icon" />
                  </span>
                  <span>
                    <img src={delete_icon} alt="Delete icon" />
                  </span>
                </section>
              </div>
            </li>
            <li className="list-item">
              <div className="lista-div" id="lista2">
                <section id="list-title-sec">
                  <img src={list_icon} alt="List icon" />
                  <p>Lista 2</p>
                </section>
                <section id="list-btns-sec">
                  <span>
                    <img src={edit_icon} alt="Edit icon" />
                  </span>
                  <span>
                    <img src={delete_icon} alt="Delete icon" />
                  </span>
                </section>
              </div>
              <ul className="tarefa-container">
                <TaskInput />
                <li className="tarefa-list-section">
                  <div className="tarefa-item">
                    <div className="tarefa-name-div">
                      <input type="checkbox" name="tarefa" id="check-tarefa1" />
                      <p>Tarefa 1</p>
                    </div>
                    <span>
                      <img src={delete_tarefa} alt="Delete icon" />
                    </span>
                  </div>
                  <ul className="subtarefas-div">
                    <li>
                      <div className="subtarefa-name-div">
                        <input
                          type="checkbox"
                          name="tarefa"
                          id="check-tarefa1"
                        />
                        <p>Subtarefa 1</p>
                      </div>

                      <span>
                        <img src={delete_tarefa} alt="Delete icon" />
                      </span>
                    </li>
                    <li>
                      <div className="subtarefa-name-div">
                        <input
                          type="checkbox"
                          name="tarefa"
                          id="check-tarefa2"
                        />
                        <p>Subtarefa 2</p>
                      </div>

                      <span>
                        <img src={delete_tarefa} alt="Delete icon" />
                      </span>
                    </li>
                    <li>
                      <div className="subtarefa-name-div">
                        <input
                          type="checkbox"
                          name="tarefa"
                          id="check-tarefa3"
                        />
                        <p>Subtarefa 3</p>
                      </div>

                      <span>
                        <img src={delete_tarefa} alt="Delete icon" />
                      </span>
                    </li>

                    <div className="input-group" id="subtarefa-input-group">
                      <input type="text" placeholder="Adicionar subtarefa" />
                      <img src={new_item} alt="new task icon" />
                    </div>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <div className="lista-div" id="lista3">
                <section id="list-title-sec">
                  <img src={list_icon} alt="" />
                  <p>Lista 3</p>
                </section>
                <section id="list-btns-sec">
                  <span>
                    <img src={edit_icon} alt="Edit" />
                  </span>
                  <span>
                    <img src={delete_icon} alt="Edit" />
                  </span>
                </section>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Profile
