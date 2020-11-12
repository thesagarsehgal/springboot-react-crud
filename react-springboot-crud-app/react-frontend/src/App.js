// import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeesComponent}></Route>
            <Route path="/employees" exact component={ListEmployeesComponent}></Route>
            {/* <Route path="/add-employee/:id" exact component={CreateEmployeeComponent}></Route> */}
            <Route path="/add-employee/:id" exact component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" exact component={ViewEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
