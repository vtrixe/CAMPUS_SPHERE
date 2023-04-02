import React , { useEffect } from 'react'
import LoginComponent from '../components/LoginComponent'
import { LoginAPI } from '../api/AuthApi';
import { onAuthStateChanged } from 'firebase/auth';
export default function Login() {
  return <LoginComponent />;
}

