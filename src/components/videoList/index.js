import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import VideoCard from '../videoCard';

function VideoList() {
    return (
        <Grid container>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Grid>
    )
}

const Item = () => (
    <Grid item xs={12} md={3}>
        <Paper>
            <VideoCard />
        </Paper>
    </Grid>
);

export default VideoList;
