import React, { Component } from 'react';
import "./Content.css";
import Grid  from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import Main from '../Main/Main';
import Info from '../Info/Info';
import Suggestions from '../Suggestions/Suggestions';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <Main/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <Info />
                        <Suggestions />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}

export default Content;
