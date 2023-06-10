import {FilterValuesType, TodolistType} from "../features/Todolist/todolist.type";

export type ChangeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

type ActionsType = ChangeTodolistFilterACType

const initialState: TodolistType = {filter: "all"}

export const todolistsReducer = (state: TodolistType = initialState, action: ActionsType): TodolistType => {
    switch (action.type) {
        case 'CHANGE-TODOLIST-FILTER': {
            return {...state, filter: action.filter}
        }
        default:
            return state;
    }
}

export const changeTodolistFilterAC = (filter: FilterValuesType) => ({type: 'CHANGE-TODOLIST-FILTER', filter} as const
)

