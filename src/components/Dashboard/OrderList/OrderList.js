import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OrderList.css";
function OrderList() {
  const [dbData, setDbData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/item/book`)
      .then((res) => res.json())
      .then((data) => setDbData(data))
  },[])
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Order List</Typography>
            </Box>
          </Col>
        </Row>
        <div className="OrderList">
          <Row>
            <Col>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Pay With</th>
                  <th>Status</th>
                </tr>
                {dbData.map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.title}</td>
                    <td>{data.card}</td>
                    <td>
                      <select style={{border: 'none'}}  name="status" id="status">
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default OrderList;
