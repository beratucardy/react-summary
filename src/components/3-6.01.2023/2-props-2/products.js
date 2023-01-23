import React from "react";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <div>
      <ProductCard name="Ali">
        <h2>Sony Display</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo velit
          ratione dolore eveniet esse itaque maiores eos adipisci nam. Pariatur
          asperiores nulla nostrum blanditiis doloremque facere consequuntur
          neque qui maiores.
        </p>
      </ProductCard>

      <ProductCard>
        <h2>Intel Processor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo velit
          ratione dolore eveniet esse itaque maiores eos adipisci nam. Pariatur
          asperiores nulla nostrum blanditiis doloremque facere consequuntur
          neque qui maiores.
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
