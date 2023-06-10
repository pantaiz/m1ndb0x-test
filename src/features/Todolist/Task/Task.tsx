import {Checkbox, Paper} from "@mui/material";
import {EditableSpan} from "../../../component/EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import React, {ChangeEvent, memo} from "react";
import {TaskType} from "../todolist.type";

export type TaskPropsType = {
    task: TaskType
    removeTask: (id: string) => void,
    changeStatus: (id: string, newIsDoneValue: boolean) => void
    changeTaskTitle: (id: string, newValue: string) => void
}
export const Task: React.FC<TaskPropsType> = memo((
    {
        task,
        removeTask,
        changeStatus,
        changeTaskTitle
    }) => {
    const onClickHandler = () => removeTask(task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeStatus(task.id, newIsDoneValue);
    }
    const onTitleChangeHandler = (newValue: string) => {
        changeTaskTitle(task.id, newValue);
    }

    return <Paper variant="outlined" elevation={3} sx={{my: {xs: 1, md: 1},}}>
        <div key={task.id} style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        }}>

            <Checkbox
                checked={task.isDone}
                color="success"
                onChange={onChangeHandler}
            />

            <EditableSpan isDone={task.isDone} value={task.title} onChange={onTitleChangeHandler}/>

            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>

        </div>
    </Paper>
})