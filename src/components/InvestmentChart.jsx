// src/components/InvestmentChart.jsx
import React from 'react';
import { 
  ComposedChart, 
  Area, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const InvestmentChart = ({ data }) => {
  return (
    <div className="w-full h-[380px] bg-slate-900 p-4 md:p-6 rounded-xl border border-slate-800">
      <h3 className="text-white text-base md:text-lg font-semibold mb-4">Inversión vs. Ahorro Tradicional</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="year" stroke="#94a3b8" tickLine={false} dy={10} fontSize={12} />
          <YAxis 
            stroke="#94a3b8" 
            tickLine={false} 
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            dx={-5}
            fontSize={12}
          />
          
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', borderRadius: '8px' }}
            labelStyle={{ color: '#fff', fontWeight: 'bold' }}
            itemStyle={{ color: '#94a3b8' }}
            formatter={(value) => [formatter.format(value)]}
          />
          
          <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />

          <Area 
            type="monotone" 
            dataKey="Balance" 
            stroke="#10b981" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorBalance)" 
            name="Estrategia con Inversión"
          />

          <Line 
            type="monotone" 
            dataKey="Colchon" 
            stroke="#64748b" 
            strokeWidth={2}
            strokeDasharray="5 5" 
            dot={false} 
            name="Ahorro bajo el Colchón"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};