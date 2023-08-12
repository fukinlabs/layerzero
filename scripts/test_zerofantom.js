

const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const LayerZeroTest = await hre.ethers.getContractFactory("LayerZeroTest");
  const layerZeroTest = await LayerZeroTest.attach(
    "0x4C73651b49F078012Fe903e4C201980B84BC7FBF"
  );

  const count = await layerZeroTest.messageCount();
  const msg = await layerZeroTest.message();
  console.log(count);
  console.log(ethers.utils.toUtf8String(msg));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});