import {
  Add,
  AddShoppingCart,
  Dashboard,
  FormatListNumberedRtl,
  GroupAdd
} from "@material-ui/icons";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import RateReviewIcon from "@material-ui/icons/RateReview";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import logo from "../../image/logo-light.png";
import "./Sidebar.css";
function Sidebar() {
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item/admin`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const findAdmin = dbData.find((u) => u.admin === loggedIn.email);
  return (
    <>
      <div className="sidebar">
        <nav>
          <Container>
            <strong>
              <img
                src={logo}
                className="img-fluid"
                alt="logo"
                width={{ width: "160px" }}
              />
            </strong>
            {findAdmin === undefined ? (
              <div>
                <li>
                  <Link to="/admin/book">
                    <span className="icon">
                      <AddShoppingCart />
                    </span>
                    Book
                  </Link>
                </li>
                <li>
                  <Link to="/admin/bookList">
                    <span className="icon">
                      <ListAltIcon />
                    </span>
                    Booking List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/review">
                    <span className="icon">
                      <RateReviewIcon />
                    </span>
                    Review
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="icon">
                      <PowerSettingsNewIcon />
                    </span>
                    Logout
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/admin/orderList">
                    <span className="icon">
                      <FormatListNumberedRtl />
                    </span>
                    Order List
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addServices">
                    <span className="icon">
                      <Add />
                    </span>
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link to="/admin/makeAdmin">
                    <span className="icon">
                      <GroupAdd />
                    </span>
                    Make Admin
                  </Link>
                </li>
                <li>
                  <Link to="/admin/manageService">
                    <span className="icon">
                      <Dashboard />
                    </span>
                    Manage Services
                  </Link>
                </li>
              </div>
            )}
          </Container>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
