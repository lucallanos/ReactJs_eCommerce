import React, { useState, useEffect } from "react";
import "./ItemCount.css";
// REACT ROUTER DOM
import { Link } from "react-router-dom";

function ItemCount({ init, stock, onAdd }) {
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    setInitial(init);
  }, [init]);

  const handleCountDown = () => {
    return initial > 1 && setInitial(initial - 1);
  };

  const handleCountUp = () => {
    return initial < stock && setInitial(initial + 1);
  };

  const addItems = () => {
    onAdd(initial);
    setInitial(1);
  };

  return (
    <div className="container">
      <div className="itemCount">
        <button className="subtraction-btn" onClick={handleCountDown}>
          -
        </button>
        <p className="count">{initial}</p>
        <button className="sum-btn" onClick={handleCountUp}>
          +
        </button>
        <Link to="/cart">
          <button className="add-btn" onClick={addItems}>
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCount;

/*
class ItemCount extends Component {
  constructor({ init, stock, item }) {
    super();

    this.state = {
      //Comprobamos que el valor inicial del producto sea menor que el stock disponible
      //del mismo, de no ser así nuestro valor inicial será 0
      initial: init <= stock ? init : 0,
      //Usamos el Nullish coalescing operator (??) para asignarle 0 en el caso de
      //que no se le asigne nada por parámetro al stock
      stock: stock ?? 0,
      item: item ?? "-",
    };

    //Esto en el caso de que no usemos arrow function
    //this.handleCountUp = this.handleCountUp.bind(this):
  }

  //Verificamos que la cantidad de productos no sea mayor que el stock disponible del mismo
  handleCountUp = () => {
    if (this.state.initial < this.state.stock) {
      this.setState({ initial: this.state.initial + 1 });
    }
  };

  //Verificamos que el usuario no quiera agregar productos negativos
  handleCountDown = () => {
    if (this.state.initial > 0) {
      this.setState({ initial: this.state.initial - 1 });
    }
  };

  //Verificamos que los productos que se van a agregar al carrito sean mayores a 0, e imprimimos
  //un mensaje por consola una vez agregados
  onAdd = () => {
    if (this.state.initial > 0) {
      this.setState({ initial: 0 });
      console.log("Products added successfully");
    }
  };

  render() {
    return (
      <div className="container">
        <p>{this.state.item}</p>
        <div className="itemCount">
          <button className="subtraction-btn" onClick={this.handleCountDown}>
            -
          </button>
          <p className="count">{this.state.initial}</p>
          <button className="sum-btn" onClick={this.handleCountUp}>
            +
          </button>
          <button className="add-btn" onClick={this.onAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default ItemCount;
*/
