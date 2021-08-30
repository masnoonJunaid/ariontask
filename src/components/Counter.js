import {useState} from 'react'
import styled from 'styled-components'

function Counter() {

  const [counter,setCount] = useState(1)


  return (
    <ContainerStyle className="App">
    <h1>Counter</h1>
      <div className="div-1">
        <div
        className="div-2" onCLick = {() =>setCount(counter-3)}>-</div>
          <p className="p-1">{counter}</p>
        <div className="div-2" onCLick = {() =>setCount(counter+3)} >+</div>

      </div>
    </ContainerStyle>
  );
}

const ContainerStyle = styled.div`
  .div-1{
    display:flex;
    width:60%;
    height:80vh;
    background-color:lightgrey;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    cursor:pointer;
  }
  .div-2{
    font-size:160px;
    padding:16%;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
  }

  .p-1{
    font-size:130px;
  }
`
export default Counter
