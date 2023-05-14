import { useRef, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const DownloadBody = () => {
  const choseLink = useRef(null);
  const [beatmapSetId, setBeatmapSetId] = useState("");

  const handleDownload = () => {
    switch (choseLink.current.value) {
      case "1":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "2":
        if (beatmapSetId !== "") {
          window.open(`https://api.nerinyan.moe/d/${beatmapSetId}?novideo=1`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "3":
        if (beatmapSetId !== "") {
          window.open(`https://api.chimu.moe/v1/download/${beatmapSetId}`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      case "4":
        if (beatmapSetId !== "") {
          window.open(`https://beatconnect.io/b/${beatmapSetId}/`, "_blank");
        } else {
          window.alert("Please Enter Beatmapsets Id First ");
        }
        break;
      default:
        break;
    }
  };

  const getInputValue = (e) => {
    const data = e.target.value;
    setBeatmapSetId(data);
  };

  return (
    <Card style={{ width: "500px" }}>
      <Card.Body>
        <Card.Title>Osu Beatmap Download Mirror</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="inputId">
            <Form.Label>Beatmapset Id</Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              placeholder="1910670"
              onChange={getInputValue}
              value={beatmapSetId}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example" ref={choseLink}>
            <option value="1">Nerinyan</option>
            <option value="2">Nerinyan (No Video)</option>
            <option value="3">Chimu</option>
            <option value="4">Beatconnect</option>
          </Form.Select>
        </Form>
        <Button variant="primary" className="mt-3" style={{ width: "100%" }} id="btn" onClick={() => handleDownload()}>
          Download
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DownloadBody;
