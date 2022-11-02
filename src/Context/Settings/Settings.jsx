import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{

  const [defaultValues] = useState({difficulty: 3});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState();
  const [pageItems, setPageItems] = useState(3);

  // const [show, setShow] = useState(true);
  // const [mode, setMode] = useState('dark');


  const values = {
    pageItems,
    setPageItems,
    sort,
    setSort,
    showCompleted,
    setShowCompleted,
    list,
    setList,
    incomplete,
    setIncomplete,
    defaultValues
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;
