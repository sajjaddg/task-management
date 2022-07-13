import './App.css';
import TaskScreen from './screen/Task/Task-Screen';
import { ProjectsProvider } from './context/ProjectsContext';
function App() {
  return (
    <div className='bg-lightbg min-h-screen'>
      <ProjectsProvider>
        <TaskScreen />
      </ProjectsProvider>
    </div>
  );
}

export default App;
