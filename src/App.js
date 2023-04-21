import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
	  <p>This website is made in ReactJS, using <code>create-react-app</code> as its generator.</p>
	  <p>This React app uses a GitHub Actions workflow file to build itself into a static website.</p>
	  <p>Then, the GitHub Actions workflow file takes that static website and publishes it as a GitHub Pages website.</p>
	  <p>React apps can be deployed to anywhere that supports a static website, if you use standard ReactJS.</p>
	  <p>Some React frameworks make you use or strongly want you to use server-side rendering - we don't need that!</p>
    </div>
  );
}

export default App;
