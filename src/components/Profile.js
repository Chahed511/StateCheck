import React from 'react'
import { Button, Form } from 'react-bootstrap'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
        name: 'Chahed Nedra ', 
        bio : 'a full stack eveloper ',
        profession : 'developer ',
        age : 28 ,
      img :"https://image.flaticon.com/icons/png/128/145/145850.png",
      
    
    };
    
  }


  render() {
    return (       
      <div >
             <img className="photo" src={this.state.img} alt="avatar"/>
       <h1> Hi ! Im {this.state.name} </h1>

         <p> im {this.state.age}</p>
         <p> im {this.state.bio}</p>
          <p> my profession is {this.state.profession}</p>
     
      </div>
    );
  }
 
}

export default Profile
