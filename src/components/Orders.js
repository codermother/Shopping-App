import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import Order from "./Order";

function Orders() {
  const userState = useSelector((userState) => userState.handleUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userState) {
      db.collection("users")
        .doc(userState?.state._delegate.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [userState]);

  return (
    <div className="container">
      <h1 className="mb-5 mt-5 dark-text">Orders</h1>
      {orders.length > 0 ? (
        <div className="">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      ) : (
        <div className="">You don't have any orders</div>
      )}
    </div>
  );
}

export default Orders;
