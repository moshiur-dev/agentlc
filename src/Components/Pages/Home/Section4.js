import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className="header-quik mt-3">
      <div className="header-title">এজেন্ট কয় প্রকারঃ</div>
      <div>
        <div className="header-body">
          <div className="header-code">
            <div
              className="data"
              style={{ width: "1000px", fontSize: "30px", textAlign: "left" }}
            >
              <p>
                <Link
                  to="/as"
                  style={{
                    color: "#5758E9",
                    fontWeight: "normal",
                    textDecoration: "underline",
                  }}
                >
                  অনলাইন সুপার এজেন্ট লিস্টঃ
                </Link>
                সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে
                দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন
                কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।
              </p>
              <p>
                <Link
                  to="/mg"
                  style={{
                    color: "#5758E9",
                    fontWeight: "normal",
                    textDecoration: "underline",
                  }}
                >
                  অনলাইন মাষ্টার এজেন্ট লিস্টঃ
                </Link>{" "}
                অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে
                পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার
                এজেন্ট এর কাছে অভিযোগ করতে হবে। বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক
                করুন।
              </p>
              <p style={{ textAlign: "center", lineHeight: "0" }}>
                <Link
                  to="/as"
                  style={{
                    color: "#5758E9",
                    fontWeight: "normal",
                    textDecoration: "underline",
                  }}
                >
                  বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক করুন।
                </Link>
              </p>
              <p>
                লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল মাষ্টার এজেন্ট রা, শুধু ইউজার
                একাউন্ট একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন
                প্রতিটি ইউজার কে নিজ দায়িত্বে লেনদেন করতে হবে। তাদের নামে কোন
                অভিযোগ কারো কাছে করা যাবে না।
              </p>
              <p>
                লোকাল মাষ্টার এজেন্টঃ এই সব এজেন্ট সাধারনত – নিজের এলাকায় বা
                পরিচিত দের সাথে লেনদেন করে । যারা আগে বাজি ধরিয়ে দিত, তাদের কেই
                মুলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না
                এবং তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের সাথে
                অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে তার দায়ভার
                পুরোটাই আপনার।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
