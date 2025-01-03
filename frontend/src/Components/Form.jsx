import { useReducer } from "react"

const Reducer=(state, action)=>{
    switch(action.type){

        case "title":{
            return{count: action.payload}
        }
        case "description":{
            return{count: action.payload}
        }
        case "requirement":{
            return{count: action.payload}
        }
        default:{
            return{state}
        }
    }
}


export const Form = () => {
    const initialState={
        title:"",
        description:"",
        requirement:""
    }
    const [state, dispacth]=useReducer(Reducer,initialState)

  return (
    <div className="form-container" id="awardForm">
      <h3>Add/Edit Award</h3>
      <input 
        type="text" 
        id="awardTitle" 
        placeholder="Award Title" 
        value={state.title}
        onChange={(e)=>dispacth({type:'title', payload:Number(e.target.value)})}
      />
      <input 
        type="text" 
        id="awardDescription" 
        placeholder="Award Description" 
        value={state.description}
        onChange={(e)=>dispacth({type:'description', payload:Number(e.target.value)})}
      />
      <input 
        type="number" 
        id="awardRequirement" 
        placeholder="Requirements (e.g., 10)" 
        value={state.requirement}
        onChange={(e)=>dispacth({type:'requirement', payload:Number(e.target.value)})}
      />
      <button>Submit</button>
      <button class="clear-button">Clear</button>
    </div>
  )
}
