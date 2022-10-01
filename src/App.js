import logo from './logo.svg';
import './App.css';
// import Layout from './utils/components/cusHeader';
import Header from './utils/components/cusHeader';
import SubHeader from './utils/components/subHeader';
import Data from './utils/Data'
import { useState } from 'react';



function App() {
  const [listData, setListData] = useState(Data);

  return (

    <div className='Layout'>
      <Header />
      <SubHeader />
      <div className='Body'>

      </div>

    </div>
  );
}

export default App;
