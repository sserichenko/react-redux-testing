import React from 'react'
import Header from './components/Header/Header'
import Headline from './components/Headline/Headline'
import "./app.scss"
function App() {
  return (
    <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts"/>
        </section>
        
    </div>
  );
}

export default App;
