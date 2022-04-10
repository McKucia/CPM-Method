import React, { useState } from "react";

function Input({ addTodo }) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!from || !to) return;
      addTodo(name, from, to, time);
      setFrom("");
      setTo("");
      setName("");
      setTime("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="time"
            type="number"
            value={time}
            onChange={e => setTime(e.target.value, 10)}
          />
          <input
            placeholder="from"
            type="number"
            value={from}
            onChange={e => setFrom(parseInt(e.target.value, 10))}
          />
          <input
            placeholder="to"
            type="number"
            value={to}
            onChange={e => setTo(parseInt(e.target.value, 10))}
          />
        </div>

        <input type="submit" />
      </form>
    );
}

export default Input;