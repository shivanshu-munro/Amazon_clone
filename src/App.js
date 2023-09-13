import React ,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch ] = useStateValue();

   useEffect(() => {
       //wiil only run once when the app component loads...
       auth.onAuthStateChanged(authUser => {
        console.log('the user is >>>>' , authUser);

        if(authUser){
          //the user just logged in
          dispatch({
            type: 'SET_USER',
            user:authUser
          })
        }else{
          //the user is locked out
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
       })
   }, [])
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
