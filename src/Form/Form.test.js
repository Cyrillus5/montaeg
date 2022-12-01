// import { getTaeg } from './Form';
import taeg from '../Js/taeg';

describe('InsuranceCost render', () => {
    it('InsuranceCost render a number', () => {
        const insuranceCost = taeg.getInsuranceCost(0.5, 200000, 240);
        expect(typeof insuranceCost).toBe('number');
    });
    it('InsuranceCost should render 20000', () => {
        const insuranceCost = taeg.getInsuranceCost(0.5, 200000, 240);
        expect(insuranceCost).toBe(20000);
    })    
});

describe('monthlyPaymentAmount render', () => {
    it('monthlyPaymentAmount render a number', () => {
        const monthlyPaymentAmount = taeg.getMonthlyPaymentAmount(2.5, 240, 200000);
        expect(typeof monthlyPaymentAmount).toBe('number');
    });
    it('monthlyPaymentAmount should render 1060', () => {
        const monthlyPaymentAmount = taeg.getMonthlyPaymentAmount(2.5, 240, 200000);
        expect(monthlyPaymentAmount).toBe(1060);
    });    
});

describe('interestsCost render', () => {
    it('interestsCost render a number', () => {
        const interestsCost = taeg.getInterestsCost(240, 200000, 1060);
        expect(typeof interestsCost).toBe('number');
    });
    it('interestsCost should render 54400', () => {
        const interestsCost = taeg.getInterestsCost(240, 200000, 1060);
        expect(interestsCost).toBe(54400);
    });    
});

describe('totalMonthlyPaymentAmount render', () => {
    it('totalMonthlyPaymentAmount render a number', () => {
        const totalMonthlyPaymentAmount = taeg.getTotalMonthlyPaymentAmount(Number("200000"), Number("500"), Number("500"), Number("20000"), Number("54400"), Number("240"));
        expect(typeof totalMonthlyPaymentAmount).toBe('number');
    });
    it('interestsCost should render 1147.5', () => {
        const totalMonthlyPaymentAmount = taeg.getTotalMonthlyPaymentAmount(Number("200000"), Number("500"), Number("500"), Number("20000"), Number("54400"), Number("240"));
        expect(totalMonthlyPaymentAmount).toBe(1147.5);
    });    
});

describe('taegNewRate render', () => {
    it('taegNewRate render a number', () => {
        const taegNewRate = taeg.getTaeg(240, 200000, 1147.5);
        expect(typeof taegNewRate).toBe('number');
    });
    it('taegNewRate should render 3.38', () => {
        const taegNewRate = taeg.getTaeg(240, 200000, 1147.5);
        expect(taegNewRate).toBe(3.38);
    });    
});