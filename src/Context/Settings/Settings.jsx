import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{

  const [defaultValues] = useState({difficulty: 3});
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');
  const [pageItems, setPageItems] = useState(3);

  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('someone@somesite.com');
  const [staff, setStaff] = useState([{name: 'Tim', position: 'Lead'}]);

  const addStaff = (person) => {
    console.log('person', person)
    if(person && person.name && person.position){
      setStaff([...staff, person]);
    } else {
      console.log('Invalid Person! Add title and name')
    }
  }


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
    title,
    setTitle,
    email,
    setEmail,
    staff,
    addStaff,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
