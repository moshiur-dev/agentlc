import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import "./Tutorial.css";

const Playlist1 = () => {
  const [videos, setVideos] = useState([]);
  const [displayVideo, setDisplayVideo] = useState([]);

  useEffect(() => {
    fetch("/Playlist1.json")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setDisplayVideo(data);
      });
  }, []);

  const handleOnChange = (e) => {
    const searchText = e.target.value;
    const filterVideo = videos.filter((video) =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayVideo(filterVideo);
  };

  return (
    <div>
      <div style={{ paddingLeft: "22px" }}>
        <div className="input-group  video-search w-50">
          <input
            style={{ width: "50px" }}
            type="text"
            className="form-control"
            placeholder="Search Tutorial.."
            onChange={handleOnChange}
          />
        </div>
        <div className="playlist">
          {displayVideo.map((video) => (
            <div
              className="video-player-bg"
              style={{ width: "530px" }}
              key={video.id}
            >
              <div>
                <VideoPlayer
                  controls={true}
                  src={video.url}
                  width="530"
                  height="300"
                />
              </div>
              <p
                style={{
                  color: "black",
                  fontWeight: "700",
                  textAlign: "start",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist1;
