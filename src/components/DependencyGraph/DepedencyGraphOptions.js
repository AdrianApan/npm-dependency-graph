// Graph options
export const options = {
  height: "500px",
  physics: {
    enabled: false
  },
  interaction: {
    hideEdgesOnDrag: false
  },
  layout: {
    hierarchical: false
  },
  nodes: {
    font: {
      face: "Roboto Mono",
      color: "#333333",
      multi: "html"
    },
    shape: "dot",
    size: 7
  },
  edges: {
    color: {
      inherit: "from"
    },
    width: 0.3,
    smooth: {
      enabled: true,
      type: "continuous",
    }
  }
}