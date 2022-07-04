
import './App.css';
import Card from './components/Card';
import axios from 'axios';
import {useState, useEffect} from 'react';

const url = 'https://randomuser.me/api/';

function App() {
  const [loading, setLoading] = useState(true)
  const [user,setUser] = useState([]);

  const users = async() => {
  try {
      const {data} = await axios.get(url);
      setUser(data.results[0]);
      setLoading(false);
    
    
  } catch (error) {
    alert(error);
  }
}

  useEffect(() => {
    users();

  }, [])

  if(loading){
    return <h2>loading</h2>
  }
  

  return (
    <div className='appcont'>
      
      <Card user = {user}/>
      <button className='btn' onClick={() => users()} >Random User</button>

    </div>
  );
}

export default App;
