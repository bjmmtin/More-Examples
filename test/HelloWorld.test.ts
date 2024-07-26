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
  
//       try {
//               await myContract.forever();
//               // If we reach here, the test should fail
//               expect.fail("Expected event Gas didn't limit");
//             } catch (error) {
//               // Expect error message that the event was not emitted
//               expect(error.message).to.include('Transaction ran out of gas');
//               // console.error(error.message);
//           }
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

// describe("Event contract", function () {
//   let Event;
//   let event;
//   let owner;

//   beforeEach(async function () {
//     Event = await ethers.getContractFactory("Event");
//     [owner] = await ethers.getSigners();
//     event = await Event.deploy();
//     await event.deployed();
//   });

//   describe("Test events", function () {
//         it("Should emit Log event with 'Hello World!' message", async function () {
//         await expect(event.test())
//             .to.emit(event, "Log")
//             .withArgs(owner.address, "Hello World!");
//         });

//         it("Should emit Log event with 'Hello EVM!' message", async function () {
//         await expect(event.test())
//             .to.emit(event, "Log")
//             .withArgs(owner.address, "Hello EVM!");
//         });

//         it("Should emit AnotherLog event", async function () {
//         await expect(event.test())
//             .to.emit(event, "AnotherLog");
//         });

//         it("Should fail when an unexpected event is emitted", async function () {
//             try {
//               await expect(event.test())
//                 .to.emit(event, "NonExistentEvent");
//               // If we reach here, the test should fail
//               expect.fail("Expected event 'NonExistentEvent' to not be emitted");
//             } catch (error) {
//               // Expect error message that the event was not emitted
//               expect(error.message).to.include('Expected event "NonExistentEvent" to be emitted');
//               //console.error(error);
//             }
//           });
          
//     });
// });

// describe("Event contract", function () {
//   let Event;
//   let event;
//   let owner;

//   beforeEach(async function () {
//     Event = await ethers.getContractFactory("Event");
//     [owner] = await ethers.getSigners();
//     event = await Event.deploy();
//     await event.deployed();
//   });

//   describe("Test events", function () {
//     it("Should emit Log and AnotherLog events", async function () {
//       const tx = await event.test();
//       const receipt = await tx.wait();

//       // Check Log events
//       let logFound1 = false;
//       let logFound2 = false;
//       let anotherLogFound = false;

//       receipt.logs.forEach(log => {
//         try {
//           const parsedLog = event.interface.parseLog(log);
//           if (parsedLog.name === "Log") {
//             if (parsedLog.args.message === "Hello World!") {
//               logFound1 = true;
//             }
//             if (parsedLog.args.message === "Hello EVM!") {
//               logFound2 = true;
//             }
//           } else if (parsedLog.name === "AnotherLog") {
//             anotherLogFound = true;
//           }
//         } catch (error) {
//           console.error("Log parsing error:", error);
//         }
//       });

//       expect(logFound1).to.be.true;
//       expect(logFound2).to.be.true;
//       expect(anotherLogFound).to.be.true;
//     });
//   });
// });

// describe("MyContract", function () {
//     let counter;
//     let myContract;
//     let owner;

//     beforeEach(async function () {
//         [owner] = await ethers.getSigners();

//         // Deploy the Counter contract
//         const Counter = await ethers.getContractFactory("Counter");
//         counter = await Counter.deploy();
//         await counter.deployed();

//         // Deploy the MyContract contract
//         const MyContract = await ethers.getContractFactory("MyContract");
//         myContract = await MyContract.deploy();
//         await myContract.deployed();
//     });

//     it("should increment the count in Counter contract", async function () {
//         // Increment the count using MyContract
//         await myContract.incrementCounter(counter.address);

//         // Check the count in the Counter contract
//         const count = await myContract.getCount(counter.address);
//         expect(count).to.equal(1);
//     });

//     it("should return the correct count", async function () {
//         // Increment the count using MyContract
//         await myContract.incrementCounter(counter.address);
//         await myContract.incrementCounter(counter.address);

//         // Check the count in the Counter contract
//         const count = await myContract.getCount(counter.address);
//         expect(count).to.equal(2);
//     });
// });

// describe("GasGolf", function () {
//     let gasGolf;
//     let owner;

//     beforeEach(async function () {
//         [owner] = await ethers.getSigners();

//         // Deploy the GasGolf contract
//         const GasGolf = await ethers.getContractFactory("GasGolf");
//         gasGolf = await GasGolf.deploy();
//         await gasGolf.deployed();
//     });

//     it("should correctly sum numbers if even and less than 99 using optimized function", async function () {
//         const nums = [1, 2, 3, 4, 5, 100];
//         const tx = await gasGolf.savedGassumIfEvenAndLessThan99(nums);
//         await tx.wait();

//         const total = await gasGolf.total();
//         expect(total).to.equal(6); // 2 + 4 = 6
//     });

//     it("should correctly sum numbers if even and less than 99 using non-optimized function", async function () {
//         const nums = [1, 2, 3, 4, 5, 100];
//         const tx = await gasGolf.unSavedGassumIfEvenAndLessThan99(nums);
//         await tx.wait();

//         const total = await gasGolf.total();
//         expect(total).to.equal(6); // 2 + 4 = 6
//     });

//     it("should use less gas for the optimized function compared to the non-optimized function", async function () {
//         //const nums = Array.from({ length: 100 }, (_, i) => i + 1);
//         const nums = [1, 2, 3, 4, 5, 100];
//         // Measure gas for non-optimized function
//         const txNonOptimized = await gasGolf.unSavedGassumIfEvenAndLessThan99(nums);
//         const receiptNonOptimized = await txNonOptimized.wait();
//         const gasUsedNonOptimized = receiptNonOptimized.gasUsed.toNumber();

