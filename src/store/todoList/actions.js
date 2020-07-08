const addTodo = (todoName, tasks) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Math.floor(Math.random() * 10),
      list: todoName,
      task: tasks ? tasks : [],
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

const toggleTask = (todoId, taskId, checked) => {
  return {
    type: "TOGGLE_TASK",
    payload: {
      todoId,
      taskId,
      checked,
    },
  }
}
const toggleSubTask = (todoId, taskId, subtaskId, checked) => {
  return {
    type: "TOGGLE_SUBTASK",
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
  toggleTask,
  toggleSubTask,
}
