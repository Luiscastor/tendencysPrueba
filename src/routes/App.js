import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainForm from '../main/MainForm'
import Crear from '../crear/Crear'

function App() {
  return (
 <>
        <Router>
            <Switch>
                <Route exact path='/'>
                  <MainForm/> 
                </Route>
                <Route  path='/Crear'>
                  <Crear/> 
                </Route>
            </Switch>
        </Router>
 </>
  );
}

export default App;