import React,{useState} from 'react'

function List(props) {

// const [isDone, setIsDone] = useState(false);

// function handleClick(){
//     setIsDone((preValue)=>{
//         return !preValue
//     })
// }
    return (
        <li onClick={()=>{props.deleteItem(props.id)}} >{props.value}</li>
    )
}

export default List
//style={{ textDecoration:isDone?" line-through":"none"}}