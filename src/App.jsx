import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Dynamic Color Clock</h1>

      <div style={styles.clock}>
        {format(time, "EEEE, MMMM do yyyy")}
        <br />
        {format(time, "hh:mm:ss a")}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },

  clock: {
    fontSize: "2rem",
    color: "white",
    backgroundColor: "purple",
    padding: "20px",
    borderRadius: "15px",
    display: "inline-block",
  },
};

export default App;