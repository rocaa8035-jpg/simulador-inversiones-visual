// src/App.jsx
import React, { useState, useMemo } from 'react';
import { calculateCompoundInterest } from './utils/financeCalcs';
import { InvestmentChart } from './components/InvestmentChart';

export default function App() {
  const [initialAmount, setInitialAmount] = useState(5000);
  const [monthlyContrib, setMonthlyContrib] = useState(200);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(9);
  const [isCrisisActive, setIsCrisisActive] = useState(false);

  const chartData = useMemo(() => {
    return calculateCompoundInterest(initialAmount, monthlyContrib, years, rate, isCrisisActive);
  }, [initialAmount, monthlyContrib, years, rate, isCrisisActive]);

  const finalResult = chartData[chartData.length - 1];
  const moneyLost = finalResult.Balance - finalResult.Colchon;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <header className="border-b border-slate-800 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Simulador Estadístico de Inversión</h1>
          <p className="text-sm text-slate-400 mt-1">Visualiza el impacto real del interés compuesto frente al ahorro pasivo.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* PANEL DE CONTROLES */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-6 h-fit">
            <h2 className="text-lg font-bold text-white mb-2">Configuración</h2>
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex justify-between">
                <span>Depósito Inicial:</span>
                <span className="text-blue-400 font-bold">${initialAmount.toLocaleString()}</span>
              </label>
              <input 
                type="range" min="0" max="50000" step="1000" 
                value={initialAmount} onChange={(e) => setInitialAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex justify-between">
                <span>Aporte Mensual:</span>
                <span className="text-blue-400 font-bold">${monthlyContrib.toLocaleString()}</span>
              </label>
              <input 
                type="range" min="0" max="2000" step="50" 
                value={monthlyContrib} onChange={(e) => setMonthlyContrib(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex justify-between">
                <span>Plazo:</span>
                <span className="text-blue-400 font-bold">{years} años</span>
              </label>
              <input 
                type="range" min="1" max="40" step="1" 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 flex justify-between">
                <span>Interés Anual Estimado:</span>
                <span className="text-emerald-400 font-bold">{rate}%</span>
              </label>
              <input 
                type="range" min="1" max="25" step="0.5" 
                value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <hr className="border-slate-800" />

            {/* CONTROL DE CRISIS */}
            <div className="bg-slate-950/50 p-4 rounded-xl border border-rose-950/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-rose-400">⚠️ Modo Prueba de Estrés</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Crash del -25% en el Año 5.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" checked={isCrisisActive} onChange={(e) => setIsCrisisActive(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600 peer-checked:after:bg-white"></div>
                </label>
              </div>
            </div>
          </div>

          {/* CUADRO DE RESULTADOS Y GRÁFICO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Total Inversión</p>
                <p className="text-xl md:text-2xl font-bold text-emerald-400 mt-1">${finalResult.Balance.toLocaleString()}</p>
              </div>
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Total Colchón</p>
                <p className="text-xl md:text-2xl font-bold text-slate-400 mt-1">${finalResult.Colchon.toLocaleString()}</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-rose-950 bg-rose-950/10">
                <p className="text-[11px] text-rose-400 uppercase tracking-wider font-semibold">
                  {moneyLost >= 0 ? "Diferencia Ganada" : "Pérdida Neta"}
                </p>
                <p className={`text-xl md:text-2xl font-bold mt-1 ${moneyLost >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                  ${Math.abs(moneyLost).toLocaleString()}
                </p>
              </div>
            </div>

            <InvestmentChart data={chartData} />
          </div>

        </div>
      </div>
    </div>
  );
}