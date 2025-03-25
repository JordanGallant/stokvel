"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useUser, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import Hydra from "@/components/shaders/Hydra";
// Replace with your contract address
const contractAddress = "0x5e03F969841CA23f4D3f79a0c3Ea0590593C8E7c";

// Specify the desired chain ID
const monadTestnet = 10143;

// ABI of your StokvelFactory contract
const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_contributionAmount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxMembers",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_payoutTimeframe",
        "type": "string"
      }
    ],
    "name": "createStokvel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

interface Inputs {
  contribution: string;
  name: string;
  maxMembers: string;
  payoutTimeframe: string;
}

export default function CreateStokvel() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const [inputs, setInputs] = useState<Inputs>({
    contribution: "",
    name: "",
    maxMembers: "",
    payoutTimeframe: ""
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, isLoaded, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if ((window as any).ethereum) {
        // Request account access
        await (window as any).ethereum.request({ method: "eth_requestAccounts" });

        // Check current network
        const chainId = await (window as any).ethereum.request({ method: "eth_chainId" });
        const currentChainId = parseInt(chainId, 16);

        

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, abi, await signer);

        const contributionAmount = ethers.utils.parseUnits(inputs.contribution, "ether");

        // Call the createStokvel function
        const tx = await contract.createStokvel(
          contributionAmount,
          inputs.name,
          parseInt(inputs.maxMembers),
          inputs.payoutTimeframe
        );

        // Wait for the transaction to be mined
        await tx.wait();

        console.log("Stokvel created successfully!");
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error creating Stokvel:", error);
      alert("Error creating Stokvel. Check the console for details.");
    }
  };

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }


  if (!isSignedIn) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="mb-4 text-lg">Please sign in to access this page</p>
        
        <SignInButton />
      </div>
    );
  }

  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Hydra/>
      </div>
    <div className="w-screen h-screen flex items-center justify-center">
      
      <div className="flex flex-col items-center bg-white gap-4 p-6 rounded shadow-lg text-black">
        <p>Contribution amount</p>
        <input
          type="text"
          name="contribution"
          value={inputs.contribution}
          onChange={handleChange}
          className="border p-2"
        />

        <p>Name</p>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          className="border p-2"
        />

        <p>Max members</p>
        <input
          type="text"
          name="maxMembers"
          value={inputs.maxMembers}
          onChange={handleChange}
          className="border p-2"
        />

        <p>Payout Timeframe</p>
        <input
          type="text"
          name="payoutTimeframe"
          value={inputs.payoutTimeframe}
          onChange={handleChange}
          className="border p-2"
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer mt-4"
        >
          Create Stokvel
        </button>
      </div>
      
    </div>
    
    </>
  );
}