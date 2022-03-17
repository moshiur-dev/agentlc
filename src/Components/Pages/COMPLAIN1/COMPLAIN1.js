import React, { useEffect, useState } from "react";
import ws from "./../../../Image/ws.png";
import "./COMPLAIN1.css";
const COMPLAIN1 = () => {
  const [complain, setComplain] = useState([]);
  useEffect(() => {
    fetch("/COMPLAIN1.json")
      .then((res) => res.json())
      .then((data) => setComplain(data));
  }, []);
  return (
    <div className="">
      <div className="header-quik mt-3 COMPLAIN1">
        <div className="header-title">AGENT ID: 3 - এডমিন</div>
        <div>
          <div className="header-body">
            <div className="header-code">
              <div
                className=""
                style={{ width: "1000px", fontSize: "30px", textAlign: "left" }}
              >
                <div
                  className=""
                  style={{ width: "95%", backgroundColor: "#fbfedf" }}
                >
                  <table
                    className="agent-admin-content"
                    style={{ width: "95%" }}
                  >
                    <tbody className="admin-agent">
                      <tr>
                        <th>MOBILE APP LINK</th>
                      </tr>
                      <tr>
                        <td className="header">
                          <div
                            className=" p-3"
                            style={{
                              width: "98%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              backgroundColor: "#fbfedf",
                            }}
                          >
                            <a
                              href={`https://wa.me/${complain.number} `}
                              target="_"
                            >
                              <img
                                src={ws}
                                style={{ width: "100px" }}
                                alt=".."
                              />
                            </a>{" "}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="mb-4">PHONE NUMBER</th>
                      </tr>
                      <tr>
                        <td className="COMPLAIN1-NUMBER">
                          <div
                            className=""
                            style={{
                              width: "98%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              backgroundColor: "#fbfedf",
                            }}
                          >
                            <a
                              href={`https://wa.me/${complain.number} `}
                              target="_"
                            >
                              <h1 className="p-4">{complain.number}</h1>
                            </a>{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COMPLAIN1;
