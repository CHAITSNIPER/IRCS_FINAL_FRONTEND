import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import About from './Components/About';
import Donate from './Components/Donate.js';
import Home from './Components/Home';
import { Projects } from './Components/Projects.js';
import Action_Against_Hunger from './Components/Projects/Action_Against_Hunger.js';
import DrinkingWaterScheme from './Components/Projects/DrinkingWaterScheme.js';
import KashFlood from './Components/Projects/KashFlood.js';
import Rural_Dev from './Components/Projects/Rural_Dev.js';
import { UserProvider } from './Components/context/UserContext.js';
import AddProjects from './Components/hiddenAdd/AddProjects.js';
import AddorDelete from './Components/hiddenAdd/AddorDelete.js';
import DeleteItems from './Components/hiddenAdd/DeleteItems.js';
import Login from './Components/hiddenAdd/Login.js';
import LookAround from './TaskBar/LookAround.js';
import './all.css';
import ProjectDeets from './projectFolder/ProjectDeets.js';

const projects = [<KashFlood/>,<DrinkingWaterScheme/>,<Rural_Dev/>,<Action_Against_Hunger/>];


function Proj(){
    const { index } = useParams();
    const projectIndex = parseInt(index,10);

    return projects[projectIndex];
}
function App() {
  return (
   <div className="Page">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap" rel="stylesheet"/>
    <UserProvider>
    <Router>
    <LookAround />
      <Routes className="pages">
      
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/aboutIRCS' element= {<About/>}/>
        <Route path = '/donateIRCS' element= {<Donate/>}/>
        <Route path = '/Pathtoprojs' element={<AddProjects/>}/>
        <Route path = "/projects/:_id" element={<ProjectDeets />} />
        <Route path = "/deleteStuff" element ={<DeleteItems/>}/>
        <Route path = "/login" element = {<Login/>} />
        <Route path = '/afterLogin' element = {<AddorDelete/>}/>
        <Route path = '/ourProjects' element = {<Projects/>}/>
        <Route path = '/ourProjects/:index' element = {<Proj/>}/>
      </Routes>
    </Router>
    </UserProvider>
   </div>
  );
}

export default App;
