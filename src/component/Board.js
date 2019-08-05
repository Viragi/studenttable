import React from 'react';
import {connect} from 'react-redux';
import Cell from './Cell';

class Board extends React.Component{
    render(){
        console.log(this.props)
        let elem =this.props.student_details.map((item)=>{
            return(
                <div className="row">
                    <Cell name={item.name} age={item.age} dob ={item.dob}/>
                </div>
            )

        })

        return(
            <div className="container">
                <div className="col"> STUDENT INFO</div>
                 <div className="cell">
                     <div className="header col" onClick={()=>{this.props.handleClick("name")}}> NAME</div>
                     <div className="header col" onClick={()=>{this.props.handleClick("age")}}>AGE</div>
                     <div className="header col" onClick={()=>{this.props.handleClick("dob")}}>DOB</div>
                </div>
                
                {elem}
            </div>

        )
    }

}
function mapStateToProps(state){
    return{
        student_details : state.student_details
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleClick : (reqCol)=>{
            dispatch({
                type: "sort",
                reqCol: reqCol
            });
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Board);