import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";

const DownloadBody = () => {
  const [inputValue, setInputValue] = useState("");

  const getInputValue = (e) => {
    const data = e.target.value;
    setInputValue(data);
  };

  const [dataApiNerinyan, setDataApiNerinyan] = useState([]);
  const [dataApiChimu, setDataApiChimu] = useState([]);
  const id = inputValue;

  console.log(dataApiNerinyan);
  console.log(dataApiChimu);

  const getDataApiNerinyan = async () => {
    var options = {
      method: "GET",
      url: `https://api.nerinyan.moe/d/${id}`,
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios.request(options);
    setDataApiNerinyan(response.data);
  };
  const getDataApiChimu = async () => {
    var options = {
      method: "GET",
      url: `https://api.chimu.moe/v1/download/${id}`,
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios.request(options);
    setDataApiChimu(response.data);
  };

  let selectServer = document.getElementById("selectServer");

  const download = () => {
    if (selectServer.value == 1) {
      getDataApiNerinyan();
      console.log("mirror 1");
    } else if (selectServer.value == 2) {
      getDataApiChimu();
      console.log("mirror 2");
    }
  };
  return (
    <Card style={{ width: "500px" }}>
      <Card.Body>
        <Card.Title>Osu Beatmap Download Mirror</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="inputId">
            <Form.Label>Masukan Id Map Set</Form.Label>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              placeholder="1910670"
              onChange={getInputValue}
              value={inputValue}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example" id="selectServer">
            <option value="1">Nerinyan</option>
            <option value="2">Chimu</option>
          </Form.Select>
        </Form>
        <Button variant="primary" className="mt-3" style={{ width: "100%" }} id="btn" onClick={download}>
          Download
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DownloadBody;
