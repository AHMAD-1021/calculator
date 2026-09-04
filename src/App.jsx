import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

// Calcutor app
export default function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function addTwoNumbers(number1, number2) {
    return number1 + number2;
  }

  //handleclick
  const handleClick = (value) => { setInput((text) => text + value); };
  //handleclear
  const handleClear = () => { setInput(""); };
  // handle delete
  const handleDelete = () => (setInput((text) => text.slice(0, -1)));
  //handleCalculate
  const handleCalculate = () => {
    try {
      // Calculation
      const result = eval(input).toString();
      setInput(result);

      // History
      const historyItem = `${input} = ${result}`;
      setHistory((text) => [...text, historyItem]);
    } catch (error) { setInput("error"); };
  }

  const handleHistory = () => {
    console.log(JSON.parse(localStorage.getItem("history")));
    setShowHistory(true);
  };

  const handleCloseHistory = () => {
    setShowHistory(false)
  }

  const handleSetValue = (value) => setInput(slice => text + value);

  const buttonConfig = [
    {
      onClick: handleClear,
      value: "CE",
      className: "new"
    },
    {
      onClick: handleDelete,
      value: "x",
      className: "new"
    },
    {
      onClick: handleHistory,
      value: "HIS",
      className: "new"
    },
    {
      onClick: () => handleClick("/"),
      value: "/",
      className: "blu"
    },
    {
      onClick: () => handleClick("7"),
      value: "7",
      className: "new"



    },
    {
      onClick: () => handleClick("8"),
      value: "8",
      className: "new"


    },
    {
      onClick: () => handleClick("9"),
      value: "9",
      className: "new"
    },

    {
      onClick: () => handleClick("*"),
      value: "x",
      className: "blu"

    },
    {
      onClick: () => handleClick("4"),
      value: "4",
      className: "new"
    },
    {
      onClick: () => handleClick("5"),
      value: "5",
      className: "new"
    },
    {
      onClick: () => handleClick("6"),
      value: "6",
      className: "new"

    },

    {
      onClick: () => handleClick("-"),
      value: "-",
      className: "blu"
    },
    {
      onClick: () => handleClick("1"),
      value: "1",
      className: "new"
    },
    {
      onClick: () => handleClick("2"),
      value: "2",
      className: "new"
    },
    {
      onClick: () => handleClick("3"),
      value: "3",
      className: "new"
    },
    {
      onClick: () => handleClick("+"),
      value: "+",
      className: "blu",
    },
    {
      onClick: () => handleClick("0"),
      value: "0",
      className: 'last button-core'
    },
    {
      onClick: () => handleClick("."),
      value: ".",
      className: "button-core"
    },
    {
      onClick: handleCalculate,
      value: "=",
      className: "blu button-core",
    },
  ];

  return (
    <div className='big'>
      {showHistory && <div className="history-popup pop">
        <button onClick={handleCloseHistory}>X</button>
        <div>
          {history.map((item) => (
            <div>{item}</div>
          ))}
        </div>

      </div>}
      <div className='first'>{input || "0"}</div>
      <div className='second'>
        {buttonConfig.map((item) => <button className={item.className} onClick={item.onClick}>{item.value}</button>)}
      </div>
    </div>
  );
}