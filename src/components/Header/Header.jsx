import { Link } from 'react-router-dom';
import { createStyles, Header, Navbar, Group } from '@mantine/core';

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

  return (
    <Header data-testid='todo-header'>
      <Navbar className={classes.navbar}>
        <Group>
          <Link to='/' className={classes.link}>Home</Link>
          <Link to='/settings' className={classes.link}>Settings</Link>
        </Group>
      </Navbar>
    </Header>
  )
}

export default BigHeader;
