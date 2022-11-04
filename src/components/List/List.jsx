import { useContext, useEffect, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Pagination, createStyles, Card, Group, Badge, Text, CloseButton } from '@mantine/core';
import Auth, { AuthContext } from '../Auth/Auth';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  }
}));

const List = () => {
  const { classes } = useStyles();
  // const { setList, pageItems, showCompleted } = useContext(SettingsContext)
  const { list, setList, pageItems, showCompleted } = useContext(SettingsContext)
  const { can } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  // const [list, setNewList] = useState([]);

  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  let listStart = pageItems * (page - 1);
  let listEnd = listStart + pageItems;
  let pageCount = Math.ceil(listToRender.length / pageItems);
  let displayList = listToRender.slice(listStart, listEnd);

  function toggleComplete(id) {
    // put/update the DB?
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  function deleteItem(id) {
    // delete from DB
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  useEffect(() => {
    (async () => {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo')
      let results = response.data.results
      console.log('check results on list:', results);
      setList(results);
    })()
  }, []);


  return (
    <>
      {displayList.map(item => (
        <Card key={`${item.id}`} withBorder shadow="md" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <Badge
                  onClick={() => toggleComplete(item.id)}
                  className={classes.badge}
                  color={item.complete ? "green" : "red"}
                  variant="filled"
                >
                  {item.complete ? 'complete' : 'pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <Auth capability='delete'>
                <CloseButton title="Delete ToDo Item" onClick={() => deleteItem(item.id)} />
              </Auth>
            </Group>
          </Card.Section>
          <Text align="left">{item.text}</Text>
          <Text align="right"><small>Difficulty: {item.difficulty}</small></Text >
        </Card>
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>

    </>
  )
}
export default List