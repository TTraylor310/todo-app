import { useContext, useState } from 'react';
import {When} from 'react-if';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Pagination } from '@mantine/core';

const List = () => {

  const { list, setList, pageItems, showCompleted } = useContext(SettingsContext)
  const [activePage, setPage] = useState(1);

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)

  let listStart = pageItems * (activePage - 1);
  let listEnd = listStart + pageItems;
  let pageCount = Math.ceil(listToRender.length / pageItems);
  let displayList = listToRender.slice(listStart, listEnd);


  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  return (
    <>
      {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <div onClick={() => deleteItem(item.id)}>Delete?</div>
          <hr />
        </div>
      ))}
      <When condition={list>0}>
        <Pagination page={activePage} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}
export default List