import Web3 from 'web3'
import abi from './build/abi'



const provider = new Web3.providers.HttpProvider(
    "https://eth-goerli.g.alchemy.com/v2/z2_SRVFS1FIpxVI5ACfZ4s_yVibkbVxY"
    )

    const web3 = new Web3(provider)

    const Contract = new web3.eth.Contract(abi, "0x75774d5719a43237c9277654b1F8f525d5FFC2c8")
    

    export default Contract;
    