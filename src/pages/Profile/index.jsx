import React, { useState } from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import {
  deleteTodo,
  addTask,
  deleteTask,
  addSubTask,
  deleteSubTask,
  toogleTask,
  toogleSubTask,
} from "../../store/todoList"

import Header from "../../components/Header"
import { TaskInput } from "../../components/TaskInput"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
import list_icon from "../../assets/icone_lista.png"
import edit_icon from "../../assets/icone_editar.png"
import delete_icon from "../../assets/icone_deletar_lista.png"
import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

export default function Profile() {
  const [todoActive, setTodoActive] = useState(false)

  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoReducer)
  const [task, setTask] = useState({})
  const [subTask, setSubTask] = useState({})

  function handlePushAccordion(index) {
    let accordion = todoActive === index ? false : index
    setTodoActive(accordion)
  }

  function display(index) {
    return todoActive === index ? "grid" : "none"
  }
  function backcolor(index) {
    return todoActive === index ? "#e0e0e0" : "#fff"
  }

  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    setTask({ ...task, [name]: event.target.value })
  }
  const addTask_ = (e, titleTask, todoId, taskName) => {
    e.preventDefault()

    dispatch(addTask(titleTask, todoId))
    setTask({ ...task, [taskName]: "" })
  }

  const handleSubInputChange = (event) => {
    const subtarget = event.target
    const subname = subtarget.name
    setSubTask({ ...subTask, [subname]: event.target.value })
  }
  const addSubTask_ = (e, titleSubTask, todoId, taskId, subTaskName) => {
    e.preventDefault()

    dispatch(addSubTask(titleSubTask, todoId, taskId))
    setSubTask({ ...subTask, [subTaskName]: "" })
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
            {todoList.map((todo, index) => (
              <li
                key={todo.id}
                className="list-item"
                style={{ backgroundColor: backcolor(index) }}
              >
                <div className="lista-div">
                  <section id="list-title-sec">
                    <img
                      src={list_icon}
                      alt="List icon"
                      onClick={() => handlePushAccordion(index)}
                      id="list-icon"
                    />
                    <p>{todo.list}</p>
                  </section>
                  <section id="list-btns-sec">
                    <span>
                      <img
                        src={edit_icon}
                        alt="Edit icon"
                        onClick={() => handlePushAccordion(index)}
                        id="edit-list-icon"
                      />
                    </span>
                    <span>
                      <img
                        src={delete_icon}
                        alt="Delete icon"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        id="delete-list-icon"
                      />
                    </span>
                  </section>
                </div>

                <ul
                  className="tarefa-container"
                  style={{ display: display(index) }}
                >
                  <form
                    onSubmit={(e) =>
                      addTask_(e, task[todo.list], todo.id, todo.list)
                    }
                  >
                    <TaskInput id="list-taskinput">
                      <input
                        name={todo.list}
                        value={task[todo.list]}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        placeholder="Adicionar tarefa"
                        required
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

                  {/* TASK MAP */}
                  {todo.task.map((task) => (
                    <li key={task.id} className="tarefa-list-section">
                      <div className="tarefa-item">
                        <div className="tarefa-name-div">
                          <input
                            type="checkbox"
                            name="tarefa"
                            id="check-tarefa1"
                            onChange={(e) =>
                              dispatch(
                                toogleTask(todo.id, task.id, e.target.checked)
                              )
                            }
                            checked={task.completed}
                          />
                          <p>{task.title}</p>
                        </div>
                        <span>
                          <img
                            src={delete_tarefa}
                            alt="Delete icon"
                            onClick={() =>
                              dispatch(deleteTask(todo.id, task.id))
                            }
                          />
                        </span>
                      </div>

                      <ul className="subtarefas-div">
                        {task.subtask.map((subtask) => (
                          <li key={subtask.id}>
                            <div className="subtarefa-name-div">
                              <input
                                type="checkbox"
                                name="tarefa"
                                id="check-tarefa"
                                onChange={(e) =>
                                  dispatch(
                                    toogleSubTask(
                                      todo.id,
                                      task.id,
                                      subtask.id,
                                      e.target.checked
                                    )
                                  )
                                }
                                checked={subtask.completed}
                              />
                              <p>{subtask.title}</p>
                            </div>

                            <span>
                              <img
                                src={delete_tarefa}
                                alt="Delete icon"
                                onClick={() =>
                                  dispatch(
                                    deleteSubTask(todo.id, task.id, subtask.id)
                                  )
                                }
                              />
                            </span>
                          </li>
                        ))}
                        <form
                          onSubmit={(e) =>
                            addSubTask_(
                              e,
                              subTask[task.title],
                              todo.id,
                              task.id,
                              task.title
                            )
                          }
                        >
                          <div
                            className="input-group"
                            id="subtarefa-input-group"
                          >
                            <input
                              name={task.title}
                              value={subTask[task.title]}
                              onChange={(e) => handleSubInputChange(e)}
                              type="text"
                              placeholder="Adicionar subtarefa"
                              required
                            />
                            <label htmlFor={task.title}>
                              <img
                                id={task.id}
                                src={new_item}
                                alt="new task icon"
                              />
                            </label>
                            <button
                              id={task.title}
                              style={{ display: "none" }}
                              type="submit"
                            ></button>
                          </div>
                        </form>
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
