import express from "express";

const router = express.Router();


router.get("/produtos/", (req, res) => {
   
    const produto = req.params.produto

   
    const produtos = [
        {
          nome: "Digivice Original V1",
          preco: 249.90,
          categoria: "Acessórios",
          imagem: "/images/v1.jpg"
        },
        {
          nome: "Pelúcia Agumon 30cm",
          preco: 89.99,
          categoria: "Pelúcias",
          imagem: "/images/agumon.jpg"
        },
        {
          nome: "Camiseta Digimon Adventure",
          preco: 59.90,
          categoria: "Vestuário",
          imagem: "/images/camisa.jpg"
        },
        {
          nome: "Card Game Booster Box - BT12",
          preco: 299.00,
          categoria: "Cards",
          imagem: "/images/BT-12-Booster_Box-EN.jpg"
        },
        {
          nome: "Action Figure Wargreymon",
          preco: 179.50,
          categoria: "Colecionáveis",
          imagem: "/images/war.jpg"
        },
        {
          nome: "Poster Digimon 60x90cm",
          preco: 34.90,
          categoria: "Decoração",
          imagem: "/images/poster.jpg"
        },
        {
          nome: "Chaveiro Digivice Miniatura",
          preco: 19.99,
          categoria: "Acessórios",
          imagem: "/images/chaveiro.jpg"
        },
        {
          nome: "Boné Digimon Tamer",
          preco: 45.00,
          categoria: "Vestuário",
          imagem: "/images/bone.jpg"
        },
        {
          nome: "Mochila Estampada Digimon",
          preco: 139.90,
          categoria: "Utilidades",
          imagem: "/images/mochila.jpg"
        },
        {
          nome: "Blu-ray Digimon Adventure Remaster",
          preco: 199.00,
          categoria: "Mídia",
          imagem: "/images/v1.jpg"
        }
      ];
      

    res.render("produtos", {
        
        produtos : produtos,
    });
});


export default router;