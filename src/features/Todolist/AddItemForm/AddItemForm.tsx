import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import {Grid, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";



type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm=memo((props: AddItemFormPropsType)=>{

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <Grid
        container
        display={"flex"}
        alignItems={"center"}>
        <TextField variant="outlined"
                   color={"success"}
                   error={!!error}
                   value={title}
                   size={"small"}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="What needs to be done?"
                   helperText={error}
                   margin={"dense"}
                   sx={{minWidth:'90%'}}
        />
        <IconButton color="success" onClick={addItem}>
            <AddBox />
        </IconButton>
    </Grid>
})
