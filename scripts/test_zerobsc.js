const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");
async function main() {
  const LayerZeroTest = await hre.ethers.getContractFactory("LayerZeroTest");
  const layerZeroTest = await LayerZeroTest.attach(
    "0x41084336E463D1457EC6077d9a1d8B4aeB3872dE"
  );
  const fees = await layerZeroTest.estimateFees(
    10009,
    "0x37587469690CC37EE19Ff6163ce7275BB1b17d3b",
    formatBytes32String("Hello LayerZero"),
    false,
    []
  );

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});