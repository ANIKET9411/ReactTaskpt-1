import { useState, useEffect } from "react";

const Task5Component = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let api_Key = "9Va3EL/VbH4MyGzFyXndaw==08Nybr7MfHBPcZ2y";

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://api.api-ninjas.com/v1/dadjokes?limit=1`,
        {
          headers: {
            "X-Api-Key": api_Key,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>

      <pre>{data}</pre>
    </div>
  );
};

export default Task5Component;
