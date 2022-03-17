import React, { useEffect, useState } from "react";
import fb from "./../../../../src/Image/fb.png";
import ms from "./../../../../src/Image/messenger.png";
import ws from "./../../../../src/Image/ws.png";
import "./Home.css";
const HeaderQuik = () => {
  const [customers, setCusomter] = useState([]);

  useEffect(() => {
    fetch("/Masteragent.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };
        setCusomter(shuffle(data));
      });
  }, []);

  return (
    <div className="header-quik mt-3">
      <div className="header-title">QUICK MASTER AGENT NUMBER:</div>
      <div>
        <div className="header-body">
          <div className="header-code">
            <table className="data" style={{ width: "500px" }}>
              <tbody>
                {customers.slice(0, 1).map((pd, index) => (
                  <tr key={pd.id}>
                    <td>
                      <b>AGENT ID:</b>
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
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderQuik;
