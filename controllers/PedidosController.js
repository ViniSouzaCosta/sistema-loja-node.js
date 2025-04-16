import express from "express";
const router = express.Router();

router.get("/pedidos/", (req, res) => {

    const pedidos = [
        { numero: "001", valor: 149.90 },
        { numero: "002", valor: 89.90 },
        { numero: "003", valor: 259.00 },
        { numero: "004", valor: 99.99 },
        { numero: "005", valor: 199.50 },
        { numero: "006", valor: 75.00 },
        { numero: "007", valor: 120.90 },
        { numero: "008", valor: 310.20 },
        { numero: "009", valor: 45.60 },
        { numero: "010", valor: 389.99 }
      ];
      
        
    res.render("pedidos", {
        pedidos 
    });
});

export default router;
