const p = {
  name: "node-overview",
  version: "0.1.0",
  scripts: {
    start: "react-scripts start",
    build: "react-scripts build",
    test: "react-scripts test --env=jsdom"
  },
  private: true,
  dependencies: {
    ajv: "^6.2.1",
    "chart.js": "^1.1.1",
    react: "^16.2.0",
    "react-chartjs": "^1.2.0",
    "react-dom": "^16.2.0",
    "spectacle-code-slide": "^0.5.2",
    "spectacle-scripts": "2.0.0"
  }
};

export default JSON.stringify(p, null, 2);
