import {useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GridCard from './GridCard'

function Grid(){

  const [data,setData] =  useState({items:[]});
  useEffect(() => {
    const fetchData = async() =>{
      const results = await axios(
        ' https://admin.srkprojects.com/web/api/client/v1/projects/',
      );
      setData(results.data);
    };
    fetchData();
  },[])
  return (
    <GridStyle>
    {data.items.map((item) => (
       <div>item.slug</div>

     ))}
    </GridStyle>
  )
}

const GridStyle = styled.div`

`


export default Grid
