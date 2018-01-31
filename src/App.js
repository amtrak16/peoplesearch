import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for (let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if (i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class User {
  constructor(
    name,
    city,
    industry,
    hobbies,
    email
  ) {
    this.name = name;
    this.city = city;
    this.industry = industry;
    this.hobbies = hobbies;
    this.email = email;
    this.id = genId(email, industry, city);
  }
}
const initialState = {
  userPage: undefined,
  users: [
    new User('Bobby', 'Los Angeles', 'Software Development', 'Many many awesome fun hobbies', 'email@email.com'),
    new User('Henry', 'Seattle', 'Software Production', 'TV shows', 'root@email.com'),
    new User('Sofie', 'Boulder', 'Software Engineer', 'Gardening', 'souped up@email.com'),
    new User('Miranda', 'Detroit', 'Mechanic', 'Video Games', 'trippers@email.com'),
    new User('Jerome', 'NYC', 'Physicist', 'Reading', 'email@mailamail.com'),
    new User('Millie', 'Hawkins, Indiana', 'ESP', 'Blowing up things from the upside down', 'hoppin@email.com'),
    new User('Train', 'Oaklahoma City', 'Real Engineer', 'choo choo', 'chooc.choo@email.com'),
  ],
  peopleVal: '',
  peopleMsg: '',
  peopleErr: false,
  peopleSelect: false,
}

class App extends Component {
  constructor (props) {
  super(props);

    this.state = initialState
    this.onPeopleIn = this.onPeopleIn.bind(this)
    this.onSbmClick = this.onSbmClick.bind(this)
    this.onPeopleClick = this.onPeopleClick.bind(this)

}

  onPeopleIn({ target }) {
    if (target.value.length === 0) {
      this.setState({ peopleVal: target.value, peopleErr: true, peopleMsg: 'Please enter a value to search on.', peopleSelect: false, peopleRspMsg: '', disableSbmBtn: true })
    } else {
      this.setState({ peopleVal: target.value, peopleErr: false, peopleMsg: '', peopleSelect: false })
    }
  }

  onSbmClick(evt) {
    evt.preventDefault();
  }

  onPeopleClick ({target}) {
    // this.users.forEach((user) => {
    //   if (user.id.indexOf(target.id) === -1) {
        
    //   }
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p className="App-intro"></p>
          <form class="card" onSubmit={this.onSbmClick}>
            <div>
              <div class="row">
                <div class="small-5 columns md-text-field with-floating-label icon-left">
                  <input type="search" id="people_in" placeholder='search' value={this.state.peopleVal} onChange={this.onPeopleIn} />
                  <label for="people_in"></label>
                  <span class="error">{this.state.peopleMsg}</span>
                  <span class="icon icon-sysicon-search"></span>
                </div>
                <div class="small-7 columns"></div>
              </div>
            </div>  
              <div>
                <div class="row">
                  <div class="small-2 columns"></div>
                  <div class="small-2 columns">
                    <RenderPeople users={this.state.users} search={this.state.peopleVal} onClick={this.onPeopleClick}/>
                  </div>
                  <div class="small-8 columns"></div>
                </div>
              </div>
          </form>
          {this.state.peopleSelect &&
            <div class="card">
              <div class="row">
                <div class="row">
                  <div id="movieYear" class="large-2 columns"><span class="label small">Year: </span>{this.state.movieYear}</div>
                  <div class="large-10 columns" ></div>
                </div>
                <div class="row">
                  <div id="movieDir" class="large-6 columns" ><span class="label small">Directors: </span>{this.state.movieDir}</div>
                  <div class="large-6 columns" ></div>
                </div>
                <div class="row">
                  <div id="moviePlot" class="large-12 columns" ><span class="label small">Plot: </span>{this.state.moviePlot}</div>
                </div>
              </div>
            </div>
          }
      </div>
    );
  }
}

class RenderPeople extends Component {
  render () {
    let rows=[]
    this.props.users.forEach((user) => {
      if (user.name.indexOf(this.props.search) === -1) {return;}
      rows.push(<p id={user.genId} onClick={this.props.onPeopleClick}>{user.name}</p>)
    })
  return (
    <div>{rows}</div>
  )
  }
}

export default App;
