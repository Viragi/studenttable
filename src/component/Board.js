import React from 'react';
import {connect} from 'react-redux';

class Board extends React.Component{
    render(){

        return(
            <div>
                Hello
            </div>

        )
    }

}
function mapStateToProps(state){
    return{
        data : state
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Board);