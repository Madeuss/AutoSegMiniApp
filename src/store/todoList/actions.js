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

export { deleteTodo, addTask }
