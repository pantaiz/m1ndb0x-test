import {TasksStateType} from "../features/Todolist/todolist.type";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasks-reducer";

let startState: TasksStateType = [];
beforeEach(() => {
    startState = [
        {id: "1", title: "CSS", isDone: false},
        {id: "2", title: "JS", isDone: true},
        {id: "3", title: "React", isDone: false}
    ]
});
test('correct task should be deleted ', () => {
    const action = removeTaskAC("2");

    const endState = tasksReducer(startState, action)

    expect(endState.length).toBe(2);
    expect(endState.every(task => task.id != "2")).toBeTruthy();
});
test('correct task should be added to correct array', () => {
    const action = addTaskAC("newtask");

    const endState = tasksReducer(startState, action)

    expect(endState.length).toBe(4);
    expect(endState[0].id).toBeDefined();
    expect(endState[0].title).toBe("newtask");
    expect(endState[0].isDone).toBe(false);
});
test('status of specified task should be changed', () => {
    const action = changeTaskStatusAC("2", false);

    const endState = tasksReducer(startState, action)

    expect(endState[1].isDone).toBe(false);
});
test('title of specified task should be changed', () => {
    const action = changeTaskTitleAC("2", "yogurt",);

    const endState = tasksReducer(startState, action)

    expect(endState[1].title).toBe("yogurt");
    expect(endState[0].title).toBe("CSS");
    expect(endState[2].title).toBe("React");
});