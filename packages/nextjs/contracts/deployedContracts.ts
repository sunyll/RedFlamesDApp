/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    FemaleFootballPlayers: {
      address: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "main_field_position",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "nationality",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "current_team",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "playerScore",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "year",
              type: "uint256",
            },
          ],
          name: "PlayerMinted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "definedPlayers",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "main_field_position",
              type: "string",
            },
            {
              internalType: "string",
              name: "nationality",
              type: "string",
            },
            {
              internalType: "string",
              name: "current_team",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "playerScore",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "year",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "players",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "main_field_position",
              type: "string",
            },
            {
              internalType: "string",
              name: "nationality",
              type: "string",
            },
            {
              internalType: "string",
              name: "current_team",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "playerScore",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "year",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        approve: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        balanceOf: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        getApproved: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        isApprovedForAll: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        name: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        ownerOf: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        safeTransferFrom: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        setApprovalForAll: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        supportsInterface: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        symbol: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        tokenURI: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        transferFrom: "@openzeppelin/contracts/token/ERC721/ERC721.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
