import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import Header from "../../components/Header"
import { TaskInput } from "../../components/TaskInput"
import { Button } from "../../components/Button"

import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoList"

import "./styles.css"

import new_item from "../../assets/botao_adicionar.png"
import list_icon from "../../assets/icone_lista.png"
import edit_icon from "../../assets/icone_editar.png"
import delete_icon from "../../assets/icone_deletar_lista.png"
import delete_tarefa from "../../assets/icone_deletar_tarefa-subtarefa.png"

export default function NewList() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [tasksName, setTasksName] = useState("")
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState([])

  const addTodo_ = (e, titleTodo) => {
    e.preventDefault()

    dispatch(addTodo(titleTodo, tasks))
    setTasksName("")
    history.push("/profile")
  }

  const handleAddTask = () => {
    const currentTask = {
      id: Math.floor(Math.random() * 100),
      title: tasksName,
      completed: false,
      subtask: [],
    }

    setTasks([...tasks, currentTask])
    setTasksName("")
  }

  const handleDeleteTask = (taskId) => {
    const finalTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(finalTasks)
  }

  return (
    <>
      <Header id="newlist-header" />
      <div className="newlist-container">
        <section className="todo-section">
          <div id="new-list-div">
            <h1>Criar Lista</h1>
          </div>
        </section>

        <form
          className="newlist-form"
          onSubmit={(e) => addTodo_(e, todo, tasksName)}
        >
          <section className="form-inputs-section">
            <input
              type="text"
              placeholder="Digite o nome da lista"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value)
              }}
              required
            />
            <br />
            <TaskInput id="taskinput">
              <input
                type="text"
                placeholder="Adicionar tarefa"
                value={tasksName}
                onChange={(e) => setTasksName(e.target.value)}
              />
              <img
                src={new_item}
                alt="new task icon"
                onClick={() => handleAddTask()}
              />
            </TaskInput>
          </section>
          <section className="form-buttons-section">
            <Link to="/profile">
              <Button
                type="button"
                backgroundColor="#D3CE3D"
                fontColor="#574437"
              >
                Cancelar
              </Button>
            </Link>
            <Button
              backgroundColor="#EF7734"
              fontColor="#F9F4C2"
              marginLeft={20}
              type="submit"
            >
              Criar Lista
            </Button>
          </section>
        </form>

        {todo && (
          <ul className="todo-list new-todo-list">
            <li className="list-item">
              <div className="lista-div">
                <section id="list-title-sec">
                  <img src={list_icon} alt="List icon" id="list-icon" />
                  <p>{todo}</p>
                </section>
                <section id="list-btns-sec">
                  <span>
                    <img src={edit_icon} alt="Edit icon" id="edit-list-icon" />
                  </span>
                  <span>
                    <img
                      src={delete_icon}
                      alt="Delete icon"
                      onClick={() => setTodo("")}
                      id="delete-list-icon"
                    />
                  </span>
                </section>
              </div>
              {tasks.map((task) => (
                <div key={task.id} className="tarefa-list-section">
                  <div className="new-tarefa-item">
                    <div className="new-tarefa-name-div">
                      <input type="checkbox" name="tarefa" id="check-tarefa1" />
                      <p>{task.title}</p>
                    </div>
                    <span>
                      <img
                        src={delete_tarefa}
                        alt="Delete icon"
                        onClick={() => handleDeleteTask(task.id)}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        )}
      </div>
    </>
  )
}
