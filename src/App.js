
import Task1 from"./Components/day2/task1"
import Task2 from"./Components/day2/task2"
import Task3 from"./Components/day2/task3"
import Task4 from"./Components/day2/task4"
import Task5 from"./Components/day2/task5"
import Task6 from"./Components/day2/task6"
import Task7 from"./Components/day2/task7"
import Task8 from"./Components/day2/task8"


export default 
function App() {
  return (
    <div className="App">
     
     <Task1  name="Raneem" /> <hr></hr>
     <Task2 lable="Click Me" /> <hr></hr>
      <Task3 name="Laptop" price="$999" descrbtion="Apowerful laptop for work and play"/><hr></hr>
      <Task4 username="raneem" Email="raneem@gmail.com" Age="23" /><br></br> <hr></hr>
      <Task5/> <hr></hr>
      <Task6 hLink="#" aLink="#" ctLink="#"/><hr></hr> 
      <Task7 label="click me" handleClick={() => alert("Button clicked")} /> <hr></hr>
        <Task8/>

      
        </div>
    
  );
}