//         // Measure gas for optimized function
//         const txOptimized = await gasGolf.savedGassumIfEvenAndLessThan99(nums);
//         const receiptOptimized = await txOptimized.wait();
//         const gasUsedOptimized = receiptOptimized.gasUsed.toNumber();
//         console.log("gasUsedOptimized:%d, gasUsedNonOptimized:%d",gasUsedOptimized,gasUsedNonOptimized);

//         expect(gasUsedOptimized).to.be.lessThan(gasUsedNonOptimized);
//     });
// });

// describe("UncheckedMath", function () {
//     let uncheckedMath;
//     let owner;

//     beforeEach(async function () {
//         [owner] = await ethers.getSigners();

//         // Deploy the UncheckedMath contract
//         const UncheckedMath = await ethers.getContractFactory("UncheckedMath");
//         uncheckedMath = await UncheckedMath.deploy();
//         await uncheckedMath.deployed();
//     });

//     it("should correctly add two numbers with uncheckedadd", async function () {
//         const x = 10;
//         const y = 20;
//         const result = await uncheckedMath.uncheckedadd(x, y);
//         expect(result).to.equal(x + y);
//     });

//     it("should correctly add two numbers with add", async function () {
//         const x = 10;
//         const y = 20;
//         const result = await uncheckedMath.add(x, y);
//         expect(result).to.equal(x + y);
//     });

//     it("should correctly add two numbers with yul_add", async function () {
//         const x = 10;
//         const y = 20;
//         const result = await uncheckedMath.yul_add(x, y);
//         expect(result).to.equal(x + y);
//     });

//     it("should use less gas for uncheckedadd compared to add", async function () {
//         const x = 1000;
//         const y = 2000;

//         // Measure gas for uncheckedadd
//         const txUnchecked = await uncheckedMath.uncheckedadd(x, y);
//         const receiptUnchecked = await txUnchecked.wait();
//         const gasUsedUnchecked = receiptUnchecked.gasUsed.toNumber();

//         // Measure gas for add
//         const txAdd = await uncheckedMath.add(x, y);
//         const receiptAdd = await txAdd.wait();
//         const gasUsedAdd = receiptAdd.gasUsed.toNumber();

//         console.log("UncheckedAdd:%d, Add:%d",gasUsedUnchecked,gasUsedAdd);
//         // expect(gasUsedUnchecked).to.be.lessThan(gasUsedAdd);
//     });

//     it("should use less gas for yul_add compared to add", async function () {
//         const x = 1000;
//         const y = 2000;

//         // Measure gas for yul_add
//         const txYulAdd = await uncheckedMath.yul_add(x, y);
//         const receiptYulAdd = await txYulAdd.wait();
//         const gasUsedYulAdd = receiptYulAdd.gasUsed.toNumber();

//         // Measure gas for add
//         const txAdd = await uncheckedMath.add(x, y);
//         const receiptAdd = await txAdd.wait();
//         const gasUsedAdd = receiptAdd.gasUsed.toNumber();

//         console.log("YulAdd:%d, Add:%d",gasUsedYulAdd,gasUsedAdd);
//         // expect(gasUsedYulAdd).to.be.lessThan(gasUsedAdd);
//     });
// });

describe("Payable", function () {
    let payable;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        // Deploy the Payable contract with some initial Ether
        const Payable = await ethers.getContractFactory("Payable");
        payable = await Payable.deploy({ value: ethers.utils.parseEther("1.0") });
        await payable.deployed();
    });

    it("should deposit Ether into the contract", async function () {
        const depositAmount = ethers.utils.parseEther("0.5");
        await payable.deposit({ value: depositAmount });

        const contractBalance = await ethers.provider.getBalance(payable.address);
        expect(contractBalance).to.equal(ethers.utils.parseEther("1.5"));
    });

    it("should withdraw all Ether from the contract", async function () {
        const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

        // Deposit some Ether into the contract
        await payable.deposit({ value: ethers.utils.parseEther("100") });

        // Withdraw all Ether from the contract
        await payable.withdraw();

        const finalOwnerBalance = await ethers.provider.getBalance(owner.address);
        const contractBalance = await ethers.provider.getBalance(payable.address);

        expect(contractBalance).to.equal(0);
        expect(finalOwnerBalance).to.be.gt(initialOwnerBalance);
        console.log("finalOwnerBalance:%d, initialOwnerBalance:%d",finalOwnerBalance,initialOwnerBalance);
    });

    it("should transfer Ether to another address", async function () {
        const transferAmount = ethers.utils.parseEther("0.5");

        // Deposit some Ether into the contract
        await payable.deposit({ value: ethers.utils.parseEther("1.0") });

        // Transfer Ether from the contract to addr1
        await payable.transfer(addr1.address, transferAmount);

        const addr1Balance = await ethers.provider.getBalance(addr1.address);
        const contractBalance = await ethers.provider.getBalance(payable.address);

        expect(contractBalance).to.equal(ethers.utils.parseEther("0.5"));
        expect(addr1Balance).to.be.gt(ethers.utils.parseEther("0.5"));
    });

    it("should not accept Ether in the notPayable function", async function () {
        await expect(
            owner.sendTransaction({
                to: payable.address,
                value: ethers.utils.parseEther("0.1")
            })
        ).to.be.revertedWith("VM Exception while processing transaction: revert");
    });
});


