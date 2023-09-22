const hre = require("hardhat");

async function main() {
  const myToken = await hre.ethers.deployContract("MyToken");

  await myToken.waitForDeployment();

  console.log(`MyToken is deployed to ${myToken.target}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});