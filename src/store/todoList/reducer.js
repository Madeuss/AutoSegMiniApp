const INITIAL_STATE = [
  {
    id: "1",
    list: "List 1",
    task: [
      {
        id: "1",
        title: "task 1",
        completed: true,
        subtask: [{ id: "1", title: "Subtask 1", completed: false }],
      },
    ],
  },
  {
    id: "2",
    list: "List 2",
    task: [
      {
        id: "2",
        title: "task 2",
        completed: false,
        subtask: [{ id: "2", title: "Subtask 2", completed: false }],
      },
    ],
  },
  { id: "3", list: "List 3", task: [] },
]

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]
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
    case "DELETE_TASK":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            task: todo.task.filter(
              (task_) => task_.id !== action.payload.taskId
            ),
          }
        }
        return todo
      })
    case "ADD_SUBTASK":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            task: todo.task.map((task_) => {
              if (task_.id === action.payload.taskId) {
                return {
                  ...task_,
                  subtask: [...task_.subtask, action.payload.subtask],
                  completed: false,
                }
              }
              return task_
            }),
          }
        }
        return todo
      })
    case "DELETE_SUBTASK":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            task: todo.task.map((task_) => {
              if (task_.id === action.payload.taskId) {
                return {
                  ...task_,
                  subtask: task_.subtask.filter(
                    (subtask_) => subtask_.id !== action.payload.subTaskId
                  ),
                }
              }
              return task_
            }),
          }
        }
        return todo
      })
    case "TOOGLE_TASK":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            task: todo.task.map((task_) => {
              if (task_.id === action.payload.taskId) {
                return {
                  ...task_,
                  subtask: task_.subtask.map((subtask_) => {
                    return { ...subtask_, completed: action.payload.checked }
                  }),
                  completed: action.payload.checked,
                }
              }
              return task_
            }),
          }
        }
        return todo
      })

    case "TOOGLE_SUBTASK":
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            task: todo.task.map((task_) => {
              if (task_.id === action.payload.taskId) {
                return {
                  ...task_,
                  subtask: task_.subtask.map((subtask_) => {
                    if (subtask_.id === action.payload.subtaskId) {
                      return {
                        ...subtask_,
                        completed: action.payload.checked,
                      }
                    }
                    return subtask_
                  }),
                  completed:
                    action.payload.checked === true
                      ? task_.subtask.filter(
                          (subtask_) => subtask_.completed === true
                        ).length +
                          1 ===
                        task_.subtask.length
                        ? true
                        : false
                      : false,
                }
              }
              return task_
            }),
          }
        }
        return todo
      })
    default:
      return state
  }
}
export default todoReducer
