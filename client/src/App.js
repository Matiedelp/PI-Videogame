import Landing from "./components/Landing/Landing";
import  Home  from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/detail" component={Detail} />
        <Route path="/form" component={Form} />
        <Route path="*" component={()=> <img className="error" src={"client\src\img\mobile_404.png"} alt="not-fount" />}/>
      </Switch>
    </div>
  );
}

export default App;
