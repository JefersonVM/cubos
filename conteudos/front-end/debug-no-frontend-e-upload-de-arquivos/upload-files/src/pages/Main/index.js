import { useState } from "react";
import "./style.css";
import api from "../../services/api";

function Main() {
  const [file, setfile] = useState("");
  const [image, setimage] = useState("");

  async function handleUploadformData(e) {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/upload/multpart", formData, {
        headers: {
          "Content-Type": `multpart/form-data`,
        },
      });
      const {url} = response.data;
      setimage(url);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-main">
      <input type="file" onChange={(e) => setfile(e.target.files[0])} />
      <button
        type="button"
        className="btn-purple"
        onClick={handleUploadformData}
      >
        Upload form-data
      </button>
      <button className="btn-orange">Upload base64</button>

      <div className="container-image">
        {image && <img src="image" alt="upload" />}
      </div>
    </div>
  );
}

export default Main;
