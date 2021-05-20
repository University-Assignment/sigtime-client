import AppLayout from "../components/AppLayout";
import { Upload, message, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const fileList = [];

const props = {
  name: "file",
  multiple: true,
  action: "http://127.0.0.1:5000/v1/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);

      const { _id } = info.file.response.data;
      fileList.push(_id);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Home = () => {
  function analysis() {
    alert(fileList);
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
