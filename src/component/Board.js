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
                 <div className="cell">
                     <div className="header col"> NAME</div>
                     <div className="header col">AGE</div>
                     <div className="header col">DOB</div>
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
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Board);