import React, {memo, useCallback, useEffect} from 'react';
import {AddItemForm} from './AddItemForm/AddItemForm';
import {FilterValuesType} from "./todolist.type";
import {Task} from "./Task/Task";
import {useAppSelector} from "../../state/store";
import {useDispatch} from "react-redux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../state/tasks-reducer";
import {changeTodolistFilterAC} from "../../state/todolists-reducer";
import {ButtonGroupTodolist} from "./ButtonGroupTodolist/ButtonGroupTodolist";
import {Contact} from "./Contact/Contact";


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

        const onActiveClickFilterHandler = useCallback((value: FilterValuesType) => changeFilter(value), [])

        //сортировка тасок
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
            <ButtonGroupTodolist onActiveClickFilter={onActiveClickFilterHandler} filter={todolist.filter}/>
            <Contact/>
        </div>
    }
)

