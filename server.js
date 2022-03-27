import QRCode from 'qrcode';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post('/get-qr-code', (req, res) => {
  try {
    const { stringToConvert } = req.body;

    const qr = QRCode.toString(
      stringToConvert,
      { errorCorrectionLevel: 'H' },
      (err, canvas) => {
        if (err) throw err;
        return canvas;
      }
    );
    return res.status(200).json({ body: { qr } });
  } catch (error) {
    return res.send(500).send({ error, msg: "Something went wrong..." });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
