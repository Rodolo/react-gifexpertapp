import { Fragment, useState } from "react";
import AgregarCategoria from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categorias = ['One Punch Man', ' Dragon Ball'];

    const [categories, setCategories] = useState([]);


    return <>
                <h2>GifExpertApp</h2>
                <AgregarCategoria setCategories={setCategories}/>
                <hr></hr>

                <ol>    
                   {
                   categories.map((elem) =>
                    <GifGrid key={elem} category={elem}/> )                
                   }
                </ol>
          </>
};


export default GifExpertApp;