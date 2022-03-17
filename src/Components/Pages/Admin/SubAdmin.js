import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fb from "./../../../Image/fb.png";
import ms from "./../../../Image/messenger.png";
import ws from "./../../../Image/ws.png";

const SubAdmin = () => {
  const [customers, setCusomter] = useState([]);
  const [displayAgent, setDisplayAegnt] = useState([]);

  useEffect(() => {
    fetch("/Subadmin.json")
      .then((res) => res.json())
      .then((data) => {
        setCusomter(data);
        const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };
        setDisplayAegnt(shuffle(data));
      });
  }, []);

  const handleSearch = (e) => {
    const searchId = e.target.value;

    const machedId = customers.filter((agent) => agent.id.includes(searchId));
    setDisplayAegnt(machedId);
  };

  return (
    <div className=" CustomerService">
      <div>
        <input
          type="number"
          id=""
          placeholder="Search Agent ID.."
          className="input-id"
          onChange={handleSearch}
        />{" "}
        <i className="fas fa-search" />
      </div>
      <div style={{ minHeight: "50px" }} className="mt-3">
        <table className="text-data">
          <tbody>
            <tr>
              <th className="header header-text" colSpan="16">
                LC247 SUB ADMIN LIST
              </th>
            </tr>
            <tr></tr>
            <tr className="custom-tr">
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">ID NO</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
              <th align="center">ADMIN</th>
            </tr>
            {displayAgent?.map((pd, index) => (
              <>
                <tr className="even" key={pd.id}>
                  <td>
                    <b>{pd.type}</b>
                  </td>
                  <td>
                    <b>{pd.name}</b>
                  </td>
                  <td>
                    <b>{pd.id}</b>
                  </td>
                  <td className="text-center">
                    {pd.facebook && (
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
                    )}

                    {pd.messenger && (
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
                    )}
                    {pd.phone && (
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
                    )}
                  </td>
                  <td>
                    <a href={`https://wa.me/${pd.phone}`}>{pd.phone}</a>
                  </td>
                  <td>
                    <Link to="/cp1">COMPLAIN</Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" style={{ backgroundColor: "#cccccc" }}>
                    <font size="2">
                      হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন
                      করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না
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

export default SubAdmin;
