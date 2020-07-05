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
        id: 2,
        title: task,
        completed: false,
        subtask: [],
      },
    },
  }
}
// id: Math.floor(Math.random() * 1000)
export { deleteTodo, addTask }
