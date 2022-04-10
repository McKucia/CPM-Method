import './App.css';
import CpmGraph from './Graph';
import InputForm from './InputForm';
import React, { useState, useEffect } from "react";

class Node {
  prevs = [];
  nexts = [];
  start = 0;
  end = 0;
  margin = 0;

  constructor(id) {
    this.id = id;
  }
}

const App = () => {
  const [edges, setEdges] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [key, setKey] = useState(0);

  const parseNodes = (edges) => {
    let nodesTmp = [];
  
    edges.map((edge) => {
      nodesTmp.findIndex(el => el.id === edge.from) == -1 ? nodesTmp.push(new Node(edge.from)) : console.log('');
      nodesTmp.findIndex(el => el.id === edge.to) == -1 ? nodesTmp.push(new Node(edge.to)) : console.log('');
    })
  
    edges.map((edge) => {
      let nodeTmp = nodesTmp.find(el => el.id == edge.to);
      nodeTmp.prevs.push(edge.from);
    });

    return calculateLS(nodesTmp, edges);
  }

  function compare(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }

  const calculateLS = (nodes, edges) => {
    nodes.sort(compare);
    nodes.map(node => {

      if(node.prevs.length <= 0 ) {
        node.start = 0;
      }
      else if(node.prevs.length == 1) {
        let prevNode = nodes.find(el => el.id == node.prevs[0]);
        let time = parseInt(edges.find(edge => edge.to == node.id && edge.from == prevNode.id).label);
        node.start = prevNode.start + time;
      }
      else {
        let max = 0;

        node.prevs.map(prev => {
          let prevNode = nodes.find(el => el.id == prev);
          let time = parseInt(edges.find(edge => edge.to == node.id && edge.from == prevNode.id).label);
          let total = prevNode.start + time;

          if(total > max) 
            max = total;
        })

        node.start = max;
      }

    });

    return display(nodes);
  }

  const display = (nodes) => {
    nodes.map(el => {
      if(el.id > 0)
        el.label = el.id + "\n" + el.start + "/" + el.margin + "/" + el.end;
      else 
        el.label = el.id + "\n" + "0/0/0";
    })

    return nodes;
  }

  const handleCallback = (childEdges) => {
    setEdges(childEdges);
    
    const parsedNodes = parseNodes(childEdges);
  
    setNodes(parsedNodes);
    setKey(Math.random());
    
  }
  
  return (
    <div className="App">
      <CpmGraph edges={edges} nodes={nodes} key={key}/>
      <InputForm callback={handleCallback}/>
    </div>
  );
  
}

export default App;
