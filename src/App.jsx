import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import User from './user.jsx'
import Button from './button.jsx'
import Student from './students.jsx'
import List from './list.jsx'

function App() {
  

  return(
    <>
    <Header/>
    <Card/>
    <Button/>
    <Student name="ini adalah props" angka={16} boolean={false}/>
    <Student name="ini adalah props 2" angka={17} boolean={true}/>
    <Student name="ini adalah props 3" angka={19} boolean={true}/>
    <User isLoggedin={false} username="(    )"/>
    <List/>
    <Food/>
    <Footer/>
    </>
  )
}

export default App
