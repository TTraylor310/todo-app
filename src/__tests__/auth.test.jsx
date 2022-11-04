import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Auth from '../components/Auth/Auth';
import Login from '../components/Auth/Login';
import AuthProvider, { AuthContext } from '../components/Auth/Auth';

describe('Auth Integration', () => {
  test('contains initial user and isLoggedIn values', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({isLoggedIn, user}) => (
              <>
                <p data-testid="isLoggedIn"> {isLoggedIn.toString()}</p>
                <p data-testid="user">{typeof(user)}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
    expect(screen.getByTestId('user')).toHaveTextContent('object');
  });

  test('allows for login', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({isLoggedIn, user}) => (
              <>
              <Login />
                <p data-testid="isLoggedIn"> {isLoggedIn.toString()}</p>
                <p data-testid="user">{`${user.capabilities}`}</p>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const usernameInput = screen.getByPlaceholderText('Username:');
    const passwordInput = screen.getByPlaceholderText('Password:');
    const button = screen.getByText('LogIn');

    fireEvent.change(usernameInput, {target: {value: 'admin'}});
    fireEvent.change(passwordInput, {target: {value: 'ADMIN'}});
    fireEvent.click(button);

    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');
    expect(screen.getByTestId('user')).toHaveTextContent('create,update,read,delete');

    const logoutButton = screen.getByText('Log Out');
    fireEvent.click(logoutButton);

  });

  test('renders content with Auth component based on capabilities', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({isLoggedIn, user}) => (
              <>
              <Login />
              <Auth capability="read">
                <p data-testid="test-read">I am authorized to read!</p>
              </Auth>
              <Auth capability="delete">
                <p data-testid="test-delete">I am authorized to delete!</p>
              </Auth>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const usernameInput = screen.getByPlaceholderText('Username:');
    const passwordInput = screen.getByPlaceholderText('Password:');
    const button = screen.getByText('LogIn');

    fireEvent.change(usernameInput, {target: {value: 'user'}});
    fireEvent.change(passwordInput, {target: {value: 'USER'}});
    fireEvent.click(button);

    let authorized = screen.getByTestId('test-read');
    let notAuthorized = screen.queryByTestId('test-delete');

    expect(authorized).toHaveTextContent('I am authorized to read!');
    expect(notAuthorized).toBeInTheDocument();
  })

})
