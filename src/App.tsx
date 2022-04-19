import { useState } from 'react'
import * as C from './AppStyled'
import './App.css'
import {Item} from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'




function App() {
 const [list, setList] = useState<Item []>([
  //  {id:1,name:'estudar',done:false },
  //  {id:2,name:'arrumar a casa',done:true }
 ])

 const handleAddTask = (taskName:string)=>{
  let newList = [...list]
  newList.push({
    id: list.length +1,
    name:taskName,
    done:false
  })
  setList(newList)
 }
  
  return (
  <C.Container>
    <C.Area>
    <C.Header >Lista de Tarefas</C.Header>

   <AddArea onEnter={handleAddTask} />

    {list.map((item,index)=>{
      return <ListItem key={index} item={item} />
    })}
    </C.Area>
  </C.Container>
    )
}
const style = {
  color:'red',
  backgroundColor:'black'
}
export default App
