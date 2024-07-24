const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

// describe("HelloWorld", function () {
//     it("Should deploy and interact with HelloWorld Contract", async function () {
//       // Get the ContractFactory and Signers here.
//       const MyContract = await ethers.getContractFactory("HelloWorld");
//       const [owner] = await ethers.getSigners();
  
//       // Deploy contract
//       const myContract = await MyContract.deploy();
//       await myContract.deployed();
  
//       // Verify the initial greeting
//       expect(await myContract.greet()).to.equal("Hello world!");
  
//     });
// });
// describe("FirstApp", function () {
//     it("Should deploy and interact with FirstApp Contract", async function () {
//       // Get the ContractFactory and Signers here.
//       const MyContract = await ethers.getContractFactory("FirstApp");
//       const [owner] = await ethers.getSigners();
  
//       // Deploy contract
//       const myContract = await MyContract.deploy();
//       await myContract.deployed();
  
//       // Verify the initial count
//       expect(await myContract.count()).to.equal("10");

//       //inc() 
//       myContract.inc();
//       expect(await myContract.count()).to.equal("11");

//       //dec()
//       myContract.dec();
//       expect(await myContract.count()).to.equal("10");
//     });
// });
// describe("DataType", function () {
//     it("Should deploy and interact with DataType Contract", async function () {
//         // Get the ContractFactory and Signers here.
//         const MyContract = await ethers.getContractFactory("DataType");
//         const [owner] = await ethers.getSigners();
    
//         // Deploy contract
//         const myContract = await MyContract.deploy();
//         await myContract.deployed();
    
//         // Verify the initial maxi256
//         expect(await myContract.maxi256()).to.equal("57896044618658097711785492504343953926634992332820282019728792003956564819967");

//         // Veryfy the initial maxi
//         expect(await myContract.maxi()).to.equal('57896044618658097711785492504343953926634992332820282019728792003956564819967');
   
//         // Veryfy the initial maxui256
//         expect(await myContract.maxui256()).to.equal('115792089237316195423570985008687907853269984665640564039457584007913129639935');

//         // Veryfy the initial a of bytes
//         expect(await myContract.a()).to.equal('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');

//         // Veryfy the initial a1 of bytes1
//         expect(await myContract.a1()).to.equal('0xb5');
//     });
// });
// describe("GasCheck", function () {
//     it("Should deploy and interact with GasCheck Contract", async function () {
//       // Get the ContractFactory and Signers here.
//       const MyContract = await ethers.getContractFactory("GasCheck");
//       const [owner] = await ethers.getSigners();
  
//       // Deploy contract
//       const myContract = await MyContract.deploy();
//       await myContract.deployed();
  
//       // Verify the initial greeting
//       myContract.forever()
  
//     });
// });
// describe("Mapping", function () {
//     it("Should deploy and interact with MappingContract ", async function () {
//         // Get the ContractFactory and Signers here.
//         const MyContract = await ethers.getContractFactory("MappingContract");
//         const [owner] = await ethers.getSigners();
    
//         // Deploy contract
//         const myContract = await MyContract.deploy();
//         await myContract.deployed();
    
//         await myContract.set(owner.address, 555);
//         expect(await myContract.get(owner.address)).to.equal(555);
//         await myContract.remove(owner.address);
//         expect(await myContract.get(owner.address)).to.equal(0);

//     });
// });
// describe("NestedMapping", function () {
//     it("Should deploy and interact with NestedMapping ", async function () {
//         // Get the ContractFactory and Signers here.
//         const MyContract = await ethers.getContractFactory("NestedMapping");
//         const [owner] = await ethers.getSigners();
    
//         // Deploy contract
//         const myContract = await MyContract.deploy();
//         await myContract.deployed();
    
//         await myContract.set(owner.address, 555, true);
//         expect(await myContract.get(owner.address, 555)).to.equal(true);
//         await myContract.remove(owner.address, 555);
//         expect(await myContract.get(owner.address, 555)).to.equal(false);

//     });
// });
// describe("Error", function () {
//     it("Should deploy and interact with Error Contract ", async function () {
//         // Get the ContractFactory and Signers here.
//         const MyContract = await ethers.getContractFactory("Error");
//         const [owner] = await ethers.getSigners();
    
//         // Deploy contract
//         const myContract = await MyContract.deploy();

//         //test about require() 
//         await myContract.deployed();
//         expect(await myContract.testRequire(11)).to.equal(true);
//         await expect( myContract.testRequire(9)).to.be.revertedWith("");

//         //test about revert()
//         await myContract.deployed();
//         expect(await myContract.testRevert(11)).to.equal(true);
//         await expect( myContract.testRevert(9)).to.be.revertedWith("");

//         //test about customError()
//         await myContract.deployed();
//         expect(await myContract.testCustomError(8)).to.equal(true);
//         await expect( myContract.testCustomError(11)).to.be.revertedWith("");
//     });
// });
describe("Event", function () {
    it("Should deploy and interact with Event ", async function () {
        // Get the ContractFactory and Signers here.
        const MyContract = await ethers.getContractFactory("Event");
        const [owner] = await ethers.getSigners();
    
        // Deploy contract
        const myContract = await MyContract.deploy();
        await myContract.deployed();
    
        //test 
         expect(await myContract.test())
        .to.emit(myContract, "Log")
        .withArgs(myContract, "Hello World!")
        .and.to.emit(myContract, "Log")
        .withArgs(myContract, "Hello EVM!")
        .and.to.emit(myContract, "AnotherLog");
    });
});

