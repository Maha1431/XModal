import React, { useState } from "react";

function Table() {
  const initialdata = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [data, setData] = useState(initialdata);
  const [sortByDate, setSortByDate] = useState(false);

  const sortByDateHandler = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA < dateB) return sortByDate ? -1 : 1;
      if (dateA > dateB) return sortByDate ? 1 : -1;

      // If dates are equal, sort by views
      return b.views - a.views;
    });

    setData(sortedData);
    setSortByDate(!sortByDate);
  };

  const sortByViewsHandler = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        // If views are equal, sort by date
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB - dateA;
      }

      return b.views - a.views;
    });

    setData(sortedData);
  };

  return (
    <div>
      <h1>Data and Views Table</h1>
      <button onClick={sortByDateHandler}>Sort by Date</button>
      <button onClick={sortByViewsHandler}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
