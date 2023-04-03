import React, { useState } from 'react';
import MainBlock from './components/MainBlock/MainBlock';

function App() {

  const [theme, setTheme] = useState<string>("light")

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
      <MainBlock
        changeTheme={handleClick}
        theme={theme}
      />
    </>
  );
}

export default App;
