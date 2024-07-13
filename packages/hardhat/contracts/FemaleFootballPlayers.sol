//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl, Kevin Jones
 */

// TODO make ERC721
contract FemaleFootballPlayers is ERC721URIStorage, Ownable{
	using Counters for Counters.Counter;
	Counters.Counter private _tokenId;

	
	// add some structure with the player details
	struct Player {
		string name;
		string main_field_position;
		string nationality;
		string current_team;
		uint256 playerScore;
		uint256 year;
	}

	// give a token id to each player
	mapping(uint256 => Player) public players;

	// create/store a list of defined players from the past years (this would be automated somehow in the future, but for now its an examplelist)
	Player[] public definedPlayers;

	// add event to emit when a player is minted
	event PlayerMinted(address indexed owner, uint indexed tokenId, string name, string main_field_position, string nationality, string current_team, uint256 playerScore, uint256 year);
	
	// make the constructer for the erc721 token with name and symbol "FemaleFootballPLayers FFP"
	constructor() ERC721("FemaleFootballPlayers", "FFP") {
		_initializePlayers();
	}

	// add function to initialize the player list
	function _initializePlayers() internal {
		definedPlayers.push(Player("Jassina Blom", "midfielder", "Belgium", "UD Granadilla Tenerife", 87, 2024));
		definedPlayers.push(Player("Jassina Blom", "midfielder", "Belgium", "UD Granadilla Tenerife", 82, 2023));
		definedPlayers.push(Player("Nicky Evrard", "goalkeeper", "Belgium", "Chelsea", 91, 2024));
		definedPlayers.push(Player("Lisa Lichtfus", "goalkeeper", "Belgium", "Le Havre AC", 89, 2024));
	}

	// add a function to mint a new player token
	function mintPlayer (address to, string memory tokenURI, uint256 definedPlayerIndex) public returns (uint256) {
		// check if the index number is in the player list
		require(definedPlayerIndex < definedPlayers.length, "Invalid player index");

		_tokenId.increment();

		uint256 newItemId = _tokenId.current();
		_safeMint(to, newItemId);
		_setTokenURI(newItemId, tokenURI);

		// store player details from the predefined list
		Player memory newPlayer = definedPlayers[definedPlayerIndex];
		players[newItemId] = newPlayer;

		emit PlayerMinted(msg.sender, newItemId, newPlayer.name, newPlayer.main_field_position, newPlayer.nationality, newPlayer.current_team, newPlayer.playerScore, newPlayer.year);

		return newItemId;
	}

	// add a function to retrieve the player details with the token ID
	function getPlayerDetails(uint256 tokenId) public view returns (Player memory) {
		require(_exists(tokenId), "Token does not exist");
		return players[tokenId];
	}

	// add a function to add players to the playerlist (either newcomers or for an update each year)
	function addPlayer(string memory name, string memory main_field_position, string memory nationality, string memory current_team, uint256 playerScore, uint256 year) public onlyOwner {
		definedPlayers.push(Player(name, main_field_position, nationality, current_team, playerScore, year));
	}

}
