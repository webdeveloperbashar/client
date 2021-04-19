import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddServices from "./AddServices/AddServices";
import "./Admin.css";
import Book from "./Book/Book";
import BookList from "./BookList/BookList";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageService from "./ManageService/ManageService";
import OrderList from "./OrderList/OrderList";
import Review from "./Review/Review";
import Sidebar from "./Sidebar/Sidebar";
function Admin() {
  return (
    <>
      <Router>
        <div className="allWrapp">
          <div className="sidebarMenu">
            <Sidebar />
          </div>
          <div className="right-content">
            <Switch>
              <Route path="/admin">
                <OrderList />
              </Route>
              <Route path="/admin">
                <BookList />
              </Route>
              <Route path="/admin/bookList">
                <BookList />
              </Route>
              <Route path="/admin/orderList">
                <OrderList />
              </Route>
              <Route path="/admin/addServices">
                <AddServices />
              </Route>
              <Route path="/admin/makeAdmin">
                <MakeAdmin />
              </Route>
              <Route path="/admin/manageService">
                <ManageService />
              </Route>
              <Route path="/admin/book/:id">
                <Book />
              </Route>
              <Route path="/admin/review">
                <Review />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Admin;
