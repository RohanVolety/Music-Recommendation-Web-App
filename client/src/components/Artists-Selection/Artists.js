/* eslint-disable array-callback-return */
import React, { useState } from "react";
import artistsName from "../../data/artists"
import Button from "./ArtistsButton";
import classes from './ArtistsButton.module.css'
import ArtistsSendData from './ArtistsSendData';
import Navbar from './../Navbar/Navbar';

function Artists() {
    const[searchTerm,setSearchTerm]=useState('');
  const [AR, setAR] = useState([]);
  const onclickHandler = (id, active) => {
    if (active) {
      setAR((prevState) => [...new Set([ ...prevState,id])]);
    } else {
      setAR((prevState) => {
        return prevState.filter((i) => i !== id);
      });
    }
    console.log(AR);
  };
  
  let an = artistsName.filter((ar) => ar.id <=500 ).filter((ar)=>
  {
    
      if(searchTerm==="")
      return ar;
      else if(ar.artists.toLowerCase().includes(searchTerm.toLowerCase()))
      {
          return ar;
      }

  });

  let content = an.map((artist) => (
 
    <Button
      onclick={onclickHandler}
      title={artist.artists}
      id={artist.id}
      key={artist.id}
 
      className = {`${ AR !==null? AR.includes(artist.id) ? classes.selected : classes.notselected : classes.notselected}`}
    />
  ));
  return (
   
    <div  >
       <Navbar />
        <h1 className={classes.heading} >CHOOSE YOUR FAVOURITE ARTISTS 
        
       </h1>
       
        <div className={classes.searchbtn}>
            
        <input className={classes.searchInput} type="text" name="search" placeholder="Search.." onChange={(event)=>{
          setSearchTerm(event.target.value);  
        }}/>
       </div>
        <div>{content}</div>
        <ArtistsSendData data={AR} />
    </div>
  );
}

export default Artists;