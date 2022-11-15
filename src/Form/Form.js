import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import taeg from '../taeg';
import './Form.css';

function FormTaeg() {
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

    const getTaeg = () => {
        let insuranceCost = taeg.getInsuranceCost(insuranceRate, amount, loanPeriod);
        taeg.getMonthlyPaymentAmount(rate, loanPeriod, amount);
        let monthlyPaymentAmount = taeg.getMonthlyPaymentAmount(rate, loanPeriod, amount);
        let interestsCost = taeg.getInterestsCost(loanPeriod, amount, monthlyPaymentAmount);
        let totalMonthlyPaymentAmount = taeg.getTotalMonthlyPaymentAmount(Number(amount), Number(guaranteeFees), Number(fileBrokerageFees), Number(insuranceCost), Number(interestsCost), Number(loanPeriod));
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
        <div>
            <Form>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Montant emprunté</label>
                    <input onChange={getAmount} className='Form-field-input' placeholder='en euros' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Taux du prêt hors assurance</label>
                    <input onChange={getRate} placeholder='en pourcentage' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Durée de votre prêt</label>
                    <input onChange={getLoanPeriod} placeholder='en mois' />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Taux de l'assurance</label>
                    <input onChange={getInsuranceRate} placeholder="en pourcentage" />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Frais de dossier / courtage</label>
                    <input onChange={getFileBrokerageFees} placeholder="en euros" />
                </Form.Field>
                <Form.Field className='Form-field'>
                    <label className='Form-field-label'>Frais de garantie du prêt</label>
                    <input onChange={getGuaranteeFees} placeholder="en euros" />
                </Form.Field>
                <Button onClick={getTaeg} type='submit'>Calculer mon TAEG</Button>
            </Form>
        </div>
        <div className='Form-results'>
            <p>Mon TAEG est de : <input type='text' value={getTaeg()}></input></p>
        </div>
            
      </div>
    );
  }
  
  export default FormTaeg;