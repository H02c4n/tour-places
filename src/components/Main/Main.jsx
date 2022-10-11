import React from 'react'
import "./Main.scss";
import {data} from "../../helper/data"
import Card from "./Card";

const Main = () => {
  return (
    <div className='card-container'>
        {data.map(item => {
            return(
                <Card key={item.id} item={item}/>
            )
        })}
    </div>
  )
}


export default Main