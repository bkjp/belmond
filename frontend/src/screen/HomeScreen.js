import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import productListReducer from "../reducers/product.reducer";

function HomeScreen({ history }) {
  const productList = useSelector((state) => state.productListReducer);

  return (
    <div>
      <Row>
        {productList.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
