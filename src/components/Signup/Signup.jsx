import React, {useState} from 'react';
import { Formik, Form } from 'formik';

import Input from '../Input';
import TextArea from '../TextArea';

import '../ProductForm/style.scss';

const Signup = ({postUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');

    handleChange = event => {
        switch(event.target.name){
            case 'username': setUsername(event.target.value); break;
            case 'password': setPassword(event.target.value); break;
            case 'avatar': setAvatar(event.target.value); break;
            case 'bio': setBio(event.target.value); break;
            default:
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        postUser({ username, password, avatar, bio });
    }

    return (
        <form className='form' onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label className='label'>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label className='label'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label className='label'>Avatar</label>
          <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
            /><br/>

          <label className='label'>Bio</label>
          <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>

        <input type='submit'/>
      </form>
    );
}

export default Signup;