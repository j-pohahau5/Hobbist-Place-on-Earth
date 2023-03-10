import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ( useMutation ) from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState ({ email: '', password: ''});
    cosnt [Login, { error, data}] = useMutation(LOGIN_USER);
}