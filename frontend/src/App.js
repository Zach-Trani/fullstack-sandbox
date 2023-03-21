import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
const [data, setData] = useState([]);

useEffect(() => {
  const callBackend = async () => {
    const req = await axios.get('/express_backend');
    setData(req.data.express);
  };
  callBackend();

},[])  

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
