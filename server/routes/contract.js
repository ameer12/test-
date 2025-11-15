const express = require("express");
const router = express.Router();
const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

const abi = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../contracts/MulticallABI.json"))
);

const contractAddress = "0x5ba1e12693dc8f9c48aad8770482f4739beed696";
const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com");
const contract = new ethers.Contract(contractAddress, abi, provider);

router.get("/contract-info", async (req, res) => {
  try {
    const blockNumber = await contract.getBlockNumber();
    res.json({ blockNumber: blockNumber.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
