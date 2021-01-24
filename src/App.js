import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
    text: 'walk the dog',
    id: 1,
    day: 'Feb 5th at 2:30pm',
    reminder:  false,
    }])

  const name = 'Lindy';
  return (
    <div className="container">
      <Header />

      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
