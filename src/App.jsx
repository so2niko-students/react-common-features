import { useState } from 'react';

import {
  // createUser, 
  // getAlltUsers, 
  getUserById,
  updateUser,
  deleteUserById
} from './services/users_fetch';
import {
  // createUser, 
  sendFile
} from './services/users';
import { testCall, getAlltUsers, createUser } from './services/users_xmlhttprequest';

import Card from './components/card';
import './App.css';

const newUser = {
  "login": "111",
  "name": "222",
  "surname": "333",
  "password": "444",
  "role": "user",
  "status": "Main",
  "email": "random@gmail.com",
  "phone": "1-574-723-1294",
  "country": "Ghana",
  "city": "555",
  "avatar": "https://cdn.fakercloud.com/avatars/marrimo_128.jpg"
};

const App = () => {
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);

  const handleClickRequest = async () => {
    if (userId) {
      const data = await getUserById(userId);
      setUsers([data]);
    } else {
      // const data = await getAlltUsers();
      // setUsers(data);
      getAlltUsers(setUsers);
    }
  }

  const handleClickAddRandomUser = () => {
    // testCall();
    // createUser(newUser).then(r => {
    //   console.log(r)
    //   setUserId(r.id);
    // });
    createUser(newUser, r => {
      console.log(r)
      setUserId(r.id);
    });
  }

  const handleClickUpdateUser = () => {
    if (userId) {
      const updatedUser = { ...newUser };
      updatedUser.name = Math.floor(Math.random() * 100000);

      updateUser(userId, updatedUser);
    } else {
      handleClickAddRandomUser();
    }
  }

  const handleClickDeleteUser = () => {
    if (userId) {
      deleteUserById(userId);
    } else {
      console.warn('You need to paste user ID')
    }
  }

  const handlePreview = (file) => {
    if(file){
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = document.querySelector('.file-test');
        console.log(e);
        img.src = e.target.result;
      }

      reader.readAsDataURL(file);
    }
  }

  const handleChangeFile = (ev) => {
    console.log(ev);

    // preview
    handlePreview(ev.target.files[0]);
    // send
    sendFile(ev.target.files[0]);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
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
      <div>
        <input 
          type="file" 
          name="test" 
          id="test" 
          onChange={handleChangeFile} // submit -> перевірка даних, відправка даних
        />
        <img src="" alt="" className="file-test" />
      </div>
      <div className='grid grid-cols-3 gap-3'>
        {users.length > 0 ?
          users.sort((a, b) => b.id - a.id).map(user => <Card user={user} key={user.id} />)
          : null
        }
      </div>
    </>
  )
}

export default App
