import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useContext} from 'react';
import {harshal} from './App'

function Field({name,email,index}) {
  const {data,setData} = useContext(harshal)
 
  const remove = (index) => {
     let arr = data;
     arr.splice(index, 1);
     setData([...arr]);
  };
  return (
     <div className="data_val">
          <h2>{name}</h2>
          <h2>{email}</h2>
          <Stack>
          <Button onClick={()=>remove(index)} variant='contained' color='success'>Remove</Button>
          </Stack>
        </div>
  )
}

export default Field
