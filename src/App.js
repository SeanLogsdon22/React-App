import React, {useState} from 'react'
import Accordion from './componets/Accordian'
import Counter from './componets/Counter'
import Search from './componets/Search'
import Dropdown from './componets/Dropdown'
import Translate from './componets/Translate.js'
import Route from './componets/Route.js'
import Header from './componets/Header.js'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'Because it is a popular front-end framework used by javascript engineers'
    },
    {
        title: 'Who created React?',
        content: 'A group of Facebook engineers'
    }
]

const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

// eslint-disable-next-line import/no-anonymous-default-export

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/counter'>
        <Counter />
      </Route>
    </div>
  );
};
export default App;
