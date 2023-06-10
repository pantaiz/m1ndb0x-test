import {FilterValuesType, TodolistType} from "../features/Todolist/todolist.type";
import {changeTodolistFilterAC, todolistsReducer} from "./todolists-reducer";

let startState: TodolistType;
beforeEach(() => {
    startState = {filter: "all"}
})
test('correct filter of todolist should be changed', () => {
    let newFilter: FilterValuesType = "completed";

    const action = changeTodolistFilterAC(newFilter);

    const endState = todolistsReducer(startState, action);

    expect(endState.filter).toBe("completed");

});

