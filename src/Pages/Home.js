import { useEffect, useRef } from "react";

import React, { useState } from "react";
import abi from '../utils/build/abi'
import Web3 from 'web3'

import { ConnectButton } from '@rainbow-me/rainbowkit';


const provider = new Web3.providers.HttpProvider(
  "https://eth-goerli.g.alchemy.com/v2/z2_SRVFS1FIpxVI5ACfZ4s_yVibkbVxY"
  )

  const web3 = new Web3(provider)

  const Contract = new web3.eth.Contract(abi, "0x75774d5719a43237c9277654b1F8f525d5FFC2c8")

const Home = () => {
    
  
   
  
    return (<>
        <ConnectButton.Custom>
          
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  
                    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
                    
                    <p className="-mt-5 text-lg font-akkuratPro">Get Started By Choosing Your Wallet</p>
                    <div className="relative mt-10">
                        <img src="/images/star.png" alt="" className="absolute -top-5 -right-5" />
                        
                        
                        <button onClick={openConnectModal}  style={{
                            background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                        }}  className="
                    border-4 border-[#de8b2f] rounded-[8px] px-[35px] py-[10px] flex items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Connect Wallet <img src="/images/Vector 1.png" alt="" /></button>
                    </div>
                    
                </div>
                );
              }

              if (chain.unsupported) {
                return (
                    <div className="h-screen w-full flex flex-col justify-center items-center text-white">
                    <p className="-mt-5 text-lg font-akkuratPro">Get Started By Choosing Your Wallet</p>
                    <div className="relative mt-10">
                        <img src="/images/star.png" alt="" className="absolute -top-5 -right-5" />
                        
                        
                        <button onClick={openChainModal}  style={{
                            background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                        }}  className="
                    border-4 border-[#de8b2f] rounded-[8px] px-[35px] py-[10px] flex items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Connect Wallet <img src="/images/Vector 1.png" alt="" /></button>
                    </div>
                    
                </div>
                );
              }
              if (connected) {

              return (
                <>
                <div style={{ display: 'flex', gap: 12 }}>
                 

                  
                </div>

<div className="pt-[21px] flex justify-between items-start relative">
<div className="py-[10px] px-[25px] md:px-[35px] bg-[rgba(0,0,0,.5)] rounded-r-[10px]">
    
    
    <button className="mt-1 ml-12 text-[14px] md:text-lg text-yellow-600 font-akkuratPro"
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          accentColor: '#b56702',
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 10, height: 10, accentColor: '#b56702', }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button className="mt-1 ml-10 text-[14px] md:text-lg text-yellow-600 font-akkuratPro"  type="button">
                    {account.displayName} 
                    <br></br>
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                      <br></br>
                      
                  </button>
</div>


</div>

</>

              );
            }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    
                
    </>);
};

export default Home;