import React from 'react';
import { Colors, Header } from './style';

const App: React.FC = () => {
  return (
    <>
      <div style={{ height: '100vh', width: '100%', backgroundColor: Colors?.brandPrimaryBackgroundColor, margin: 0, padding: 0 }}>
        <Header height={50}/>
        <h1 style={{ color: Colors?.brandPrimaryTextColor, margin: 0 }}>Listify</h1>
      </div>
    </>
  );
}

export default App;