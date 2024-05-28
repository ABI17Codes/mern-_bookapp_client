import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import.meta.env.__VALUE__;

function Books() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
 
  useEffect(() => {
    const fetchdata = async () => {
      try {

        let url = __VALUE__
        if(selectedCategory){
          url += `?category=${selectedCategory}`
        }

        const response = await fetch(url);
        if (!response.ok) {
          console.error(error);
          throw new Error("failed to fetch data");
        }

        const jsondata = await response.json();
        // console.log(jsondata);
        setData(jsondata);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchdata();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Books</h1>
      <p>
        This is where we use NodeJs, Express & MongoDB to grab some data. The
        data below is pulled from a MongoDB database.
      </p>

      <Link to="/createbook">+ Add New Book</Link>


      <h2>Fetch Example</h2>

      <div className="filters">
        <label>Categories</label>
        <select onChange={(e)=> setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">other</option>
        </select>
      </div>


      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul className="books">
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/books/${item.slug}`}>
                <img
                  src={`http://localhost:5000/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;
