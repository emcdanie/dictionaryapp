import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import { c } from "tar";

export default function Dictionary(){
    let[keyword, setKeyword] = useState("");


    function handleResponse(response){
        console.log(response.data[0]);
    }

function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl =`https://https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}



function HandleKeywordChange(event){
    setKeyword(event.target.value);

    
}

    return (
         <div  className="Dictionary">
             <form onSubmit={search}>
                 <input type="search" onChange={HandleKeywordChange} />
             </form>
    </div>
    );
}
