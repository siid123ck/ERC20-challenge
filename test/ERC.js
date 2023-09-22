const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let MyToken;
  let myToken;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy();
    await myToken.waitForDeployment();
  });

  it("Should have the correct name and symbol", async function () {
    expect(await myToken.name()).to.equal("MyToken");
    expect(await myToken.symbol()).to.equal("MTK");
  });

  it("Should mint 100 tokens", async function () {
    const balance = await myToken.balanceOf(owner.address);
    expect(balance.toString()).to.equal("100000000000000000000");
  });
});
