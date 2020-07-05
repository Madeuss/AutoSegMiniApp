import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, addTask } from "../../store/todoList"

import Header from "../../components/Header"
import { TaskInput } from "../../components/TaskInput"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
import list_icon from "../../assets/icone_lista.png"
import edit_icon from "../../assets/icone_editar.png"
import delete_icon from "../../assets/icone_deletar_lista.png"
import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

export default function Profile() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoReducer)
  const [task, setTask] = useState({})

  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    setTask({ ...task, [name]: event.target.value })
  }

  const addTask = (e, titleTask, todoId) => {
    // e.preventDefault()

    console.log(todoId, titleTask)
    dispatch(addTask(titleTask, todoId))
    setTask({})
  }

  return (
    <>
      <Header id="profile-header" />
      <div className="profile-container">
        <section className="todo-section">
          <div id="new-list-div">
            <h1>Listas</h1>
            <Link to="/list/new">
              <img src={new_item} alt="new list icon" />
            </Link>
          </div>
          <ul className="todo-list">
            {todoList.map((todo) => (
              <li key={todo.id} className="list-item">
                <div className="lista-div" id="lista2">
                  <section id="list-title-sec">
                    <img src={list_icon} alt="List icon" />
                    <p>{todo.list}</p>
                  </section>
                  <section id="list-btns-sec">
                    <span>
                      <img src={edit_icon} alt="Edit icon" />
                    </span>
                    <span>
                      <img
                        src={delete_icon}
                        alt="Delete icon"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                      />
                    </span>
                  </section>
                </div>

                <ul className="tarefa-container">
                  <form onSubmit={(e) => addTask(e, task[todo.list], todo.id)}>
                    <TaskInput id="list-taskinput">
                      <input
                        name={todo.list}
                        value={task[todo.list]}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder="Adicionar tarefa"
                      />
                      <label htmlFor={todo.list}>
                        <img id={todo.id} src={new_item} alt="new task icon" />
                      </label>
                      <button
                        id={todo.list}
                        style={{ display: "none" }}
                        type="submit"
                      ></button>
                    </TaskInput>
                  </form>

                  {todo.task.map((task) => (
                    <li key={todo.task.id} className="tarefa-list-section">
                      <div className="tarefa-item">
                        <div className="tarefa-name-div">
                          <input
                            type="checkbox"
                            name="tarefa"
                            id="check-tarefa1"
                          />
                          <p>{task.title}</p>
                        </div>
                        <span>
                          <img src={delete_tarefa} alt="Delete icon" />
                        </span>
                      </div>

                      <ul className="subtarefas-div">
                        {task.subtask.map((subtask) => (
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
                        ))}

                        <div className="input-group" id="subtarefa-input-group">
                          <input
                            type="text"
                            placeholder="Adicionar subtarefa"
                          />
                          <img src={new_item} alt="new task icon" />
                        </div>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
