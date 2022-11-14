const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("LuxBank Contract", () => {
  async function contractRun() {
    const LuxBank = ethers.getContractFactory("LuxBank");
    const luxbank = (await LuxBank).deploy();
    (await luxbank).deployed();
    const [clientAd, account2] = await ethers.getSigners();

    return { luxbank, clientAd, account2 };
  }

  describe("contract deployment", () => {
    it("confirm deployer has been assigned to client", async () => {
      const { luxbank, clientAd } = await loadFixture(contractRun);
      const clientAddress = await ethers.getSigner();
      await expect(clientAd.address).to.equal(clientAddress.address);
    });
  });

  describe("contract revertations", () => {
    it("revert if user is not registered", async () => {
      const { luxbank } = await loadFixture(contractRun);
      const depositFunction = (await luxbank).depositFunds;
      await expect(
        depositFunction({ value: ethers.utils.parseEther("0") })
      ).to.be.revertedWith("you are not registered!");
    });
    it("doesnt allow another user to start transaction unless owner", async () => {
      const { luxbank, account2 } = await loadFixture(contractRun);
      await expect(
        (await luxbank).connect(account2).depositFunds()
      ).to.be.rejectedWith("you need to be the owner!");
    });
    it("doesnt allow client to make deposit under 0.5 ether", async () => {
      const { luxbank } = await loadFixture(contractRun);
      const depositFunds = (await luxbank).depositFunds;
      const registerClient = (await luxbank).registerClient;
      await registerClient("Lazarus", "Jr");
      await expect(
        depositFunds({ value: ethers.utils.parseUnits("1", 17) })
      ).to.be.rejectedWith("cannot start this transaction");
    });
    it("should revert if request to withdraw more than whats in the account", async () => {
      const { luxbank } = await loadFixture(contractRun);
      const registerClient = (await luxbank).registerClient;
      await registerClient("lazarus", "Jr");
      const depositFunds = (await luxbank).depositFunds;
      await depositFunds({ value: ethers.utils.parseUnits("2", 18) });
      const withdrawFunds = (await luxbank).withdrawFunds;
      const withdrawAmount = ethers.utils.parseUnits("3", 18);
      await expect(withdrawFunds(withdrawAmount)).to.be.revertedWith(
        "you dont have enough funds to withdraw!"
      );
    });
  });
  describe("contract functionals", () => {
    it(" deposits funds into the clients account", async () => {
      const { luxbank, clientAd } = await loadFixture(contractRun);
      const registerClient = (await luxbank).registerClient;
      await registerClient("lazarus jr", "jr");
      const depositFunds = (await luxbank).depositFunds;
      const depositAmount = ethers.utils.parseUnits("7", 18);
      await depositFunds({ value: ethers.utils.parseEther("7") });
      let balance = (await luxbank).viewAccountBalance();
      expect(await balance).to.equal(depositAmount);
    });
    it("should withdraw funds from users account balance from smart contract", async () => {
      const { luxbank } = await loadFixture(contractRun);
      const registerClient = (await luxbank).registerClient;
      await registerClient("Lazarus", "Jr");
      const depositFunds = (await luxbank).depositFunds;
      await depositFunds({ value: ethers.utils.parseUnits("2", 18) });
      const withdrawFunds = (await luxbank).withdrawFunds;
      const withdrawAmount = ethers.utils.parseUnits("1", 18);
      await withdrawFunds(withdrawAmount);
      let balance = (await luxbank).viewAccountBalance();
      expect(await balance).to.equal("1000000000000000000");
    });
  });
  contractRun();
});
