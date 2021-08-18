import { FC } from 'react';
import { useEffect } from 'react';
import { loadScript } from 'utils';
import './App.css';

export const App: FC = () => {
  useEffect(() => {
    loadScript();
  }, []); // eslint-disable-line

  return (<div className="App">
    <h1>App1</h1>
    <div id="app2" />
  </div >);
}
