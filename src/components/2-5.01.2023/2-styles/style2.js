import React from "react";

const Style2 = () => {

    const styleTitle={
        fontSize:"2rem",
        color:"red",
        fontWeight:"bold",
        textAlign:"center"
    }

  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        adipisci quae saepe qui dolorum, temporibus doloribus aliquam pariatur
        repellat quam voluptatem maxime ut tenetur ullam, magni ab velit
        explicabo aliquid!
      </p>

      <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        adipisci quae saepe qui dolorum, temporibus doloribus aliquam pariatur
        repellat quam voluptatem maxime ut tenetur ullam, magni ab velit
        explicabo aliquid!
      </p>
    </div>
  );
};

export default Style2;
