import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider from '../../Context/Settings/Settings';
import Header from './Header';

describe('To-Do component tests', () => {
  test('Render Header element', () => {
    render(
      <SettingsProvider>
        <Header />
      </SettingsProvider>
    );

    let header = screen.getByTestId('todo-header');
    // let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    // expect(h1).toBeInTheDocument();
  })
  
})
