import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");

      const arr = resp.data.map((item, index) => ({
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"),
        index: index,
        currencies: item.currencies
          ? Object.keys(item.currencies)
              .map((cur) => item.currencies[cur].name)
              .join("-")
          : "",
      }));

      setCountries(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /* 
  const arr = resp.data.map((item)=> {
    delete item.age;
    return item;
  })
  obje içinde eleman silme
  */

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((item) => (
          <Country {...item} key={item.name} />
        ))}
      </tbody>
    </Table>
  );
};

export default Countries;
