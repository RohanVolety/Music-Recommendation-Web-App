import {  useState} from "react";
import classes from "./Search.module.css";
import axios from 'axios';
import SideBar from "./SideBar";

import classess from "./Main.module.css";

const Search = () => {

    const [playlist, setPlaylist] = useState([]);
    const fetch = async (e) => {
        if (e !== "" || e !== " ") {
            setPlaylist([]);
            try {

                const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDaJlfCMDG4kQKEIfUoT1wgP5MAT10eFH4&type=audio&part=snippet&maxResults=6&q=${e}`);
                setPlaylist(data.items);
                console.log(data.items);
            } catch (err) {
                console.error(err);
            }
        }
        else {
            setPlaylist([]);

        }

    };
    function handlesubmit(e) {

        if (e.key === 'Enter') {
            fetch(e.target.value);
        }


    }
    return (
        <div className={classes.search}>
            <div className={classes.row}>
                <SideBar />
                <div className={classes.content}>

                    <div className={classes.searchInputWrapper}>

                        <input className={classess.searchBar} type='search'
                            placeholder="Search for any tracks here"
                            onKeyDown={handlesubmit}
                        />
                    </div>
                   
                    <div className={classes.cards}>
                        {playlist.map((data) => (
                  

                            <iframe title={data.id.videoId} src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allowfullscreen></iframe>
                     
                    ))}
                    </div>
                

                </div>
            </div>

        </div>



    );
};
export default Search;
