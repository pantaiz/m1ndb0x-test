export type TodolistType = {
    filter: FilterValuesType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = Array<TaskType>


export type FilterValuesType = "all" | "active" | "completed";
