
import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step1 funnel-container">
      <div >
        <div className="row ">
       

<div class="wallet wallet-container">
   <div class="wallet-description ">You must have an ERC20-compatible ETH wallet to receive your tokens!  Do not enter or pay from an exchange address!</div>
   <div class="wallet-address-input-container ">
      <div class="form-group"><label for="receiving-wallet">Your receiving ETH (ERC20) wallet address</label>
      <input type="text" id="receiving-wallet" name="receiving-wallet" class="" autocomplete="cc-number" value=""/></div>
   </div>
   <div class="wallet-description ">The addresses you enter below must be exactly the same as the addresses you will send your payment from.</div>
   <div class="wallet-warnings ">
      <div class="wallet-description">Do not enter or pay from an exchange address!</div>
      <ul class="warnings">
         <li>Exchange addresses will not work (e.g. Coinbase, Kraken, Binance, etc.)</li>
         <li>Only personal wallet address will work (e.g. MEW, MetaMask, MIST, etc.)</li>
      </ul>
   </div>
   <div class="sending-wallets ">
      <div class="modal-wrapper ">
         <div class="wallet-modal-title">You are about to save your sending  wallet address.
            Once saved this address cannot be modified.
         </div>
         <div class="wallet-modal-content">
            <div class="wallet-modal-content-row">Make sure to enter correct wallet addresses which you will send your payment from.</div>
            <div class="wallet-modal-content-row">Do not enter or pay from an exchange address!</div>
         </div>
         <div class="wallet-modal-footer">
            <div class="form-group continue-continue-continue"><button type="submit" class="">Continue</button></div>
            <div class="form-group ghost-button modal-cancel"><button class="">Cancel</button></div>
         </div>
      </div>
      <div class="form-group"><label for="sending-ETH-wallet">Your sending ETH wallet address</label>
      <input type="text" id="sending-ETH-wallet" name="sending-ETH-wallet" class="" autocomplete="cc-number" value=""/></div>
     
   </div>
   <div class="wallet-footer ">
      <div class="form-group"><button type="submit" class="">Continue</button></div>
   </div>
</div>
        </div>
      </div>
    </div>
     
    )
  }
}