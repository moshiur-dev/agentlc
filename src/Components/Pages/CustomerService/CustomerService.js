import React, { useEffect, useState } from "react";
import fb from "./../../../Image/fb.png";
import ms from "./../../../Image/messenger.png";
import ws from "./../../../Image/ws.png";
import "./CustomerService.css";
const CustomerService = () => {
  const [customers, setCusomter] = useState([]);
  useEffect(() => {
    fetch("/CustomerService.json")
      .then((res) => res.json())
      .then((data) => setCusomter(data));
  }, []);
  return (
    <div className="CustomerService">
      <div style={{ minHeight: "50px" }}>
        <table className="text-data">
          <tbody>
            <tr>
              <th className="header header-text" colSpan="16">
                LC247 CUSTOMER SERVICE LIST (TIME 10AM TO 10PM)
              </th>
            </tr>
            <tr></tr>
            <tr className="custom-tr">
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>
            {customers?.map((pd, index) => (
              <>
                <tr className="even" key={pd.id}>
                  <td>
                    <b>{pd.type}</b>
                  </td>
                  <td>
                    <b>{pd.name}</b>
                  </td>
                  <td className="text-center">
                    <a href={pd.facebook}>
                      <img
                        src={fb}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: "30px",
                        }}
                      />
                    </a>

                    <a href={pd.messenger}>
                      <img
                        src={ms}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: "30px",
                        }}
                      />
                    </a>
                    <a href={`https://wa.me/${pd.phone}`}>
                      <img
                        src={ws}
                        alt=""
                        style={{
                          height: "25px",
                          width: "25px",
                        }}
                      />
                    </a>
                  </td>
                  <td>
                    <a href={`https://wa.me/${pd.phone}`}>{pd.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" style={{ backgroundColor: "#cccccc" }}>
                    <font size="2">
                      কাস্টমার সার্ভিসে হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে
                      যোগাযোগ যাবে না এবং কাউকে আপনার একাউন্ট এর পাসোয়ার্ড দিবেন
                      না
                    </font>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerService;
