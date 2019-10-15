import React from 'react';
import { styles } from './styles.css';

export default function Header(props){

  const pages =["Home","About","Contact"];
  return (
      <nav  className="header">
       <ul className="header__menu">{
        pages.map((page,index)=> <li key ={index}  style={styles} className="header__menuItem" >{page}</li>)
          }
      </ul>
      <h1 className="header__title">{props.title}</h1>
      </nav>
  ) 
}