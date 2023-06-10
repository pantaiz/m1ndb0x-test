import TextField from '@mui/material/TextField/TextField';
import React, {ChangeEvent, memo, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    isDone: boolean
    editMode?: boolean
}

export const EditableSpan = memo((props: EditableSpanPropsType) => {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);
    let [error, setError] = useState<string | null>(null)
    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        if (title.trim() !== "") {
            props.onChange(title);
            setTitle("");
            setEditMode(false);
            setError('')
        } else {
            setError("Cannot be changed to an empty value");
        }


    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if (e.currentTarget.value.trim() !== "") {
            setError('')
        }
    }

    return (<div style={{
        display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', width: '100%'
    }}>
        {editMode
            ? <> <TextField variant="standard"
                            error={!!error}
                            helperText={error}
                            size={"small"}
                            value={title}
                            onChange={changeTitle}
                            autoFocus
                            onBlur={activateViewMode}
            />
                <IconButton onClick={activateViewMode}>
                    <CheckIcon/>
                </IconButton></>
            : (<><Typography
                    variant="subtitle2"
                    style={props.isDone ? {textDecoration: 'line-through', color: "gray"} : {textDecoration: 'none'}}
                    component={"span"} onDoubleClick={activateEditMode}>{props.value}
                </Typography>
                    <IconButton onClick={activateEditMode}>
                        <EditIcon/>
                    </IconButton></>
            )}
    </div>)
})
