import axios from "axios";
import Router from "next/router";
import { Upload, message, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import AppLayout from "../components/AppLayout";

const { Dragger } = Upload;

const files = [];

const props = {
  name: "file",
  multiple: true,
  action: "http://127.0.0.1:5000/v1/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);

      const { _id } = info.file.response.data;
      files.push(_id);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Home = () => {
  function analysis() {
    axios
      .post("http://127.0.0.1:5000/v1/analysis", {
        email: "ghks0630@naver.com",
        files,
      })
      .then((res) => {
        message.success(`분석 요청 전송 완료.`);
      })
      .catch((err) => {
        message.error(`분석 요청 전송 완료.`);
      });
  }

  return (
    <AppLayout>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <Button type="text" onClick={analysis}>
        Analysis
      </Button>
    </AppLayout>
  );
};

export default Home;
