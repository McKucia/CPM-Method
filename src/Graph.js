import Graph from "react-vis-network-graph";
import React, { Component } from "react";

class CpmGraph extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: {
        layout: {
        },
        edges: {
          color: "white"
        },
        nodes: {
          color: "white"
        },
        physics: {
          enabled: true
        },
        interaction: { multiselect: true, dragView: true }
      },
      graph: {
        nodes: this.props.nodes,
        edges: this.props.edges
      }
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", e => {});
    document.addEventListener("mousemove", e => {});
  }

  events = {
    dragStart: event => {},
    dragEnd: event => {}
  };

  render() {
    return (
      <div id="graph" style={{ height: "500px" }}>
        <Graph
          graph={this.state.graph}
          options={this.state.options}
          events={this.state.events}
        />
      </div>
    );
  }
}

export default CpmGraph;
