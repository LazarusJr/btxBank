//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LuxBank {
    /* bank system that takes in deposits (from wallet), creates accounts with a uniq ue account number that allows internal transfers, withdraw function straight to wallet */

    bool public registedClient;
    address payable public client; //this will assign msg.sender to this object

    event fundsDeposited(uint indexed _amount);
    event withdrawalFunds(uint indexed _amount);
    event ClientRegistered(string indexed _fname, string indexed _sname);

    constructor() {
        client = payable(msg.sender);
    }

    modifier onlyClient() {
        require(client == msg.sender, "you need to be the owner!");
        _;
    }

    modifier registeredOnly() {
        require(registedClient == true, "you are not registered!");
        _;
    }

    struct clients {
        string Fname;
        string Sname;
        uint256 accountBalance;
        address clientAddress;
    }

    mapping(address => clients) public Clients;
    mapping(address => uint256) public clientBalance;

    function registerClient(
        string memory _fname,
        string memory _sname // uint _birthdate
    ) public {
        /* creates the users account with unique account number to be generated randomly */
        Clients[client] = clients({
            Fname: _fname,
            Sname: _sname,
            accountBalance: 0,
            clientAddress: msg.sender
        });
        registedClient = true;
        emit ClientRegistered(_fname, _sname);
    }

    function depositFunds() public payable onlyClient registeredOnly {
        // require(msg.value > 1 ether, "cannot start this transaction");
        // require(Clients[msg.sender], "You have not been registed");
        if (msg.value < 1 ether / 2) {
            revert("cannot start this transaction");
        } else {
            clientBalance[msg.sender] += msg.value;
            emit fundsDeposited(msg.value);
        }
    } /* allows user to deposit funds into the smart contract from wallet */

    function withdrawFunds(uint _amount) public payable onlyClient {
        /* withdraw funds from the smart contract back into users wallet */
        require(
            _amount <= clientBalance[msg.sender],
            "you dont have enough funds to withdraw!"
        );
        clientBalance[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
        emit withdrawalFunds(_amount);
    }

    function viewAccountBalance() public view returns (uint256) {
        return clientBalance[msg.sender];
    }
}
