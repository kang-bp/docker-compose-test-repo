import * as React from 'react';
import './App.css';
// import logo from './logo.svg';
import Counter from './components/Counter';
import Profile from './components/Profile';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile 
          name="テスト太郎"
          job="デベロッパー"
        />
      <Counter />
      </div>
    );
  }
}

export default App;
