require("dotenv").config();
const express = require("express");
const multer = require("./multer");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  endpoint: new aws.Endpoint(process.env.ENDPOINT_S3),
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
});

const app = express();

app.use(express.json());

app.post("/upload", multer.single("arquivo"), async (req, res) => {
  const { file } = req;
  try {
    const arquivo = await s3
      .upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: `imagens/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
      .promise();

    return res.json({
      url: arquivo.Location,
      path: arquivo.Key,
    });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.post("/upload-multiple", multer.array("arquivo"), async (req, res) => {
  const { files } = req;
  try {
    const resultado = [];
    for (const file of files) {
      const arquivo = await s3
        .upload({
          Bucket: process.env.BACKBLAZE_BUCKET,
          Key: `imagens/multiplas/${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      resultado.push({
        url: arquivo.Location,
        path: arquivo.Key,
      });
    }

    return res.json(resultado);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.get("/arquivos", async (req, res) => {
  try {
    const arquivos = await s3
      .listObjects({
        Bucket: process.env.BACKBLAZE_BUCKET,
      })
      .promise();

    const files = arquivos.Contents.map((file) => {
      return {
        url: `${process.env.ENDPOINT_S3}/${process.env.BACKBLAZE_BUCKET}/${file.Key}`,
        path: file.Key,
      };
    });

    return res.json(files);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.delete("/arquivos/:path", async (req, res) => {
  const { path } = req.params;
  try {
    await s3
      .deleteObject({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
      })
      .promise();

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

);

app.listen(process.env.PORT);
