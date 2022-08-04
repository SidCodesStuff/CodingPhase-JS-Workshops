import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [fileType, setFileType] = useState(null);
  const [currentTime, setCurrentTime] = useState(58);
  const [totalTime, setTotalTime] = useState(100);
  const [loadingFile, setLoadingFile] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const handleFileSelection = (e) => {
    const { files } = e.target;
    const reader = new FileReader();

    switch (true) {
      case files[0].type.includes("audio"):
      case files[0].type.includes("video"):
        let ft = files[0].type.split("/")[0];
        setFileType(ft);
        setSelectedFile(files[0]);
        reader.addEventListener("load", (e) => {
          const file = document.getElementById(ft);
          setLoadingFile(true);
          setFileSrc(reader.result);
          file.addEventListener("canplaythrough", () => {
            setCurrentTime(0);
            setTotalTime(file.duration);
            setLoadingFile(false);
            file.addEventListener("ended", (e) => {
              alert("Hello!")
              setCurrentTime(0);
              setIsPaused(true);
            });
            file.addEventListener("timeupdate", (e) => {
              console.log("Time!:", e, file.currentTime);
              setCurrentTime(file.currentTime);
            });
          });
        });
        reader.readAsDataURL(files[0]);
        break;
      default:
        setFileType("neither");
        setSelectedFile(null);
        break;
    }
  };

  const togglePlay = () => {
    const file = document.getElementById(fileType);
    if (file.paused) {
      play();
    } else {
      pause();
    }
  };

  const play = () => {
    const file = document.getElementById(fileType);
    console.log("🚀 ~ file: App.js ~ line 32 ~ play ~ file", file);
    file.play();
    setIsPaused(false);
  };
  const pause = () => {
    const file = document.getElementById(fileType);
    file.pause();
    setIsPaused(true);
  };

  const convertToTimestamp = (value) => {
    var hours = parseInt(value / 3600);

    value %= 3600;
    var minutes = Math.floor(value / 60);

    value %= 60;
    var seconds = Math.floor(value);

    return `${hours > 0 ? `${hours}:` : ""}${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };
  return (
    <div className="App">
      <input
        type="file"
        name="file_input"
        id="file_input"
        onChange={handleFileSelection}
      />
      {fileType === "audio" && (
        <>
          <h1>Audio Player</h1>
          <audio id="audio" src={fileSrc}></audio>
          <div className="audio-play" onClick={togglePlay}>
            <i
              className={`mdi mdi-${
                loadingFile ? "loading mdi-spin" : isPaused ? "play" : "pause"
              }`}
            ></i>
          </div>
        </>
      )}
      {fileType === "video" && (
        <>
          <h1>Video Player</h1>
          <div className="player">
            <video id="video" src={fileSrc} type={selectedFile.type}></video>
            <div className="controls">
              <div className="timestamp">
                <p>
                  {convertToTimestamp(currentTime)}/
                  {convertToTimestamp(totalTime)}
                </p>
              </div>
              <div className="video-play" onClick={togglePlay}>
                <i
                  className={`mdi mdi-${
                    loadingFile
                      ? "loading mdi-spin"
                      : isPaused
                      ? "play"
                      : "pause"
                  }`}
                ></i>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                // value={currentTime}
                value={(currentTime * 100) / totalTime}
              />
            </div>
          </div>
        </>
      )}
      <label className="btn" htmlFor="file_input">
        {fileType === null ? "Choose" : "Change"} File
      </label>
    </div>
  );
}

export default App;
