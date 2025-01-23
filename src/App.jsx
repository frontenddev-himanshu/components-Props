import './App.css'
import Component from './component'

function App() {

  return (
    <>
      <Component
        cardPic="src/assets/img-1.jpg"
        title="John Doe"
        disc="CEO & Founder"
        btn={"Contact"}
      />

      <Component
        cardPic="src/assets/img-2.jpg"
        title="Himanshu Kumar"
        disc="Web Developer"
        btn={"Visit Me"} />
    </>
  )
}

export default App
