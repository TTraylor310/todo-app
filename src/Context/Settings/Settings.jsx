import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{

  const [defaultValues] = useState({difficulty: 3});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  // const [mode, setMode] = useState('dark');
  // const [sort, setSort] = useState();
  // const [num, setNum] = useState(3);
  // const [show, setShow] = useState(true);


  const values = {
    // mode,
    // sort,
    // num,
    // show,
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
