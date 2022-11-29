import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import taeg from '../taeg';
import './Form.css';

function FormTaeg() {
    // Get the differents values of the form
    const [amount, setAmount] = useState(false);
    const getAmount = (event) => setAmount(event.target.value);
    const [rate, setRate] = useState(false);
    const getRate = (event) => setRate(event.target.value);
    const [loanPeriod, setLoanPeriod] = useState(false);
    const getLoanPeriod = (event) => setLoanPeriod(event.target.value);
    const [fileBrokerageFees, setFileBrokerageFees] = useState(false);
    const getFileBrokerageFees = (event) => setFileBrokerageFees(event.target.value);
    const [guaranteeFees, setGuaranteeFees] = useState(false);
    const getGuaranteeFees = (event) => setGuaranteeFees(event.target.value);
    const [insuranceRate, setInsuranceRate] = useState(false);
    const getInsuranceRate = (event) => setInsuranceRate(event.target.value);
    console.log(amount, loanPeriod, rate,fileBrokerageFees, guaranteeFees, insuranceRate);

    // Function to calculate taeg
    const getTaeg = () => {
        // Get insurance cost 
        let insuranceCost = taeg.getInsuranceCost(insuranceRate, amount, loanPeriod);
        // Get monthly payment amount
        let monthlyPaymentAmount = taeg.getMonthlyPaymentAmount(rate, loanPeriod, amount);
        // Get interests amount
        let interestsCost = taeg.getInterestsCost(loanPeriod, amount, monthlyPaymentAmount);
        // Get global monthly payment amount with insurance + file brokerage fees + guarantee fees
        let totalMonthlyPaymentAmount = taeg.getTotalMonthlyPaymentAmount(Number(amount), Number(guaranteeFees), Number(fileBrokerageFees), Number(insuranceCost), Number(interestsCost), Number(loanPeriod));
        // Get taeg
        let taegNewRate = taeg.getTaeg(loanPeriod, amount, totalMonthlyPaymentAmount);

        console.log(insuranceCost);
        console.log(monthlyPaymentAmount);
        console.log(interestsCost);
        console.log(totalMonthlyPaymentAmount);
        console.log(taegNewRate);

        return taegNewRate;
    }

    return (
      <div className="Form">        
        <div className='Form-image'></div>
        <div className='Form-all'>
            <Form>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Montant emprunté</label>
                    <input onChange={getAmount} className='Form-field-input' placeholder='en €' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Taux du prêt hors assurance</label>
                    <input className='Form-field-input' onChange={getRate} placeholder='en %' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Durée de votre prêt</label>
                    <input className='Form-field-input' onChange={getLoanPeriod} placeholder='en mois' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Taux de l'assurance</label>
                    <input className='Form-field-input' onChange={getInsuranceRate} placeholder="en %" />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Frais de dossier / courtage</label>
                    <input className='Form-field-input' onChange={getFileBrokerageFees} placeholder="en €" />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Frais de garantie du prêt</label>
                    <input className='Form-field-input' onChange={getGuaranteeFees} placeholder="en €" />
                </Form.Field>
                <Button className='Form-field-button' onClick={getTaeg} type='submit'>Calculer mon TAEG</Button>
            </Form>
            <div className='Form-results'>
            <p>Mon TAEG est de : <input type='text' value={getTaeg()}></input></p>
            </div>
        </div>
        
            
      </div>
    );
  }
  
  export default FormTaeg;