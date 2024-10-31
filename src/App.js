import logo from './logo.svg';
import './App.css';

import Accordion from './component/Accordion.js';
import {accordionData} from './utils/testdata.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Weather info comes here" />
          <div class="header-right">
            <a class="active" href="#home">ホーム</a>
            <a href="#availability">空室</a>
            <a href="#reserve">予約</a>
            <a href="#hiking">登山</a>
            <a href="#onsen">立ち寄り湯</a>
            <a href="#about">小屋について</a>
            <button class="btn"><i class="fa fa-bars"></i></button>
          </div>
      </header>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>

    </div>
  );
}

export default App;
