// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

error Unauthorized();

contract Deploy {

struct dataInfo {
        string description;
        string charges;
        string dockerhub;
    }
struct Data {
    address user;
    string description;
    string charges;
    string dockerhub;
}

    
    mapping(address => dataInfo[]) private _data;
    address[] private _users;

    function addData(string memory description, string memory charges, string memory dockerhub) public {
        dataInfo memory newData = dataInfo({
            description: description,
            charges: charges,
            dockerhub: dockerhub
        });
        _data[msg.sender].push(newData);
        if (!_userExists(msg.sender)) {
            _users.push(msg.sender);
        }
    }

function getAllData() public view returns (Data[] memory) {
    uint256 totalData;
    for (uint256 i = 0; i < _users.length; i++) {
        totalData += _data[_users[i]].length;
    }

    Data[] memory result = new Data[](totalData);
    uint256 index = 0;
    for (uint256 i = 0; i < _users.length; i++) {
        for (uint256 j = 0; j < _data[_users[i]].length; j++) {
            Data memory data = Data({
                user: _users[i],
                description: _data[_users[i]][j].description,
                charges: _data[_users[i]][j].charges,
                dockerhub: _data[_users[i]][j].dockerhub
            });
            result[index] = data;
            index++;
        }
    }
    return result;
}



function deleteDataByDockerhub(string memory dockerhub) public {
    require(_userExists(msg.sender), "User does not exist");

    for (uint256 i = 0; i < _data[msg.sender].length; i++) {
        if (keccak256(bytes(_data[msg.sender][i].dockerhub)) == keccak256(bytes(dockerhub))) {
            delete _data[msg.sender][i];
        }
    }
    // Check if the length of the data array for the current user is 0, and remove them from the _users array if true
    if (_data[msg.sender].length == 0) {
        removeUser(msg.sender);
    }
}

function removeUser(address user) private {
    require(_userExists(user), "User does not exist");

    for (uint256 i = 0; i < _users.length; i++) {
        if (_users[i] == user) {
            // Remove the user from the array by swapping it with the last element and then decreasing the array length
            _users[i] = _users[_users.length - 1];
            _users.pop();
            break;
        }
    }
}

    function _userExists(address user) private view returns (bool) {
        for (uint256 i = 0; i < _users.length; i++) {
            if (_users[i] == user) {
                return true;
            }
        }
        return false;
    }
}