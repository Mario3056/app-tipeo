import './App.css';

function App() {
  let main_text = "I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans.";
 
  return (
    <div className="container">
      <div className="textBox">
        <p className="text">
          {main_text}
        </p>
      </div>
    </div>
  );
}

export default App;