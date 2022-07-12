import Header from './components/Header'
import Main from './components/Main'
import separate from './separate.js'
const travels = separate.map(travel => {
  return (
    <Main 
      title = {travel.title}
      location = {travel.location}
      googleMaps = {travel.googleMapsLink}
      startDate = {travel.startDate}
      endDate = {travel.endDate}
      description = {travel.description}
      img = {travel.imgURL}
    />
  )
})

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        {travels}
      </main>
    </div>
  );
}

export default App;
