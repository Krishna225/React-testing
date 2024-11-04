import "./App.css";
//import { Application } from './Components/app/application';
//import { Counter } from "./Components/Counter/counter";
import { AppProviders } from "./providers/app-providers";
import {MuiMode} from './Components/mui/MuiMode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
