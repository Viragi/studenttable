let initialState = {
    student_details:[{name:"Shreya",age:31,dob:"21-aug-1989"},
                     {name:"ayushi",age:25,dob:"13-july-1994"},
                     {name:"saloni",age:27,dob:"31-Aug-1990"},
                     {name:"Malya",age:32,dob:"17-dec-1987"},
                     {name:"Viragi",age:26,dob:"3-Nov-1993"}]
};

function rootreducer(state = initialState, action){
    if(action.type=="sort"){
        return state;
    }else{
        return state;
    }
}

export default rootreducer;