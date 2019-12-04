import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
// import { ButtonList } from './components/Button-list/Button-list.component';
import './App.css';
import './Button.css';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters:[],
      searchField: '',
      monsterId : 0
      
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));

  }
  render(){
    const { monsters, searchField, monsterId } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) && monster.id > monsterId
    )
    // const filteredname = monsters.filter( monster =>monster.username(searchUsername))
      

    return (
      <div className="App">
         
   
         <SearchBox placehodler ='search' handleChange ={e=> this.setState({ searchField: e.target.value})} />

         <div className = "Button">
            <button className = "button1" onClick ={ e => this.setState({ monsterId: '1' })}  >Fair Price</button>          
            <button className = "button2" onClick ={ e => this.setState({ monsterId: '2' })} >Good Price</button>
            <button className = "button3" onClick ={ e => this.setState({ monsterId: '3' })} >Sale Price</button>
            <button className = "button4" onClick ={ e => this.setState({ monsterId: '4' })} >Bargain Price</button>
            <button className = "button5" onClick ={ e => this.setState({ monsterId: '5' })} >Sweet Price</button>
            <button className = "button6" onClick ={ e => this.setState({ monsterId: '6' })} >ABC Price</button>
          </div>
        
          <CardList monsters={filteredMonsters}>
          </CardList>
          <p>{this.state.string}</p>
          <button onClick ={()=>this.setState({string:'hello andre'})}>Change Text</button>
        
      </div>
    );
  }
  
}

export default App;
