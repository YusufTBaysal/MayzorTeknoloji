import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import Userlist from "./UserList.css";

const UserList = (props) =>{

        

        return(
            <div className="table">
                <table cellPadding="5" cellSpacing="2">
                <tr>
                        <th>#</th>
                        <th>Ad-Soyad</th>
                        <th>Email</th>
                        <th>Telefon</th>
                        <th>Durum</th>
                        <th>İşlem</th>
                </tr>
                </table>
                

                {props.users.map((user) => (
                    <div key={user.id}>
                       <table>
                       
                       <tr>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.phone}</td>
                           <td>{user.situation}</td>
                           <td><button type="button" onClick={(event) => props.deleteUser(user)} className="btn btn-md btn-outline-danger">Sil</button></td>
                           <td><button type="button" className="btn btn-md btn-outline-danger">Düzenle</button></td>
                       </tr>
                   </table>
                   </div>
                ) )}
                
             
        </div>
            
        )
}

export default UserList;