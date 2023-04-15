import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadPizza, selectCart } from './actions/index';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';


const Main = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [selectedElement, setSelectedElement] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const myState = useSelector((state) => state.loadPizzaReducer);
  const dispatch = useDispatch();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);
  };


  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const currentIndex = selectedCheckboxes.indexOf(value);
    const newChecked = [...selectedCheckboxes];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedCheckboxes(newChecked);
  };



  function decreCount() {
    if (quantity > 0)
      setQuantity(data => data - 1);
  }
  function increCount() {
    setQuantity(data => data + 1);
  }





  const renderList = myState.map((data) => {
    const { id, name, description, isVeg, rating, price, img_url, size, toppings } = data;
    const oldElements = size[0].items;
    const toppingE = toppings[0].items;
    const elements = oldElements.map((data) => {
      return data.size;
    })

    const newtoppingE = toppingE.map((data) => {
      return data.name;
    })

    const addToCart = (name, price) => {

      const arr = [name, price, selectedElement, ...selectedCheckboxes, quantity];
      dispatch(selectCart(arr));
      setQuantity(0);
      setShowPopup(false);
      setSelectedCheckboxes([]);
      setSelectedElement("");
    }

    // console.log(elements)
    return (
      <Card className="card" key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rating : {rating}</ListGroup.Item>
          <ListGroup.Item>Type : {isVeg ? "Veg" : "Non-Veg"}</ListGroup.Item>
          <ListGroup.Item>Price : {price}/-</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="plusBut" onClick={togglePopup}>+</button>
          {showPopup && (
            <div className="popup">

              <div className="checkbox">
                <div className="size">
                  {elements.map((element) => (
                    <label key={element}>
                      <input
                        type="radio"
                        value={element}
                        checked={selectedElement === element}
                        onChange={handleElementChange}
                      />
                      {element}
                    </label>
                  ))}
                </div>
                <div className="toppings">
                  {newtoppingE.map((element) => (
                    <label key={element}>
                      <input
                        type="checkbox"
                        value={element}
                        checked={selectedCheckboxes.includes(element)}
                        onChange={handleCheckboxChange}
                      />
                      {element}
                    </label>
                  ))}
                </div>
              </div>
              <div className="quant">
                <span>Quantity : </span>
                <button className="butQ" onClick={decreCount}>-</button>{quantity}<button className="butQ" onClick={increCount}>+</button>
              </div>
              <div className="addtoCart">
                <button className="addtoCartbtn" onClick={() => addToCart(name, price)}>Add To Cart</button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    )
  });


  const fetchPizzas = async () => {
    const response = await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68').catch((err) => {
      console.log(err);
    });
    dispatch(loadPizza(response.data));
  };

  useEffect(() => {
    fetchPizzas();
  }, []);


  return (
    <>
      <div className="toggle">
        <form className="sortbtn">
          <label for="sort">Sort by:</label>
          <select id="sort" name="sort">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
          </select>
          <input type="submit" value="Sort" />
        </form>
        <div className="togglebtn">
        <label for="pizza-type-select">Select Pizza Type:</label>
        <select id="pizza-type-select" onchange="togglePizzaType()">
          <option value="veg">Veg</option>
          <option value="nonveg">Non-veg</option>
        </select>
        </div>
      </div>
      <div className="Box">
        <div className="main">
          {renderList}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;