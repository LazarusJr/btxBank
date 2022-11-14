// const hre = require("hardhat");
const { ethers } = require("hardhat");

const main = async () => {
  const LuxBank = await ethers.getContractFactory("LuxBank");
  console.log("Deploying Contract...");
  const luxbank = LuxBank.deploy();
  (await luxbank).deployed();
  console.log("Contract has been deployed");
  console.log(`the address for this contract is ${(await luxbank).address}`);
};

const verify = () => {};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
