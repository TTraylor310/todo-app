import { useContext, useEffect } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';

const Header = () => {

  const {incomplete, list, setIncomplete} = useContext(SettingsContext);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <div className='header'>
      Home
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
    </div>
  )
}

export default Header
