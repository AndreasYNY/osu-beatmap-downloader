import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import DownloadBody from "../Components/DownloadBody";

const Download = () => {
  useEffect(() => {
    document.title = "Osu Beatmap Download Mirror";
  });
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <DownloadBody />
      </Container>
    </div>
  );
};

export default Download;
