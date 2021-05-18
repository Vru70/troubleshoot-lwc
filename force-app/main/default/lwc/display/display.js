/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-18-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-18-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Display extends LightningElement {
  counter = 0;
  augmentor = 1;

  get options() {
    return [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
    ];
  }
  
  handleAugmentorChange(event) {
    this.augmentor = parseInt(event.target.value);
  }

  handleIncrement(event) {
    const operand = event.detail;
    this.counter += operand;
  }
  
  handleDecrement(event) {
    const operand = event.detail;
    this.counter -= operand;
  }
}