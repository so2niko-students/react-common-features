import { useState } from 'react'
import { createUser, getAlltUsers, getUserById, updateUser, deleteUserById } from './services/users';

import Card from './components/card';
import './App.css';

const newUser = {
  "login": "randomLogin",
  "name": "Random",
  "surname": "User",
  "password": "123456",
  "role": "Admin",
  "status": "Main",
  "email": "random@gmail.com",
  "phone": "1-574-723-1294",
  "country": "Ghana",
  "city": "Port Noelialand",
  "avatar": "https://cdn.fakercloud.com/avatars/marrimo_128.jpg"
};

const App = () => {
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);

  const handleClickRequest = async () => {
    if(userId){
      const data = await getUserById(userId);
      setUsers([data]);
    }else{
      const data = await getAlltUsers();
      setUsers(data);
    }
  }

  const handleClickAddRandomUser = () => {
    createUser(newUser).then(r => {
      console.log(r)
      setUserId(r.data.id);
    });
  }

  const handleClickUpdateUser = () => {
    if(userId){
      const updatedUser = {...newUser};
      updatedUser.name = Math.floor(Math.random() * 100000);

      updateUser(userId, updatedUser);
    }else{
      handleClickAddRandomUser();
    }
  }

  const handleClickDeleteUser = () => {
    if(userId){
      deleteUserById(userId);
    }else{
      console.warn('You need to paste user ID')
    }
  }

  return (
    <>
    <div>
      <p className='text-red-600'>Users: {users.length}</p>
      </div>
      <div>
        <input 
          name='user-id' 
          type='text' 
          placeholder='USER ID' 
          onChange={(ev) => setUserId(ev.target.value)}
          value={userId}
        />
        <button onClick={handleClickRequest}>Request</button>
        <button onClick={handleClickAddRandomUser}>Add Random User</button>
        <button onClick={handleClickUpdateUser}>Update user</button>
        <button onClick={handleClickDeleteUser}>Delete user</button>
      </div>
      <div className='flex'>
        {users.length > 0 ? 
          users.map(user => <Card user={user} key={user.id} />)
          : null  
        }
      </div>
    </>
  )
}

export default App
