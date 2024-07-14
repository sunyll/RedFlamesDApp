//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FemaleFootballPlayers is ERC721URIStorage, Ownable {
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
	uint256 public totalPlayers;

	// track number of instances for each player
	mapping(uint256 => uint256) public playerInstanceCount;

	// track which addresses own which player instances
	mapping(uint256 => mapping(address => bool)) public playerInstanceOwnership;

	// create/store a list of defined players from the past years (this would be automated somehow in the future, but for now its an examplelist)
	Player[] public definedPlayers;

	// add event to emit when a player is minted
	event PlayerMinted(
		address indexed owner,
		uint indexed tokenId,
		string name,
		string main_field_position,
		string nationality,
		string current_team,
		uint256 playerScore,
		uint256 year
	);

	// make the constructer for the erc721 token with name and symbol "FemaleFootballPLayers FFP"
	constructor() ERC721("FemaleFootballPlayers", "FFP") {
		_initializePlayers();
	}

	// add function to initialize the player list
	function _initializePlayers() internal {
		definedPlayers.push(
			Player(
				"Jassina Blom",
				"midfielder",
				"Belgium",
				"UD Granadilla Tenerife",
				87,
				2024
			)
		);
		definedPlayers.push(
			Player(
				"Tine De Caigny",
				"midfielder",
				"Belgium",
				"Hoffenheim",
				85,
				2024
			)
		);
		definedPlayers.push(
			Player("Nicky Evrard", "goalkeeper", "Belgium", "Chelsea", 91, 2024)
		);
		definedPlayers.push(
			Player(
				"Lisa Lichtfus",
				"goalkeeper",
				"Belgium",
				"Le Havre AC",
				89,
				2024
			)
		);
		definedPlayers.push(
			Player(
				"Marta Vieira da Silva",
				"forward",
				"Brazil",
				"Orlando Pride",
				95,
				2024
			)
		);
		definedPlayers.push(
			Player("Alex Morgan", "forward", "USA", "San Diego Wave", 93, 2024)
		);
		definedPlayers.push(
			Player("Sam Kerr", "forward", "Australia", "Chelsea", 92, 2024)
		);
		definedPlayers.push(
			Player(
				"Vivianne Miedema",
				"forward",
				"Netherlands",
				"Arsenal",
				91,
				2024
			)
		);
	}

	// add a function to mint a new player token
	function mintPlayer(
		address to,
		string memory tokenURI,
		uint256 definedPlayerIndex
	) public returns (uint256) {
		// check if the index number is in the player list
		require(
			definedPlayerIndex < definedPlayers.length,
			"Invalid player index"
		);

		// check if the max instances of the player have been minted
		require(
			playerInstanceCount[definedPlayerIndex] < 10,
			"Max instances of this player have been minted"
		);

		// check if the address already owns an instance of this player
		require(
			!playerInstanceOwnership[definedPlayerIndex][to],
			"Address already owns an instance of this player"
		);

		_tokenId.increment();

		uint256 newItemId = _tokenId.current();
		_mint(to, newItemId);
		_setTokenURI(newItemId, tokenURI);

		// store player details from the predefined list
		Player memory newPlayer = definedPlayers[definedPlayerIndex];
		players[newItemId] = newPlayer;

		// update the instance count and ownership tracking
		playerInstanceCount[definedPlayerIndex]++;
		playerInstanceOwnership[definedPlayerIndex][to] = true;

		emit PlayerMinted(
			msg.sender,
			newItemId,
			newPlayer.name,
			newPlayer.main_field_position,
			newPlayer.nationality,
			newPlayer.current_team,
			newPlayer.playerScore,
			newPlayer.year
		);

		return newItemId;
	}

	// add a function to retrieve the player details with the token ID
	function getPlayerDetails(
		uint256 tokenId
	) public view returns (Player memory) {
		require(_exists(tokenId), "Token does not exist");
		return players[tokenId];
	}

	// add a function to add players to the playerlist (either newcomers or for an update each year)
	function addPlayer(
		string memory name,
		string memory main_field_position,
		string memory nationality,
		string memory current_team,
		uint256 playerScore,
		uint256 year
	) public onlyOwner {
		definedPlayers.push(
			Player(
				name,
				main_field_position,
				nationality,
				current_team,
				playerScore,
				year
			)
		);
	}

	// add a function to retrieve any playerdata from a specific player in the defined player list
	function getPlayerByIndex(
		uint256 index
	)
		public
		view
		returns (
			string memory,
			string memory,
			string memory,
			string memory,
			uint256,
			uint256
		)
	{
		Player memory player = definedPlayers[index];
		return (
			player.name,
			player.main_field_position,
			player.nationality,
			player.current_team,
			player.playerScore,
			player.year
		);
	}

	// add function that returns a list of all defined players in an array
	function getDefinedPlayers() public view returns (Player[] memory) {
		return definedPlayers;
	}

	// add function that returns the total number of players in the player list
	function getPlayerCount() public view returns (uint256) {
		return definedPlayers.length;
	}
}
