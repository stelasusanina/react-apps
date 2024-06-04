import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import * as math from "mathjs";

export default function App() {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState("");

  function addToText(value) {
    setText(prevText => prevText + value);
 } 

 function calculate(){
  setResult(math.evaluate(text));
}
 
 function clearInput(){
    setText("")
    setResult("")
 }

  return (
    <div className="calc-wrapper">
      <Input text = {text} result = {result} />

      <div className="row">
        <Button symbol = "7" handleClick={addToText}/>
        <Button symbol = "8" handleClick={addToText}/>
        <Button symbol = "9" handleClick={addToText}/>
        <Button symbol = "/" type="operand" handleClick={addToText}/>
      </div>

      <div className="row">
        <Button symbol = "4" handleClick={addToText}/>
        <Button symbol = "5" handleClick={addToText}/>
        <Button symbol = "6" handleClick={addToText}/>
        <Button symbol = "*" type="operand" handleClick={addToText}/>
      </div>

      <div className="row">
        <Button symbol = "1" handleClick={addToText}/>
        <Button symbol = "2" handleClick={addToText}/>
        <Button symbol = "3" handleClick={addToText}/>
        <Button symbol = "+" type="operand" handleClick={addToText}/>
      </div>

      <div className="row">
        <Button symbol = "0" handleClick={addToText}/>
        <Button symbol = "." handleClick={addToText}/>
        <Button symbol = "=" handleClick={calculate}/>
        <Button symbol = "-" type="operand" handleClick={addToText}/>
      </div>

      <Button symbol = "Clear" type="clear" handleClick={clearInput}/>
    </div>
  );
}

