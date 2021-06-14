import React, {useState, useEffect} from "react";

function App(){
    const [userInfo, setUserInfo] = useState([])
    
    let userData = []

    for(const [key, value] of Object.entries(userInfo)){
        userData.push(<tr key={key}>
            <td>{value.username}</td>
            <td>{value.age}</td>
        </tr>)
    }

    return (
        <div>
            <h1>All Users</h1>
            <h3>username and age</h3>
            <table>
                <tr>
                    <th>User Name</th>
                    <th>User age</th>
                </tr>
                {userData}
            </table>

            <h1>Age Demographic of Users with Hobby</h1>
            <select>
                <option>Hobby</option>
            </select>
        </div>
    )
}

export default App