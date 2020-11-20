import React, {Fragment} from 'react';
import '../Styles/deets.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from 'react-star-ratings';


class Details extends React.Component{
    constructor() {
        super();
        this.state = {
           restaurant : {},
           cuisine:[]
        }
    }
    
    componentDidMount() {
        const restaurantid = this.props.location.pathname.split('/')[2];
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/getResbyId/' + restaurantid,
            headers: {'Content-Type': 'application/json'}
            }).then(res =>this.setState({ 
                restaurant: res.data.restaurant,
                cuisine: res.data.restaurant.cuisine

                
            }))
            .catch(err => console.log(err))
    }
    
    
    render(){
        
        const {restaurant, cuisine} = this.state;
        

        return(
           <body id="bg">
                <div id="reservationModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-lg" role="content">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">ORDER NOW</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div className="col-md-12" >
                                    { this.state.cuisine.map(Data=>( 
                                            <div className="row justify-content-center" id="dish"> 
                                                <div className="col-md-5">
                                                    <h3>{Data.name}&nbsp;&nbsp;&nbsp;
                                                    <h5><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-nut-fill" fill={Data.col} xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M4.58 1a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196z"/>
                                                        </svg></h5>
                                                    </h3>
                                                    <h4>&#8377; {Data.price}</h4>
                                                    <h6 id="desc">{ Data.description}</h6>
                                                    <h6><b>Serves</b>: {Data.serves}</h6>
                                                </div>
                                                <div className="col-md-3">
                                                    <img src={Data.thumb} style={{'height': '200px','width':'220px',display: 'flex',
                                                    margin:'auto',padding: '20px','border-radius':'25%',overflow: 'hidden'}}/>
                                                </div>
                                            </div>    
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
           
            <div className="container-fluid" id="deets">
                
                <div className="row" id="slider">
                    <div className="col-md-4 "><br/>
                        <img src={restaurant.thumb} id="thumb" />
                    </div>
                    <div className="col-md-6" id="rest">
                        
                        <h1 id="heading" ><b>{restaurant.name}</b></h1><br/>
                        <h5 >Address: {restaurant.address}<br/>
                        {restaurant.locality}, Contact: {restaurant.contact_no}</h5><br/><br/>
                        <h5>Rating: &nbsp;{restaurant.aggregate_rating}&nbsp;<StarRatings
                            rating={restaurant.aggregate_rating}
                            starDimension="30px"
                            starSpacing="5px"
                            starRatedColor="gold"
                        />&nbsp;&nbsp;|&nbsp;&nbsp;<i>{restaurant.rating_text}</i></h5><br/>
                        
                    <br/>
                    </div>
                    <div className="col-md-2">
                        <a><img src={require('../image/order.svg')} id="reserveBtn"/><h4>Order Now</h4></a>

                    </div>
                    <br/>
                </div> <br/>
                <div className="row"><br/>
                    <div className="col-md-3">
                        <img src={require("../image/truck.svg")} id="graphics" />
                    </div>
                    <div className="col-md-6" >
                        { this.state.cuisine.map(Data=>(
                                
                                <div className="row justify-content-center" id="dish">
                                    
                                    <div className="col-md-5">
                                        <h3>{Data.name}&nbsp;&nbsp;&nbsp;
                                        <h5><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-nut-fill" fill={Data.col} xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4.58 1a1 1 0 0 0-.868.504l-3.429 6a1 1 0 0 0 0 .992l3.429 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.428-6a1 1 0 0 0 0-.992l-3.428-6A1 1 0 0 0 11.42 1H4.58zm5.018 9.696a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196z"/>
                                            </svg></h5>
                                        </h3>
                                        <h4>&#8377; {Data.price}</h4>
                                        <h6 id="desc">{ Data.description}</h6>
                                        <h6><b>Serves</b>: {Data.serves}</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={Data.thumb} style={{'height': '200px','width':'220px',display: 'flex',
                                         margin:'auto',padding: '20px','border-radius':'25%',overflow: 'hidden'}}/>
                                    </div>
                                </div>
                            
                        ))
                    }
                    </div>
                    <div className="col-md-3">
                        <img src={require("../image/cart.svg")} id="graphics" />
                    </div>
                </div><br/> 
                
            </div>
            </body>
            
        )
    }
}
export default Details;
