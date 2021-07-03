import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./Assets/Images/logo.jpg";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";


const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varient="h2" align="center"> Memories</Typography>
                <img src={logo} alt="memories" height="300" width="300" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;