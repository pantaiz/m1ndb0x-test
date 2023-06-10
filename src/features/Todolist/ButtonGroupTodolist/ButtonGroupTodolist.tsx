import React, {memo} from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {FilterValuesType} from "../todolist.type";

type ButtonGroupTodolistPropsType = {
    filter: FilterValuesType,
    onActiveClickFilter: (value: FilterValuesType) => void
}
export const ButtonGroupTodolist = memo((
    {
        filter,
        onActiveClickFilter
    }:
        ButtonGroupTodolistPropsType) => {
    return (<div style={{display: 'flex', justifyContent: 'center'}}>
            <ButtonGroup>
                <Button variant={filter === 'all' ? 'contained' : 'outlined'}
                        onClick={() => {
                            onActiveClickFilter('all')
                        }}
                        color={'success'}
                >All
                </Button>
                <Button variant={filter === 'active' ? 'contained' : 'outlined'}
                        onClick={() => {
                            onActiveClickFilter('active')
                        }}
                        color={'success'}>Active
                </Button>
                <Button variant={filter === 'completed' ? 'contained' : 'outlined'}
                        onClick={() => {
                            onActiveClickFilter('completed')
                        }}
                        color={'success'}>Completed
                </Button>
            </ButtonGroup>
        </div>
    )
})
