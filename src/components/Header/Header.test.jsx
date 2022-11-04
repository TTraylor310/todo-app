import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import {Header} from '@mantine/core';
import SettingsProvider, { SettingsContext } from '../../Context/Settings/Settings';
import Header from '../Header/Header';

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          <Header />
          {/* <BigHeader /> */}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    let header = screen.getByTestId('todo-header2');
    // let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    // expect(h1).toBeInTheDocument();
  })
})
