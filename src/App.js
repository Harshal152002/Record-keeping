import Header from './Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState,createContext} from 'react';
import Field from './Field'
import Data from './Data'

const harshal=createContext();
function App () {
  const [form, setForm] = useState ({});
  const [data, setData] = useState ([]);
  const invoke = () => {
    setData ([...data, form]);
    setForm({form})
  };
  
 
  return (
    <div className="app">
    <harshal.Provider value={{data,setData}}>
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField 
            id="outlined-basic"
            label="name"
            variant="outlined"
            onChange={(e) => {
              setForm({...form,name:e.target.value})
            }}
          />
          <TextField 
            id="outlined-basic"
            label="email"
            variant="outlined"
            onChange={e => {
              setForm({...form,email:e.target.value});
            }}
          />
          <Button onClick={invoke}  variant="contained" color="success">
            ADD
          </Button>
        </Stack>
      </div>
      
      <div className="data">
        <Data/>
        {data.map ((element, index) => {
          return (
           <Field key={index} name={element.name} email={element.email} index={index}/>
          );
        })}
      </div>
      </harshal.Provider>
    </div>
  );
}

export default App;
export {harshal}