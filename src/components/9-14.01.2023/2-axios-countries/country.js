import React from "react";

const Country = (props) => {
  const { flag, name, population, capital, index, currencies } = props;
  return (
    <tr key={name}>
      <td>{index + 1}</td>
      <td style={{ width: "320px" }}>
        <img src={flag} alt="" />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{capital}</td>
      <td>{currencies}</td>
    </tr>
  );
};

export default Country;
