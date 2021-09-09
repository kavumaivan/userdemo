import React ,{ useState,useEffect } from 'react';
import './User.scss';
import * as api from "../service"
import User from './UserInterface';
import UserCard from './UserCard';

const Users = () => {

  const [users,setUsers]=useState<User[]>([])

  useEffect(()=>{
    if(!users.length){
    api.getUsers()
    .then(result=>{
        setUsers(result.data)
    })
    }
  },[users])
  return (
       <div className="users">
            <h1>List users </h1>
            {users.length && 
            <div className={"userlist"}>
            {users.map((us) => {
            return ( 
                <div key={us.id} className="item">
                    <UserCard user={us}/>
                </div>)
            })}
            </div>}
        </div>
  );
}

export default Users;
