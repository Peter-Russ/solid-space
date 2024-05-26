import { createSignal, type Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {


  return (
    <>
      <h1 id={styles.title}>Solid Space</h1>

      <div id={styles.stars}>

      </div>
    </>
  );
};

export default App;
