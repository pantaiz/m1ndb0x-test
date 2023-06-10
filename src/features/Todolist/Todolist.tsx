import React, {memo, useCallback, useEffect} from 'react';
import {AddItemForm} from './AddItemForm/AddItemForm';
import {Button, ButtonGroup} from "@mui/material";
import {FilterValuesType} from "./todolist.type";
import {Task} from "./Task/Task";
import {useAppSelector} from "../../state/store";
import {useDispatch} from "react-redux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../state/tasks-reducer";
import {changeTodolistFilterAC} from "../../state/todolists-reducer";


export const Todolist = memo(() => {
        const dispatch = useDispatch()
        const todolist = useAppSelector(state => state.todolists)
        const tasks = useAppSelector(state => state.tasks)
        //добавляем таску
        const addTask = useCallback((title: string) => {
            dispatch(addTaskAC(title))
        }, []);
        //удаляем таску
        const removeTask = useCallback((id: string) => {
            dispatch(removeTaskAC(id))
        }, []);
        //меняем статус таски(выполнена/не выполнена)
        const changeStatus = useCallback((id: string, isDone: boolean) => {
            dispatch(changeTaskStatusAC(id, isDone))
        }, []);
        //меняем текст в таске
        const changeTaskTitle = useCallback((id: string, newTitle: string) => {
            dispatch(changeTaskTitleAC(id, newTitle))
        }, []);
        //изменяем фильтр тудулиста
        const changeFilter = useCallback((value: FilterValuesType) => {
            dispatch(changeTodolistFilterAC(value))
        }, [todolist])


        const onAllClickHandler = useCallback(() => changeFilter("all"), [])
        const onActiveClickHandler = useCallback(() => changeFilter("active"), [])
        const onCompletedClickHandler = useCallback(() => changeFilter("completed"), [])
        //сортировка тасок
        useEffect(() => {

        })
        let tasksForTodolist = tasks;
        if (todolist.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (todolist.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }

        return <div>

            <AddItemForm addItem={addTask}/>
            {
                tasksForTodolist.map(task => <Task
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                        changeTaskTitle={changeTaskTitle}
                        changeStatus={changeStatus}
                    />
                )}
            <div>
                <ButtonGroup>
                    <Button variant={todolist.filter === 'all' ? 'contained' : 'outlined'}
                            onClick={onAllClickHandler}
                            color={'success'}
                    >All
                    </Button>
                    <Button variant={todolist.filter === 'active' ? 'contained' : 'outlined'}
                            onClick={onActiveClickHandler}
                            color={'success'}>Active
                    </Button>
                    <Button variant={todolist.filter === 'completed' ? 'contained' : 'outlined'}
                            onClick={onCompletedClickHandler}
                            color={'success'}>Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    }
)

