import JobList from './Components/JobList/JobList.js';
import {Route, Routes} from 'react-router-dom';
import JobDetailed from './Components/JobDetailed/JobDetailed.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<JobList />}/>
        <Route exact path='/detailed/:id'element={<JobDetailed />}/>
      </Routes>
    </div>
  );
}

export default App;
