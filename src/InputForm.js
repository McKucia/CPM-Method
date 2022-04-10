import React, { useState, useEffect } from "react";
import './InputForm.css';
import Input from './Input';

function InputForm({callback}) {
  const [edges, setEdges] = useState([ 
      {name: "edge", from: 1, to: 2, label: "3"},
      {name: "edge", from: 2, to: 3, label: "4"},
      {name: "edge", from: 2, to: 4, label: "6"},
      {name: "edge", from: 3, to: 5, label: "7"},
      {name: "edge", from: 5, to: 7, label: "1"},
      {name: "edge", from: 4, to: 6, label: "3"},
      {name: "edge", from: 4, to: 7, label: "2"},
      {name: "edge", from: 4, to: 6, label: "3"},
      {name: "edge", from: 6, to: 7, label: "4"},
      {name: "edge", from: 7, to: 8, label: "1"},
      {name: "edge", from: 8, to: 9, label: "2"}
  ]);

  useEffect(() => {
    callback(edges);
  }, []);

  const addTodo = (name, from, to, time) => {
    const newEdges = [...edges, { from: from, to: to, label: time, name: name }];
    setEdges(newEdges);
    callback(newEdges);
  };

  return (
    <div id="input-form">
        <ul>
            <li key="123123123">
              <div class="list-item list-label">Nazwa</div>
              <div class="list-item list-label">Czas</div>
              <div class="list-item list-label">Start</div>
              <div class="list-item list-label">Koniec</div>
            </li>
            { edges.map((edge, index) => (
                <li key={index}>
                    <div class="list-item">{edge.name}</div>
                    <div class="list-item">{edge.label}</div>
                    <div class="list-item">{edge.from}</div>
                    <div class="list-item">{edge.to}</div>
                </li>
            )) }
        </ul>
        <Input addTodo={addTodo} />
    </div>
  );
}

export default InputForm;
