import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'

const filters = ['all', 'completed', 'incomplete']
function App() {
  return (
    <div className="App">
      <h1>Financial Aid To Do's!</h1>
      <AddTodo/>
      <TodoList todos={[{content: 'Gather Tax Information'}, {content: 'Apply for FSA ID'}]}/>
      <VisibilityFilter filters={filters}/>
    </div>
  );
}

export default App;
