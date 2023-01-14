import { AppComponents } from "./components/AppComponents";
import TaskProvider from "./components/context/TaskContext";

function App(){
  return (
      <TaskProvider>
        <AppComponents />
      </TaskProvider>
  );
}

export default App;