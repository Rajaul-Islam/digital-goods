import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';

import Header from "./Components/Shared/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ProcessOrder from "./Components/ProcessOrder/ProcessOrder";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import SignUp from "./Components/UserActivities/SignUp/SignUp";
import Login from "./Components/UserActivities/Login/Login";
import Details from "./Components/Shared/Header/Details/Details";
import PrivateRoute from "./Components/UserActivities/PrivateRoute/PrivateRoute";
import DashBoard from "./Components/DashBoard/DashBoard";
function App() {



  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/details'>
             <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
             <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/processorder/:id">
            <ProcessOrder></ProcessOrder>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>


    </div>

  );
}

export default App;
