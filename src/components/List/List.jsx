import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Pagination, createStyles, Card, Group, Badge, Text, CloseButton } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px',
  }
}));

const List = () => {
  const {classes} = useStyles();
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
        <Card key={item.id} withBorder shadow="md" pb="xs" mb="sm">
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
            <CloseButton title="Delete ToDo Item" onClick={() => deleteItem(item.id)} />
          </Group>
        </Card.Section>
        <Text align="left">{item.text}</Text>
        <Text align="right"><small>Difficulty: {item.difficulty}</small></Text >
      </Card>
      ))}

      <When condition={list > 0}>
        <Pagination page={activePage} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}
export default List