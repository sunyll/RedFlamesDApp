"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import playersData from "../../../players.json";

const Home: NextPage = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();
  const [players, setPlayers] = useState([]);

  // Use the hook to write to the contract
  const { writeContractAsync } = useScaffoldWriteContract("FemaleFootballPlayers");

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handleMintPlayer = async (index: number) => {
    if (!connectedAddress) {
      alert("Please connect your wallet");
      return;
    }

    try {
      const tokenURI = `https://ipfs.io/ipfs/YOUR_IPFS_HASH/${index}`;
      await writeContractAsync({
        functionName: "mintPlayer",
        args: [connectedAddress, tokenURI, index],
      });
      alert("Player minted successfully");
    } catch (e) {
      console.error("Error minting player:", e);
      alert("Minting failed");
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {players.map((player, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt={player.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{player.name}</h2>
              <p>Position: {player.position}</p>
              <p>Nationality: {player.nationality}</p>
              <p>Current Team: {player.team}</p>
              <p>Score: {player.score}</p>
              <p>Year: {player.year}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleMintPlayer(index)}
                >
                  Mint
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
