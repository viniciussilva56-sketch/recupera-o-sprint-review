const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const router = express.Router();

// GET
router.get("/", async (req, res) => {

    const produtos = await prisma.produto.findMany();

    res.json(produtos);

});

// POST
router.post("/", async (req, res) => {

    const { nome, preco } = req.body;

    const produto = await prisma.produto.create({

        data: {
            nome,
            preco
        }

    });

    res.status(201).json(produto);

});

// PUT
router.put("/:id", async (req, res) => {

    const id = Number(req.params.id);

    const { nome, preco } = req.body;

    const produto = await prisma.produto.update({

        where: {
            id
        },

        data: {
            nome,
            preco
        }

    });

    res.json(produto);

});

// DELETE
router.delete("/:id", async (req, res) => {

    const id = Number(req.params.id);

    await prisma.produto.delete({

        where: {
            id
        }

    });

    res.sendStatus(204);

});

module.exports = router;