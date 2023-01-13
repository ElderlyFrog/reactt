import React from 'react';
import './App.css';
import type { ReactNode } from "react"
import {produkty} from "./produkty";

const data = produkty;


interface dataPropsTypes {
  name:string, price:string,  category:string,  brand:string,  description:string

}
const Leti =(props: dataPropsTypes) => {
  return  (
      <div>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <h3>{props.category}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.description}</h3>


      </div>
  )
}


interface ObalPropsTypes {
  children: ReactNode
}
function Obal({children }: ObalPropsTypes   ) {
  return (
      <div >
        {children}



      </div>
  );
}
function App() {
  return (
      <>
      <Obal>

          {data.map((leti:{name:string, price:string,  category:string,  brand:string,  description:string }) => <Leti{...leti}/>)}

      </Obal>
        </>
  )
}

export default App;
