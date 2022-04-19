import { KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import * as C from './styled'
type addProps= {
    onEnter:(taskName:string)=>void
}
export const AddArea=({onEnter}:addProps)=>{
    const [inputText, setInputText] = useState('')
    const clearText = ()=>{
        setInputText('')
    }
    const handleKeyUp = (e:KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            clearText()
        }else if(e.code === 'Enter' && inputText == ''){
            alert('Preencha o Campo Para adicionar uma tarefa')

        }
    }
    const handleOnClick = ()=>{
        if(inputText!==''){
            onEnter(inputText)
             clearText()
             
            }else{

                alert('Preencha o Campo Para adicionar uma tarefa')
            }
    }
    return <C.Container >
        <div onClick={handleOnClick} className="image">+</div>
        <input type="text"
        placeholder='Adicionar Lista'
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container> 
}