const hre = require("hardhat");

async function main() {
  const LayerZeroTest = await hre.ethers.getContractFactory("LayerZeroTest");
  const layerZeroTest = await LayerZeroTest.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf"
  );

  await layerZeroTest.deployed();

  console.log("layerZeroTest deployed to:", layerZeroTest.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});