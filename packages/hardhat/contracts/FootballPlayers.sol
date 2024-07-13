//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl, Kevin Jones
 */

// TODO make ERC721
contract FootballPlayers is Ownable{
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;

	// TODOS: 
	// add some structure with the player details
	// give a token id to each player
	// create/store a list of predefined players from the past years (this would be automated somehow in the future, but for now its an examplelist)
	// add event to emit when a player is minted
	// make the constructer for the erc721 token with name and symbol "FemaleFootballPLayers FFP"
	// add a function to mint a new player token
	// add a function to retrieve the player details with the token ID
	// add a function to add players to the playerlist (either newcomers or for an update each year)
	
	constructor() {}
}
