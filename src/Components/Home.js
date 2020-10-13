import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import './Home.css';

const baseUrl = "http://localhost:3005/artists";



class Home extends Component {
    constructor(){
        super()

        this.state = {  
            artists:[]
        }
    }

    renderArtist(artists){
        if(artists){
            return(
                artists.map((art)=>{
                    return(
                        <div className="contain">
                            <div className="list">
                                <img src={`images\\albums\\covers\\${art.cover}.jpg`} alt={art.name}/>
                                <Link to={`/artists/${art.id}`}>
                                <button className="bottom-left">{art.name}</button> 
                                </Link>
                            </div>
                        </div>
                    )
                })
            );
        }    

    }
 
    render() { 
        return (
            <React.Fragment>
                <div className="header">
                    <h2>MUSIC-DB</h2>
                    <img src="images\cover.png" alt="cover"/>
                    <div className="artists">
                        <h3>Browse The Artists</h3>
                        <Link to="/artists/add">
                        <button className="btn btn-primary">Add Artist</button>
                        </Link>
                    </div>
                </div>
                {this.renderArtist(this.state.artists)}
            </React.Fragment>
          );
    }

    componentDidMount(){
        axios.get(baseUrl).
            then((response)=>{
                console.log(response)
                if(response.status ===200){
                    this.setState({artists: response.data})
                }  
            }).
            catch((e)=>{
                console.log(e);
             })
    }
}
 
export default Home;