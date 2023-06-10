import {Container, Grid, Paper, Typography} from '@mui/material';
import React from 'react';

import {Todolist} from '../features/Todolist/Todolist';
/*2e7c32*/

function App() {
    return (
        <>

        <Grid
            container
            wrap={"wrap"}
            direction={"column"}
            alignItems={"center"}
            sx={{ minHeight: '100vh',backgroundColor:"#f3f3f3" }}
        >
            <Typography component="h1" variant="h4" color="darkgrey" gutterBottom>Тестовое задание Frontend intern в <a target={'_blank'}  href={'https://mindbox.ru/'} color={'#2e7c32'}> Mindbox</a> </Typography>
            <Paper variant="outlined" elevation={3} sx={{minWidth:'400px', my: { xs: 6, md: 6 }, p: { xs: 2, md: 3 } }}>

                <Typography component="h2" variant="h5" color="#2e7c32" gutterBottom>
                Todolist
                </Typography>

                <Todolist/>
                </Paper>
            </Grid>
        </>
    );
}

export default App;
