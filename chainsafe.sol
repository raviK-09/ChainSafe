// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract chainsafe
{
    address public gov;
    
   
   constructor(){
      gov=msg.sender;

   }
   struct stringy{
       string ipfs;
       uint256 approved;
   }
 
    
    mapping(address=>mapping(string=>stringy)) user;

    function uploadDocs(string memory _name,string memory _ipfs) public
    {
        user[msg.sender][_name].ipfs=_ipfs;
        user[msg.sender][_name].approved=0;
    }
    function approveDocs(string memory _name,address ad) public
    {
        require(msg.sender==gov,"You are not the government");
        user[ad][_name].approved=1;
        
    }
    function viewDocsIPFS(string memory _name,address ad) public view returns(string memory)
    {
        return user[ad][_name].ipfs;
    }
     function checkApproved(string memory _name,address ad) public view returns(uint256)
    {
        require(user[ad][_name].approved==1,"Not Approved");
        return user[ad][_name].approved;
    }
  
   
   

}
