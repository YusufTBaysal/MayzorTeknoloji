import React from "react";
import Searchbar from "./Searchbar.css"

class SearchBar extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-3">
                        <table className="tablo">
                            <tr>
                                <td><h1>Mayzor Teknoloji</h1></td>
                                <td><input type="text" className="form_control" /></td>
                            </tr>
                            
                        </table>
                        
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;