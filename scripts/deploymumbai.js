const hre = require("hardhat");

async function main() {
  const LayerZeroTest = await hre.ethers.getContractFactory("LayerZeroTest");
  const layerZeroTest = await LayerZeroTest.deploy(
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8"
  );

  await layerZeroTest.deployed();

  console.log("layerZeroTest deployed to:", layerZeroTest.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});