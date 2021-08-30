import styled from 'styled-components'

function GridCard()
{
  return(
    <ListStyle>
      <p>Sample text</p>
      <p>Sample text</p>
    </ListStyle>
  )
}

const ListStyle = styled.div`
*{
  width:20%;
  height:16%;
  background-color:lightgrey;
}

`

export default GridCard
