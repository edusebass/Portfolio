import {} from 'react'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  
  return (
    <>
      <body className="font-mono min-h-screen bg-gradient-to-r from-white to-neutral-300">
        <Header />
        <Main />
        <Footer/>
      </body>
    </>
  )
}

export default App