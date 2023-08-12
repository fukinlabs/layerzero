const hre = require("hardhat");

async function main() {
  const LayerZeroTest = await hre.ethers.getContractFactory("LayerZeroTest");
  const layerZeroTest = await LayerZeroTest.deploy(
    "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1"
  );

  await layerZeroTest.deployed();

  console.log("layerZeroTest deployed to:", layerZeroTest.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});