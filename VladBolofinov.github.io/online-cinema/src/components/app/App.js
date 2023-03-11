import {Component} from "react";
import Premiers from "../premiers/premiers";
import RandomMovie from "../randomMovie/randomMovie";
import SideBar from "../sideBar/sideBar";
class App extends Component {
  render() {
    return (
        <div className="App">
            <SideBar/>
            <Premiers/>
            <RandomMovie/>
        </div>
    )
  }

}

export default App;
