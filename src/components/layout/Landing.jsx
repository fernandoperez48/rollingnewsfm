import Button from "react-bootstrap/Button";
import React from "react";
import "./Landing.css";

const Landing = ({ addFavs }) => {
  return (
    <main className="components">
      <Button variant="danger" onClick={() => addFavs()}>
        Sumar favs
      </Button>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          consequatur fugiat rerum laborum aliquid aspernatur facilis unde nemo
          assumenda in sunt dolores perferendis! Voluptate incidunt rem nulla
          consequuntur quisquam recusandae.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          consequatur fugiat rerum laborum aliquid aspernatur facilis unde nemo
          assumenda in sunt dolores perferendis! Voluptate incidunt rem nulla
          consequuntur quisquam recusandae.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          consequatur fugiat rerum laborum aliquid aspernatur facilis unde nemo
          assumenda in sunt dolores perferendis! Voluptate incidunt rem nulla
          consequuntur quisquam recusandae.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          consequatur fugiat rerum laborum aliquid aspernatur facilis unde nemo
          assumenda in sunt dolores perferendis! Voluptate incidunt rem nulla
          consequuntur quisquam recusandae.
        </p>
      </div>
    </main>
  );
};

export default Landing;
