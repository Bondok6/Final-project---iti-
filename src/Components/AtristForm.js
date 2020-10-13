import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:3005/artists";

class ArtistForm extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            bio: ''
        }
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        
          const obj = {
            ...this.state,
            cover:"amr_diab",
            albums: [
                {
                  "albumId": "d1",
                  "title": "kol-hyati",
                  "year": 1979,
                  "cover": "kol-hyati",
                  "price": 20
                },
                {
                  "albumId": "d2",
                  "title": "meaddy-elnas",
                  "year": 1973,
                  "cover": "meaddy-elnas",
                  "price": 25
                },
                {
                  "albumId": "d3",
                  "title": "sahran",
                  "year": 1977,
                  "cover": "sahran",
                  "price": 15
                }
              ]
          };

        await axios.post(baseUrl, obj);

        this.props.history.replace("/");
    };

    handleChangeName = (e) => {
        let state = { ...this.state };
        state.name = e.target.value;
        this.setState(state);
      };

      handleChangeBio = (e) => {
        let state = { ...this.state };
        state.bio = e.target.value;
        this.setState(state);
      };

      
    render() { 
        return (
            <div>
                <h1>MUSIC DB</h1>
                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Artist Name</label>
                        <input type="text" className="form-control"
                         placeholder="Amr Diab"
                         onChange={this.handleChangeName}
                         value={this.state.name}
                         />
                    </div>

                    <div className="form-group">
                        <label>Bio</label>
                        <textarea className="form-control" 
                        placeholder="Write Bio ... " rows="10"
                        onChange={this.handleChangeBio}
                        value={this.state.bio}
                        >
                        </textarea>
                    </div>  

                    <button type="submit" className="btn btn-primary"> Add
                     </button>
                </form>
            </div>
        );
    }
}
 
export default ArtistForm;