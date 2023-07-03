import { useState } from "react"
const Body =() =>{
    // const searctext="kfc";
    const [searchInput,setSearchInput]=useState("kfc");// returns array like this[variable name, function to update variable] that is why we are desturcturing it .
    
    // to see rconciliation in react lively below
    const[searchClick,setSearchClick]=useState("flase")
    const reconciliation=true;
    // we can also write this above code in htis fashion also most of hte people doesn't know
    // const searchvariable=useState("kfc")
    // const [searchInput,setSearchInput]-searchvariable
    return (
        <div className="searchcontainer">
            <input 
            type="text"
            className="search-Input"
            placeholder="search"
            value={searchInput}
            onChange={ (e) =>{
                setSearchInput(e.target.value);
                  }
            }
            />
            <button className="search-btn"
            onClick= {() =>{


            // i used this to see reconciliation inreact lively if you want to see uncomment the above code 
                if(searchClick==="true"){
                   setSearchClick("false"); 
                }
                else{
                    setSearchClick("true"); 
                }   
                
            }}
            >Search</button> <h1>{searchInput}</h1>

            <h1>{searchClick}</h1>
        </div>
    );
}

export default Body