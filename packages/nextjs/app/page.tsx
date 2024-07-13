"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import playersData from "../../../players.json";

const Home: NextPage = () => {
  const { address: connectedAddress, isConnected, isConnecting } = useAccount();
  const [players, setPlayers] = useState([]);

  const { writeContractAsync } = useScaffoldWriteContract("FemaleFootballPlayers");

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const handleMintPlayer = async (index: number) => {
    if (!connectedAddress) {
      return;
    }

    try {
      const tokenURI = `abc`;
      await writeContractAsync({
        functionName: "mintPlayer",
        args: [connectedAddress, tokenURI, index],
      });
    } catch (e) {
      console.error("Error minting player:", e);
    }
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player, index) => (
          <div key={index} className="card bg-yellow-200 border-4 border-red-500 w-72 shadow-xl rounded-lg overflow-hidden">
            <figure className="w-full h-56 bg-red-500">
              <img
                src={`/players/${player.image}`}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-4 text-blue-900">
              <h2 className="card-title text-lg font-bold">{player.name}</h2>
              <p className="text-sm leading-tight"><strong>Position:</strong> {player.position}</p>
              <p className="text-sm leading-tight"><strong>Nationality:</strong> {player.nationality}</p>
              <p className="text-sm leading-tight"><strong>Current Team:</strong> {player.team}</p>
              <p className="text-sm leading-tight"><strong>Score:</strong> {player.score}</p>
              <p className="text-sm leading-tight"><strong>Year:</strong> {player.year}</p>
              <div className="card-actions justify-end mt-2">
                <button
                  className="btn btn-primary btn-sm bg-red-500 hover:bg-red-600 border-none"
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
