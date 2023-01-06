import React,{useState} from 'react'
import { ethers } from 'ethers';
// 0xf078259544740e9CA50ed6d73763e02E9D809819
const provider = new ethers.providers.Web3Provider(window.ethereum);


function Login() {
    const [account,setAccount]=useState('login')
    const [uploadName,setUploadName]=useState('')
    const [uploadLink,setUploadLink]=useState('')
    const [approvalAddress,setApprovalAddress]=useState('')
    const [approvalName,setApprovalName]=useState('')
    const [viewName,setViewName]=useState('')
    const [viewAddress,setViewAddress]=useState('')
    async function qq(){
      
        const accounts = await provider.listAccounts();
        console.log(accounts[0]);
        if(accounts[0]!=undefined)
        setAccount(accounts[0])
        else
        alert('metmask not connected')
  }
 
  return (

    <div style={{'margin-left':'20em'}}>
        <button onClick={()=>{
            qq()
        }}>{account}</button>

       <hr></hr>
      document type
       <input onChange={(e)=>{setUploadName(e.target.value)}}/>
       <br></br>
    
      ipfs link
       <input onChange={(e)=>{setUploadLink(e.target.value)}}/>
       <br></br>
       <a style={{'color':'blue'}} href="https://yash-deore.github.io/react-ipfs-uploader/">Link on the link to upload to ipfs</a>
       <br></br>
       <button onClick={async()=>{
        const signer = provider.getSigner();

        const contractAddress = "0xf078259544740e9CA50ed6d73763e02E9D809819";
        
        const contract = new ethers.Contract(
            contractAddress,
            [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "ad",
                            "type": "address"
                        }
                    ],
                    "name": "approveDocs",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "ad",
                            "type": "address"
                        }
                    ],
                    "name": "checkApproved",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "gov",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_ipfs",
                            "type": "string"
                        }
                    ],
                    "name": "uploadDocs",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "ad",
                            "type": "address"
                        }
                    ],
                    "name": "viewDocsIPFS",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ],
            signer
        );
        contract.uploadDocs(uploadName,uploadLink).then(()=>{
            alert('successfully uploaded')
        }).catch(()=>{
            alert('erreo uploading document')
        })
       }}>upload</button>
       <hr></hr>
       <br></br>
       approval address
       <input onChange={(e)=>{setApprovalAddress(e.target.value)}}/>
       <br></br>
       approval document name
       <input onChange={(e)=>{setApprovalName(e.target.value)}}/>
       <br></br>
       <button onClick={async()=>{
       

       const signer = provider.getSigner();
       
       const contractAddress = "0xf078259544740e9CA50ed6d73763e02E9D809819";
       
       const contract = new ethers.Contract(
           contractAddress,
           [
               {
                   "inputs": [],
                   "stateMutability": "nonpayable",
                   "type": "constructor"
               },
               {
                   "inputs": [
                       {
                           "internalType": "string",
                           "name": "_name",
                           "type": "string"
                       },
                       {
                           "internalType": "address",
                           "name": "ad",
                           "type": "address"
                       }
                   ],
                   "name": "approveDocs",
                   "outputs": [],
                   "stateMutability": "nonpayable",
                   "type": "function"
               },
               {
                   "inputs": [
                       {
                           "internalType": "string",
                           "name": "_name",
                           "type": "string"
                       },
                       {
                           "internalType": "address",
                           "name": "ad",
                           "type": "address"
                       }
                   ],
                   "name": "checkApproved",
                   "outputs": [
                       {
                           "internalType": "uint256",
                           "name": "",
                           "type": "uint256"
                       }
                   ],
                   "stateMutability": "view",
                   "type": "function"
               },
               {
                   "inputs": [],
                   "name": "gov",
                   "outputs": [
                       {
                           "internalType": "address",
                           "name": "",
                           "type": "address"
                       }
                   ],
                   "stateMutability": "view",
                   "type": "function"
               },
               {
                   "inputs": [
                       {
                           "internalType": "string",
                           "name": "_name",
                           "type": "string"
                       },
                       {
                           "internalType": "string",
                           "name": "_ipfs",
                           "type": "string"
                       }
                   ],
                   "name": "uploadDocs",
                   "outputs": [],
                   "stateMutability": "nonpayable",
                   "type": "function"
               },
               {
                   "inputs": [
                       {
                           "internalType": "string",
                           "name": "_name",
                           "type": "string"
                       },
                       {
                           "internalType": "address",
                           "name": "ad",
                           "type": "address"
                       }
                   ],
                   "name": "viewDocsIPFS",
                   "outputs": [
                       {
                           "internalType": "string",
                           "name": "",
                           "type": "string"
                       }
                   ],
                   "stateMutability": "view",
                   "type": "function"
               }
           ],
           signer
       );
       const contractName= await contract.checkApproved(approvalName,approvalAddress).then(()=>{
           alert('contract is approved')
       }).catch(()=>{
           alert('contact is not approved')
       })
       
  }}>check approval</button>
       <hr></hr>
       <br></br>
       address
       <input onChange={(e)=>{setViewAddress(e.target.value)}}/>
       <br></br>
       document name
       <input onChange={(e)=>{setViewName(e.target.value)}}/>
       <br></br>
       <button onClick={async()=>{

const signer = provider.getSigner();

const contractAddress = "0xf078259544740e9CA50ed6d73763e02E9D809819";

const contract = new ethers.Contract(
    contractAddress,
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ad",
                    "type": "address"
                }
            ],
            "name": "approveDocs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ad",
                    "type": "address"
                }
            ],
            "name": "checkApproved",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gov",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_ipfs",
                    "type": "string"
                }
            ],
            "name": "uploadDocs",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ad",
                    "type": "address"
                }
            ],
            "name": "viewDocsIPFS",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    signer
);
const contractName = await contract.viewDocsIPFS(viewName,viewAddress);
alert(contractName)

       }}>view</button>
       <hr></hr>
       <br></br>
       approval address
       <input onChange={(e)=>{setApprovalAddress(e.target.value)}}/>
       <br></br>
       approval document name
       <input onChange={(e)=>{setApprovalName(e.target.value)}}/>
       <br></br>
       <button onClick={async()=>{
       

            const signer = provider.getSigner();
            
            const contractAddress = "0xf078259544740e9CA50ed6d73763e02E9D809819";
            
            const contract = new ethers.Contract(
                contractAddress,
                [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_name",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "ad",
                                "type": "address"
                            }
                        ],
                        "name": "approveDocs",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_name",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "ad",
                                "type": "address"
                            }
                        ],
                        "name": "checkApproved",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "gov",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "_ipfs",
                                "type": "string"
                            }
                        ],
                        "name": "uploadDocs",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_name",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "ad",
                                "type": "address"
                            }
                        ],
                        "name": "viewDocsIPFS",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                signer
            );
            contract.approveDocs(approvalName,approvalAddress).then(()=>{
                alert('successfully approved')
            }).catch(()=>{
                alert('problem approving the document')
            })
            
       }}>approve</button>

    </div>
  )
}

export default Login