import React, { useState } from 'react'
import{PiNotePencilBold} from 'react-icons/pi'
import{IoIosCreate} from 'react-icons/io'
import{AiFillDelete} from 'react-icons/ai'
import './App.css'

function App() {
  const [userInput,setUserInput]=useState()
  const [todoList,setTodoList]=useState([])
  function addTodo(){
if(!userInput){

}
else{
  setTodoList([...todoList,userInput])
  setUserInput('')
}
  }
  function deleteItem(index){
    const newList=todoList.filter((element,id)=>{
      return id!==index
    })
    setTodoList(newList)
  }
  return (
    <div className='todo'>
      <div className="header">
        <h1>Todo App</h1>
        <PiNotePencilBold size={35}/>
      </div>
      <div className="todocard">
        <input type="text" placeholder='Add your task'
        value={userInput} 
        onChange={(e)=>setUserInput(e.target.value)}
        />
        
        <IoIosCreate onClick={addTodo} size={25}/>
       { todoList.map((data,index)=>{
        return(
          <div className="tasks">
          <p>{data}</p>
          <AiFillDelete onClick={()=>deleteItem(index)} className='remove'/>
        </div>
        )
       })}
       {todoList.length>1 ?
       <button onClick={()=>setTodoList([])}> 
        Clear All Tasks <AiFillDelete className='removeAll'/>
      </button>:''}
      </div>
      
    </div>
  )
}

export default App
