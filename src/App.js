import Header from './components/Header'
import Main from './components/Main'
import separate from './separate.js'
const travels = separate.map(travel => {
  return (
    <Main />
  )
})

function App() {
  return (
    <div className="container">
      <Header />
      {travels}
    </div>
  );
}

export default App;
