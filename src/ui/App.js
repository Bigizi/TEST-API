import { useState } from 'react';
import './App.css';
import Tab from './components/tab';
import Tabs from './components/tabs';
import TabController from './components/tab-controller';
import ActiveTasks from './components/active-tasks';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <div>
      <Tabs getActiveTab={(index=>setActiveTab(index))}>
        <Tab  >
         <span>Active task</span>
        </Tab>
   
        <Tab>Completed task</Tab>
        <Tab>Completed task</Tab>
       
      </Tabs>


      <TabController activeTab={activeTab}>
        <div >
          <ActiveTasks />
        </div>
        <div>
          Second
        </div>
        <div>
          third
        </div>
      </TabController>
      </div>
     
    </div>
  );
}

export default App;
