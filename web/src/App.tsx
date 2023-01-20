import './styles/global.css';

import { Habit } from "./components/Habit";

export function App(){
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={10}/>
      <Habit completed={25}/>
    </div>
  )
}