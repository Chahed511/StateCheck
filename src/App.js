import React from 'react'
import { Button } from 'react-bootstrap'
import './App.css';
import Profile from './components/Profile';
import LifeCycle from "./components/LifeCycle";
import NavBar from "./components/navbar"

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      show: false,


    }


  };

  /*state = {
  
          person: [
                      { name: 'Chahed Nedra ', 
                      bio : 'a full stack ',
                      proffession : '',
                      age : 28 ,
                    img : url='img '},
                    
                  ],*/






  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (

      <div >
       
       <NavBar />
        
       <div className="profil" >
        <Button variant="light"
          onClick={this.handleShow}
          className="toggle">My Profile</Button>
        <div>
          {this.state.show &&

            <Profile />
          }
        </div>
        <LifeCycle />

      </div>
      </div>
    );
  }

}
export default App;
