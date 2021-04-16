import React, { Component } from 'react';

import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
import {spacing} from "@material-ui/core";
import ApiService from "../../service/ApiService";
// import axios from 'axios'



class DeviceProfile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            devices_list:[]
        }
    }
 componentDidMount() {
    this.loadAllDevices();
}
loadAllDevices = () => {
    ApiService.fetchUsers()
// componentDidMount() {
// axios.get('http://localhost:8080/api/device')
    .then((res)=> {
      console.log(res);
      this.setState({devices_list : res.data})
    })
}
render(){
    return(
        <Grid container spacing={3} >
            <Grid item xs={4} sm={2}>
                {this.state. devices_list.map(devices =>(
                        <Card key={devices.id} style={{width:"500px"}}  >
                            {/* // <CardActionArea href={`shopprofileviwe/${shop.shopId}`}> */}
                                <Grid container  spacingttop={6} >
                                    <Grid item xs={8} sm={8} >
                                          <CardHeader  
                                             avatar={<Avatar src={devices.avatarUrl} />}
                                    //           subheader={ devices.price}
                                                     />
                                                      <CardContent  >
                                                     <Typography variant="h5" component="h2">
                                                       {devices.title}
                                                         </Typography>
                                                          </CardContent>
                                                           <CardMedia>
                                                               <img src= {devices.imageUrl}  style={{ height: "350px" }}/>
                                                                </CardMedia>
                                                                </Grid>
                                                                <Grid item xs={5} >
                                                                <CardContent>
                                                                <Typography variant="h5" component="h2">
                                                                  {devices.price}
                                                                 </Typography>
                                                           <CardContent>
                                                  <Typography variant="bottom" color="textSecondary" component="p">
                                                    {devices.description}
                                            </Typography> 
                                         </CardContent>
                                                
                                    </CardContent>
                                </Grid>        
                             </Grid>                                   
                             {/* </CardActionArea>    */}
                        </Card>
                        ))
                    }
                </Grid>
            </Grid>
        )
    }
}
export default DeviceProfile;
