let initialState = {
    student_details:[{name:"Shreya",age:31,dob:"21-aug-1989"},
                     {name:"ayushi",age:25,dob:"13-july-1994"},
                     {name:"saloni",age:27,dob:"31-Aug-1990"},
                     {name:"Malya",age:32,dob:"17-dec-1987"},
                     {name:"Viragi",age:26,dob:"3-Nov-1993"}],
    isAsc :true
};

function rootreducer(state = initialState, action){
    if(action.type==="sort"){
        let reqCol = action.reqCol;
        let isAsc = state.isAsc;
        let data = [...state.student_details];
        if(reqCol ==="name"){
            data.sort((a,b)=>{
                return isAsc? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);     
            })
        }else if(reqCol ==="age"){
            data.sort((a,b)=>{
                return isAsc ? a.age-b.age : b.age-a.age;   
            })
        }else if(reqCol ==="dob"){
            data.sort((a,b)=>{
                return isAsc ? (new Date(a.dob) - new Date(b.dob)) : (new Date(b.dob) - new Date(a.dob));
            })
        }
        return {...state,student_details:data,isAsc:!state.isAsc };
    }else{
        return state;
    }
}

export default rootreducer;