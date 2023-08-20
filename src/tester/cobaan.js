import React, { Component } from 'react';

class Cobaan extends Component {
    render() {
        const item = [ 
            "Makanan 1", 
            "Makanan 2", 
            "Makanan 3", 
        ];

        const menu = [];
        item.forEach((item,index) => {
            menu.push( <li> {index}.  {item} </li> )
        }); 
        return (
            <div>
                <h4> Menu List</h4>
                <ul>
                    {menu}
                </ul>
            </div>
        );
    }
}

export default Cobaan;
