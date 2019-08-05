let initialState = {
    student_details:[{name:"Shreya",age:31,dob:"21-aug-1989"},
                     {name:"ayushi",age:25,dob:"13-july-1994"},
                     {name:"saloni",age:27,dob:"31-Aug-1990"},
                     {name:"Malya",age:32,dob:"17-dec-1987"},
                     {name:"Viragi",age:26,dob:"3-Nov-1993"}],
    isAsec :true
};

function rootreducer(state = initialState, action){
    if(action.type=="sort"){
        let reqCol = action.reqCol;
        let isAsec = state.isAsec;
        let data = [...state.student_details];
        if(reqCol =="name"){
            data.sort((a,b)=>{
                return isAsec? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);     
            })
        }else if(reqCol =="age"){
            data.sort((a,b)=>{
                return isAsec ? a.age-b.age : b.age-a.age;   
            })
        }else if(reqCol =="dob"){
            data.sort((a,b)=>{
                return isAsec ? new Date(a.dob) - new Date(b.dob) : Date(b.dob) - new Date(a.dob);
            })
        }
        let newSortWay = !state.isAsec;
    return {...state,student_details:data,isAsec:newSortWay };
    }else{
        return state;
    }
}

export default rootreducer;