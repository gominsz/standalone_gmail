const express = require("express");
const { sendEmail } = require("./mailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: app,
  noCache: true,
});

app.post("/mail", (req, res) => {
  const { to, subject, content } = req.body;
  sendEmail(to, subject, content);
  res.status(201).send({ message: "Email enviado com sucesso!" });
});

app.listen(3000, () =>
  console.log("Server listenning on http://localhost:3000")
);
