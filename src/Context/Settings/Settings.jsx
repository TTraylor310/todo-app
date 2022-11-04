import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{

  const [defaultValues] = useState({difficulty: 3});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');
  const [pageItems, setPageItems] = useState(3);



  const values = {
    list,
    setList,
    incomplete,
    setIncomplete,
    defaultValues,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
    pageItems,
    setPageItems,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
