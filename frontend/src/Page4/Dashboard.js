import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import AdminCard from "./Components/AdminCard";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminState";
import Loader from "../CustomJS/Loader";
import axios from "../axios";
import { Toast, Toasty } from "./Toasty";
import queryString from "query-string";
import { useLocation } from "react-router";

function Dashboard(props) {
  const { search } = useLocation();
  const { q } = queryString.parse(search);
  // const imgUrl = process.env.REACT_APP_API_URL;
  const imgUrl = process.env.REACT_APP_IMAGE_FETCH_API;

  const { signOut, isModified } = useContext(AdminContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl = process.env.REACT_APP_API_URL + "/api";
      let token = localStorage.getItem("token");

      // console.log(token);
      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      };

      const res = await axios.get(`/admin/allproducts`, config);
      return res;
    };

    //console.log("dasboard")
    //   if (res.status === 200) {
    //     console.log("admin dashboard")
    //   setProducts(res.data);
    // }

    setProducts([]);
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((e) => signOut());
  }, [isModified]);

  const CardArray = products;
  var words;
  if (q) words = q.toLowerCase().split(" ");
  else words = " ".toLowerCase().split(" ");

  var filteredCardArray = {};
  if (CardArray.length !== 0) {
    filteredCardArray = CardArray.filter((i) =>
      words.some(
        (word) =>
          i.name.toLowerCase().includes(word) ||
          i.description.toLowerCase().includes(word) ||
          i._id === word
      )
    );
  }

  return (
    <>
      <div className="dashboard">
        <div>
          <div className="addContainer">
            <Link to="/addProduct">
              <button className="add">
                Add Product <AddCircleOutlineOutlinedIcon fontSize="small" />
              </button>
            </Link>
          </div>
          {products.length !== 0 ? (
            filteredCardArray
              .sort(function (a, b) {
                let d1 = new Date(a.createdAt).getTime();
                let d2 = new Date(b.createdAt).getTime();
                return d2 - d1;
              })
              .map((i, index) => (
                <AdminCard
                  isDarkMode={props.isDarkMode}
                  bg={index}
                  id={i._id}
                  image={`${imgUrl}${i.image}`}
                  name={i.name}
                  price={i.price}
                  category={i.category}
                  quantity={i.quantity}
                  createdAt={i.createdAt}
                />
              ))
          ) : (
            <Loader isDarkMode={props.isDarkMode} />
          )}
        </div>
        {Toasty()}
      </div>
    </>
  );
}

export default Dashboard;
