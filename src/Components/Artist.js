import React, { Component } from 'react';
import axios from 'axios';

import './Artist.css';

const baseUrl = "http://localhost:3005/artists";

class Artist extends Component {
    constructor(){
        super()

        this.state ={
            artists: {},
            albums: []
        }
    }
    
    renderdetails(artists){
        if(artists){
            return(
                <div>
                     <img src={`..\\images\\albums\\covers\\${artists.cover}.jpg`} alt={artists.name}/>
                    <h2>{artists.name}</h2>
                    <p>{artists.bio}</p>
                </div>
            )
        }
    }
    renderalbums(albums){
        return(
            albums.map((item)=>{
                return(
                    <div>
                    <img src={`..\\images\\albums\\${item.cover}.jpg`}/>
                    </div>
                )
            })
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>MUSIC DB</h1>
                <div className="container">
                    {this.renderdetails(this.state.artists)}
                  <div className="albums">
                    {this.renderalbums(this.state.albums)}
                  </div>
                </div>
            </React.Fragment    >
         );
    }

    componentDidMount(){
        axios.get(`${baseUrl}/${this.props.match.params.id}`)
        .then((response)=>{
            if(response.status === 200){
                this.setState({artists: response.data});
                this.setState({albums: response.data.albums})
            }
        })
        .catch((er)=>{
            console.log(er);
        })
    }
}
 
export default Artist;