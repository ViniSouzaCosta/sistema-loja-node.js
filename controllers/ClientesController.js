import express from "express";
import Cliente from "../models/Cliente.js";
const router = express.Router();

router.get("/clientes/", (req, res) => {
  Cliente.findAll().then(clientes => {
    res.render("clientes", {
      clientes: clientes
    })
  })
});

router.post("/clientes/new", (req,res) => {
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.create({
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(() => {
    res.redirect("/clientes")
  })
})

export default router;
