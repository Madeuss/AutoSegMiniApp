const INITIAL_STATE = [
  {
    id: "1",
    list: "list 1",
    task: [
      {
        id: "1",
        title: "task 1",
        completed: true,
        subtask: [{ id: "1", title: "Subtask 1", completed: true }],
      },
    ],
  },
  {
    id: "2",
    list: "list 2",
    task: [
      {
        id: "2",
        title: "task 2",
        completed: false,
        subtask: [{ id: "2", title: "Subtask 2", completed: false }],
      },
    ],
  },
  { id: "3", list: "list 3", task: [] },
]

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload)
    case "ADD_TASK":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            task: [...todo.task, action.payload.task],
          }
        }
        return todo
      })
    default:
      return state
  }
}
export default todoReducer
