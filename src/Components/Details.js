import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
class Details extends React.Component{
    constructor() {
        super();
        this.state = {
           restaurant : {}
        }
    }
    componentDidMount() {
        const restaurantid = this.props.location.pathname.split('/')[2];
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/getResbyId/' + restaurantid,
            headers: {'Content-Type': 'application/json'}
            }).then(res =>this.setState({ restaurant: res.data.restaurant}))
            .catch(err => console.log(err))
    }
    render(){
        const {restaurant} = this.state;
        return(
            <div>
                
               <Tabs>
                        <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Contacts</Tab>
                        </TabList>
                    
                        <TabPanel>
                        <div>
                        <img src={restaurant.thumb} style={{'height': '400px','width':'400px'}}/>
                            
                            <h2>Average Cost</h2>
                            <h3>{restaurant.name}</h3>
                        </div>  
                        </TabPanel>
                        <TabPanel>
                        <div>
                        <h2>Any content 2</h2>
                        
                        </div>
                        </TabPanel>
                    </Tabs>
                
            </div>
        )
    }
}
export default Details;