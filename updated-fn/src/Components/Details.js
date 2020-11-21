import React from 'react';
import queryString from 'query-string';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../Styles/detail.css';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Details extends React.Component{
    constructor() {
        super();
        this.state = {
           restaurant : {}
        }
    }
    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search)
        const restaurantid =queryParams.restaurant;
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/getResbyId/' + restaurantid,
            headers: {'Content-Type': 'application/json'}
            }).then(res =>this.setState({ restaurant: res.data.restaurant}))
            .catch(err => console.log(err))
    }
    handleorders = () =>{
        if(sessionStorage.getItem('isloggedin')){
            //placeorder
        }
        else {
            alert("Please log in");
        }
    }
    render(){
        const {restaurant} = this.state;
        return(
            <div>
                <Carousel className="carosel">
                
                    {restaurant && restaurant.gallery && restaurant.gallery.map((item)=>{
                        return ( <div>
                            <img src={item.img}/>
                        </div>)
                    })}
                
            </Carousel>
                <img src={restaurant.thumb} className="pic"/>
                <h2 style={{'color':'#192f60','textAlign':'center'}}>{restaurant.name}</h2>   
                <button>Image Gallery</button>
                <div>
                <Tabs >
                        <TabList className="tab">
                        <Tab style={{'color': '#192f60','fontWeight':'bold'}}>Overview</Tab>
                        <Tab style={{'color': '#192f60','fontWeight':'bold'}}>Contacts</Tab>
                        <Tab style={{'color': '#192f60','fontWeight':'bold'}}>Contacts</Tab>
                        <hr className="hr1"/>
                        </TabList>
                    
                        <TabPanel className="tp">
                        <h2>About This Place</h2>
                        <h2>Cuisine</h2>
                         <h3>{restaurant && restaurant.cuisine_id && restaurant.cuisine_id.map((item)=>{
                        return <div>{item.name}</div>})}</h3>
                        
                        <h2>Cost For Two</h2>
                        <h3>Rupees {restaurant.min_price}</h3>
                        </TabPanel >
                        <TabPanel className="tp">
                        <div>
                        <h2>Address</h2>
                        <h3>{restaurant.address}</h3>
                        <h2>Contact No</h2>
                        <h3>{restaurant.contact_number}</h3>
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content</h2>
                        </TabPanel>
                    </Tabs>
                    
                </div>
            </div>
        )
    }
}
export default Details;