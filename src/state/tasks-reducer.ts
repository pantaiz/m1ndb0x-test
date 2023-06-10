import {TasksStateType} from "../features/Todolist/todolist.type";
import {v1} from "uuid";



const initialState: TasksStateType = [
    {id: v1(), title: "MUI", isDone: false},
    {id: v1(), title: "Оптимизация(useCallback,memo)", isDone: false},
    {id: v1(), title: "Тесты", isDone: false},
    {id: v1(), title: "Обработка пустого ввода", isDone: false},
    {id: v1(), title: "При дабл клике можно менять таску", isDone: false},
    {id: v1(), title: "При дабл клике можно менять таску", isDone: false},
]
export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(t => t.id !== action.taskId);
        }
        case 'ADD-TASK': {
            return [{id: v1(), title: action.newTitle, isDone: false}, ...state]
        }
        case'CHANGE-TASK-TITLE': {
            return state.map(task => task.id === action.id ? {...task, title: action.newTitle} : task)
        }
        case'CHANGE-TASK-STATUS': {
            return state.map(task => task.id === action.id ? {...task, isDone: action.isDone} : task)
        }
        default:
            return state;
    }
}
//Types
type ActionsType = RemoveTaskACType | AddTaskACType | ChangeTaskStatusACType | ChangeTaskTitleACType

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type AddTaskACType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>


//actions
export const removeTaskAC = (taskId: string) => ({type: 'REMOVE-TASK', taskId} as const)
export const addTaskAC = (newTitle: string) => ({type: 'ADD-TASK', newTitle} as const)
export const changeTaskTitleAC = (id: string, newTitle: string) => ({type: 'CHANGE-TASK-TITLE', id, newTitle} as const)
export const changeTaskStatusAC = (id: string, isDone: boolean) => ({type: 'CHANGE-TASK-STATUS', id, isDone} as const)


