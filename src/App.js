import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';

import { SearchBar, VideoList, VideoDetail } from "./components";

class App extends React.Component {
    render(){
        return(
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                  <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                  <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
    }
}

export default App;