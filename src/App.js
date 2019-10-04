import React from 'react';
import './App.css';
import './component /navmenu.css';
import NavMenu from './component/Navmenu';

const menuItem=[{link:"#25",title:"About us"},
                {link:"#1",title:"Career"},
                {link:"#",title:"Departement",items:["Marketing &amp; PR","Customer Success &amp; Sales","IT, Product, Design &amp; UX","Finance &amp; Administration","HR &amp; more"]}]

function App() {
  return (
    <div className="docplanner-list">
     <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                alt="Docplanner Group"></img> 
    <NavMenu listofitems={menuItem}/>
    </div>)
}

export default App;
