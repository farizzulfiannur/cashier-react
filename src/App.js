import React, { Component } from "react";
import logo from "./logo.svg";
import { Card, Col, Row } from "react-bootstrap";
import "./App.css";
import Navbars from "./components/navigation";
import List from "./components/list";
import Listproduct from "./components/listproduct";
import Hasil from "./components/hasil";
import convertToRupiah from "./utils/rupiah";
import { API_URL } from "./utils/api_url";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        // console.log('response : ', res);
        const data = res.data;
        this.setState({ menus: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.menus);
    const { menus } = this.state;
    return (
      <div>
        <Navbars />
        <Row>
          <List />
          <Col md={7} className="mt-3">
            <Listproduct />
            <Row>
              {menus &&
                menus.map((menu) => (
                  <Col md={4}>
                    <Card style={{ borderRadius: '10px' }} className="mb-3 shadow">
                      <Card.Img variant="top" className="d-flex justify-content-center" src={"assets/img/" + menu.gambar } />
                      <Card.Body className="text-center">
                        <Card.Title> {menu.nama} </Card.Title>
                        <div className="ps-3 pe-3 mb-2 mt-2">
                        <Card.Text className="category-card">
                          {menu.category.nama}
                        </Card.Text>
                        </div>
                        <Card.Text>
                          { convertToRupiah(menu.harga) }
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
          <Hasil />
        </Row>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Navbars />
//       <Row>
//         <List />
//         <Hasil />
//       </Row>
//     </div>
//   );
// }

// export default App;
