// src/utils/financeCalcs.js

export const calculateCompoundInterest = (initial, monthlyContrib, years, annualRate, hasCrisis = false) => {
  const data = [];
  const normalMonthlyRate = (annualRate / 100) / 12;
  
  let totalBalance = initial;
  let totalInvested = initial;

  data.push({
    year: "Inicio",
    Balance: Math.round(totalBalance),
    Colchon: Math.round(totalInvested),
    Interests: 0
  });

  for (let y = 1; y <= years; y++) {
    let currentAnnualRate = annualRate;
    
    if (hasCrisis) {
      if (y === 5) {
        totalBalance = totalBalance * 0.75; // Caída del 25%
        currentAnnualRate = -10; 
      } else if (y === 6) {
        currentAnnualRate = 1; // Estancamiento
      } else if (y === 7 || y === 8) {
        currentAnnualRate = annualRate + 5; // Recuperación alcista
      }
    }

    const monthlyRate = (currentAnnualRate / 100) / 12;

    for (let m = 0; m < 12; m++) {
      totalBalance *= (1 + monthlyRate);
      totalBalance += monthlyContrib;
      totalInvested += monthlyContrib;
    }

    const totalInterests = Math.max(0, totalBalance - totalInvested);

    data.push({
      year: `Año ${y}`,
      Balance: Math.round(totalBalance),
      Colchon: Math.round(totalInvested),
      Interests: Math.round(totalInterests)
    });
  }

  return data;
};