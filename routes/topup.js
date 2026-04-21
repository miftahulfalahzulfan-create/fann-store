
const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.post("/topup", async (req, res) => {
  const { userId, productCode } = req.body;
  const refId = "INV" + Date.now();

  try {
    await Transaction.create({ userId, productCode, refId });
    res.json({ success: true, refId });
  } catch (err) {
    res.status(500).json({ message: "Gagal" });
  }
});

router.get("/status/:refId", async (req, res) => {
  const trx = await Transaction.findOne({ refId: req.params.refId });
  res.json(trx);
});

module.exports = router;
