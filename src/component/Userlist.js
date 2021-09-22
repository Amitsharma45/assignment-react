import React from 'react'
import './Userlist.css';

function Userlist(props) {
    const { data } = props;
    
    return (
        <div>
            <h1>User List</h1>
            <div className="table">
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th colspan="2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data !== null ? (

                            [(data.map((d) => (
                                <tr>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                </tr>
                            )))]
                        ) : (
                            <h2 style={{textAlign:'center'}} >Data not found</h2>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Userlist
