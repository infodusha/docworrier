import type { Component } from 'solid-js';

import styles from './App.module.css';

export const App: Component = () => {
  return (
    <div>
      <a
        class={styles.link}
        href="https://github.com/infodusha/docworrier"
        target="_blank"
        rel="noopener noreferrer"
      >docworryer</a>
    </div>
  );
};
