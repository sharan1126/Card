import Card from './Comp.jsx'
import Student from './Student.jsx'

function App(){
  return(
    <>
    <Card/>
    <Student name="sharan" age={22} isStudent={false} />
    <Student name="Naveen" age="25" isStudent={false} />
    <Student />
    </>
  );
 
}
export default App