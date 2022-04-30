import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

//URL for fetching tour data

const url = "https://course-api.com/react-tours-project";

const App = () => {
  // All States
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetchind Data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // After initial page render, tours will be showed
  useEffect(() => {
    fetchTours();
  }, []);

  // if the loading is true, then i will show loading component
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if there is no tour left, then it will show there is no tour left and a button which will load again fetch the tours
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  // Remove function
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
