import React from 'react';

export default function Cell(props){
    return(
        <div className="cell">
            <div className=" col name"> <div>{props.name}</div></div>
            <div className="col age">{props.age}</div>
            <div className="col dob">{props.dob}</div>
        </div>    
    )

}