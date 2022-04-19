import * as C from './styled'
import {Item} from '../../types/item'
import { useState } from 'react'
type Props = {
    item: Item,
    changeState: (id: number, done: boolean) => void
}
export const ListItem = ({item, changeState}:Props)=>{
    

    return <C.Container done={item.done}>
        <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => changeState(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
        </C.Container>
}
