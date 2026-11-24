export function monthlyLoanPayment(principal:number,annualRate:number,months:number){
  if(![principal,annualRate,months].every(Number.isFinite)||principal<0||annualRate<0||!Number.isInteger(months)||months<1) return NaN;
  const rate=annualRate/1200;
  return rate===0?principal/months:principal*rate/(1-Math.pow(1+rate,-months));
}

export function futureSavings(initial:number,monthlyDeposit:number,annualRate:number,months:number){
  if(![initial,monthlyDeposit,annualRate,months].every(Number.isFinite)||initial<0||monthlyDeposit<0||annualRate<0||!Number.isInteger(months)||months<1) return NaN;
  const rate=annualRate/1200;
  if(rate===0)return initial+monthlyDeposit*months;
  const growth=Math.pow(1+rate,months);
  return initial*growth+monthlyDeposit*(growth-1)/rate;
}
