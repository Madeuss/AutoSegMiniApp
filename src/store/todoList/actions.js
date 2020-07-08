const addTodo = (todoName, id) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      todo: {
        id: Math.floor(Math.random() * 10),
        list: todoName,
        task: [],
      },
    },
  }
}

const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  }
}

const addTask = (task, id) => {
  return {
    type: "ADD_TASK",
    payload: {
      id,
      task: {
        id: Math.floor(Math.random() * 100),
        title: task,
        completed: false,
        subtask: [],
      },
    },
  }
}
const deleteTask = (todoId, taskId) => {
  return {
    type: "DELETE_TASK",
    payload: {
      todoId,
      taskId,
    },
  }
}

const addSubTask = (subtask, todoId, taskId) => {
  return {
    type: "ADD_SUBTASK",
    payload: {
      todoId,
      taskId,
      subtask: {
        id: Math.floor(Math.random() * 1000),
        title: subtask,
        completed: false,
      },
    },
  }
}

const deleteSubTask = (todoId, taskId, subTaskId) => {
  return {
    type: "DELETE_SUBTASK",
    payload: {
      todoId,
      taskId,
      subTaskId,
    },
  }
}

const toogleTask = (todoId, taskId, checked) => {
  return {
    type: "TOOGLE_TASK",
    payload: {
      todoId,
      taskId,
      checked,
    },
  }
}
const toogleSubTask = (todoId, taskId, subtaskId, checked) => {
  return {
    type: "TOOGLE_SUBTASK",
    payload: {
      todoId,
      taskId,
      subtaskId,
      checked,
    },
  }
}

export {
  addTodo,
  deleteTodo,
  addTask,
  deleteTask,
  addSubTask,
  deleteSubTask,
  toogleTask,
  toogleSubTask,
}
