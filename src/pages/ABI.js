export const ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "charges",
        type: "string",
      },
      {
        internalType: "string",
        name: "dockerhub",
        type: "string",
      },
    ],
    name: "addData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "dockerhub",
        type: "string",
      },
    ],
    name: "deleteDataByDockerhub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "charges",
            type: "string",
          },
          {
            internalType: "string",
            name: "dockerhub",
            type: "string",
          },
        ],
        internalType: "struct Deploy.Data[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
