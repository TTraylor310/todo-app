import { useContext, useState } from 'react';
import { If, Then, Else } from 'react-if';
import { AuthContext } from './Auth';
import { Button, TextInput, Group } from '@mantine/core';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {
    isLoggedIn,
    login,
    logout,
  } = useContext(AuthContext);

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    logout();
  }


  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color='red' onClick={handleLogout}>Log Out</Button>
        </Then>
        <Else>
          <Group>

            <TextInput onChange={(e) => setUsername(e.target.value)}
              placeholder='Username:' />

            <TextInput onChange={(e) => setPassword(e.target.value)} 
              placeholder='Password:' />

            <Button color='gray.8' onClick={() => login(username, password)}>
              LogIn
            </Button>

          </Group>
        </Else>
      </If>
    </>
  )
}

export default Login;
