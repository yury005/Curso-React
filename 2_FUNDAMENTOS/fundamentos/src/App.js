// components

import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponents from './components/MyComponents';
import TemplateExpressions from './components/TemplateExpressions'


// Styles /CSS

function App() {
  return (
    <div className="App">
      <h1>React Foundations</h1>
      <Events />
      <MyComponents/>
      <FirstComponent/>
      <TemplateExpressions/>
      <Challenge/>
      
    </div>
  );
}

export default App;
