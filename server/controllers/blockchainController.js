const Web3 = require('web3');

const contractABI = require('../blockchain/contractABI.json');
const contractAddress = process.env.CONTRACT_ADDRESS;

// Connect to the Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_RPC));

// Contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Log an action to the blockchain
exports.logAction = async (req, res) => {
  const { ticketId, action, userId } = req.body;

  try {
    const accounts = await web3.eth.getAccounts();
    const receipt = await contract.methods
      .logAction(ticketId, action, userId)
      .send({ from: accounts[0] });

    res.json({ message: 'Action logged', txHash: receipt.transactionHash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a logged action (optional)
exports.getLogByTicketId = async (req, res) => {
  const { ticketId } = req.params;

  try {
    const logs = await contract.methods.getLogsByTicket(ticketId).call();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
