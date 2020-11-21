import React from 'react';
import QuickSearch from './QuickSearch';
import {withRouter} from 'react-router-dom';

class QuickSearchItem extends React.Component{
    handleClick = (id) =>{
        const mealtype=id;
        const city = sessionStorage.getItem('city');
        const area= sessionStorage.getItem('area');
        this.props.history.push(`/filter/?mealtype=${mealtype}&area=${area}&city=${city}`);
    }
    render(){
        const {id,name,content,image} = this.props;
        return(
            <div className="col-sm-4 col-md-4 col-lg-4"  onClick={() => this.handleClick(id)}>
            <div className="filter">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                       <div> <img src={require("../" + image)}  className="img" alt=""/></div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="col">
                            <div className="row-sm-6 row-md-6 row-lg-6">
                                <h2 className="xyz">{name}</h2>
                            </div>
                            <div className="row-sm-6 row-md-6 row-lg-6">
                                <h4 className="bf1">{content}</h4>
                            </div>
                            
                        </div>
                      
                     </div>

                </div>
            </div>
            </div>
           
        )
    }
}
export default withRouter(QuickSearchItem);