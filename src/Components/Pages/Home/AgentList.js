import React from "react";
import { Link } from "react-router-dom";

const AgentList = () => {
  return (
    <div>
      <div className="header-quik mt-3">
        <div className="header-title">এজেন্ট লিস্টঃ</div>
        <div>
          <div className="header-body">
            <div className="header-code">
              <div
                className="data"
                style={{ width: "1000px", fontSize: "30px", textAlign: "left" }}
              >
                একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট
                লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর
                মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ
                করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ
                করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অবথা ফোন
                নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন।
                হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল
                প্লে থেকে ইন্সটল করে নিন।
                <p style={{ textAlign: "center" }}>
                  <Link
                    to="/mg"
                    style={{
                      color: "#5758E9",
                      fontWeight: "normal",
                      textDecoration: "underline",
                    }}
                  >
                    অনলাইন মাষ্টার এজেন্ট লিস্টঃ
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentList;
