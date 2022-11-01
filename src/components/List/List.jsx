import {useContext} from 'react';
import {SettingsContext} from '../../Context/Settings/Settings';

const List = () => {

  const {list, setList} = useContext(SettingsContext)

  function toggleComplete (id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  function deleteItem (id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  return (
    <>
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <div onClick={() => deleteItem(item.id)}>DELETE</div>
          <hr />
        </div>
      ))}
    </>
  )
}
export default List