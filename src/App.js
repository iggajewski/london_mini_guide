import './App.css';
import React from 'react';

/* 

TODO:
lvl 200 and beyond
CSS

*/

const sampleData = [  //will be deleted later
  {
    "name": "Peace PharmacySponsored",
    "website": "http://peacepharmacy.co.uk/",
    "phone": "020 8904 2071 ",
    "address": "We serve Harrow|Wembley,HA9"
  },
  {
    "name": "Webber Pharmacy",
    "website": "http://www.webberpharmacy.co.uk",
    "phone": "020 8427 2350 ",
    "address": "105 Headstone Rd, Harrow, HA1 1PG"
  },
]

function Title() {
  return (
    <div>
      <h1>City Mini Guide</h1>
    </div>
  );
}

function DropdownMenu() {
  return (
    <div>
      <p>Choose a city: 
        <select name="cities" id="citySelector">
          <option>Harrow</option>
          <option>Heathrow</option>
          <option>Stratford</option>
        </select>
      </p>
    </div>
  );
}

function CategoryButtons() {
  return (
    <div>
      <button>Pharmacies</button>
      <button>Schools and Colleges</button>
      <button>Hospitals</button>
      <button>Doctors</button>
    </div>
  )
}

function TableEl(props) {

  function Place(props) {
    return (
      <tr>
        <td>{props.number}</td>
        <td>{props.location.name}</td>
        <td>{props.location.website}</td>
        <td>{props.location.phone}</td>
        <td>{props.location.address}</td>
      </tr>
    )
  }

  return (
    <table>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Website</th>
      </tr>
      <tbody>
        {props.data.map(
          datum => (<Place location={datum} number={props.data.indexOf(datum) + 1}/>)
        )}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <DropdownMenu />
      <CategoryButtons />
      <TableEl data={sampleData}/>
    </div>
  );
}

export default App;
