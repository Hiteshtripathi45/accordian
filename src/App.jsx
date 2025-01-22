import { useState } from 'react'
import data from './data.js'
function App() {

const [selected ,unselected] = useState(null)
const [sselected ,uuselected] = useState([])
const [bbuton ,changebutton] = useState('single')
function buttonchange(){
  changebutton((prevbbuton)=>prevbbuton==='single'?'multiple':'single')
  
}
function Change(getid){
  console.log(getid)
  getid===selected?unselected(null):unselected(getid)
  
}

function multichange(getid){
  if(sselected.includes(getid)){
    uuselected(sselected.filter(ids=>ids!==getid))

  }
  else{
    uuselected([...sselected,getid])
  }

}

  
 const box= <div className='outermost'>
  <h1>ACCORDIAN</h1>
  <button onClick={buttonchange}>{bbuton}</button>
    {data.map((datas) => (<div className='inner'><div className='question'>{datas.question}</div> <div onClick={()=>bbuton=='single'?Change(datas.id):multichange(datas.id)} className='plus'>+</div>
    {bbuton==='single'?(selected===datas.id?(<div className='answer'>{datas.answer}</div>):null):(sselected.includes(datas.id) && <div className='answer'>{datas.answer}</div>)}
     </div>
    ))}
  </div>

  return box

}

export default App
