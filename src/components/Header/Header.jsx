import { useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { createStyles, Header, Navbar, Group } from '@mantine/core';
import Login from '../Auth/Login';
import { SettingsContext } from '../../Context/Settings/Settings';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }
}))

const BigHeader = () => {
  const { classes } = useStyles();

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const { title, 
          setTitle, 
          email, 
          setEmail, 
          staff, 
          addStaff
        } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff({name, position});
  }



  return (
    <Header data-testid='todo-header'>
      <Navbar className={classes.navbar}>
        <Group>
          <Link to='/' className={classes.link}>Home</Link>
          <Link to='/settings' className={classes.link}>Settings</Link>
        </Group>
      </Navbar>

      <h1>{title}</h1>
      <h2>email us at {email}</h2>

      <Login />
      <ul>
        {staff.map((person, index) => (
          <li key={`staff-${index}`}>{person.name}, {person.position}</li>
        ))}
      </ul>
      <label>Change Email
          <input onChange={(e) => setEmail(e.target.value)} />
      </label>
      <form onSubmit={handleSubmit}>
          <label> Name
            <input onChange={(e) => setName(e.target.value)} />
          </label>
          <label> Position
            <input onChange={(e) => setPosition(e.target.value)} />
          </label>

      <button type="submit">Add Staff Member</button>
      </form>


    </Header>
  )
}

export default BigHeader;
