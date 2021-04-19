import { Box, Button, Typography } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextTruncate from "react-text-truncate";
import "./ManageService.css";
function ManageService() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const handleEdit = (id) => {};
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:5000/item`)
        .then((res) => res.json())
        .then((data) => setDbData(data));
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Manage Service</Typography>
            </Box>
          </Col>
        </Row>
        <div className="OrderList">
          <Row>
            <Col>
              <table>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
                {/* <div className="d-flex justify-content-center w-100">
                  <span>
                    {dbData.length === 0 && <img src={spinner} alt="" />}
                  </span>
                </div> */}
                {dbData.map((data) => (
                  <tr>
                    <td>{data.title}</td>
                    <td>
                      {
                        <TextTruncate
                          line={1}
                          element="span"
                          truncateText="…"
                          text={data.description}
                        />
                      }
                    </td>
                    <td>
                      {
                        <div className="manageServiceIcon">
                          <img
                            src={data.imageUrl}
                            className="img-fluid"
                            alt="pc"
                          />
                        </div>
                      }
                    </td>
                    <td>${data.price}</td>
                    <td>
                      <Button onClick={handleEdit} color="primary">
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => handleDelete(data._id)}
                        color="secondary"
                      >
                        <Delete />
                      </Button>
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

export default ManageService;
