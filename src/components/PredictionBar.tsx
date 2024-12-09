import React from 'react';
import { Prediction } from '../types/prediction';
import { getColorClass } from '../utils/colorUtils';

interface PredictionBarProps {
  icon: React.ReactNode;
  title: string;
  predictions: Prediction[];
}

export const PredictionBar: React.FC<PredictionBarProps> = ({ icon, title, predictions }) => {
  return (
    <div className="bg-red-950/20 p-3 rounded-md hover:bg-red-950/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-bold">{title}</span>
      </div>
      <div className="flex justify-between text-sm">
        {predictions.map((pred, index) => (
          <div key={index} className="flex items-center gap-1">
            {pred.label}:
            <span className={`${getColorClass(pred.color).text} font-bold`}>
              {pred.value}%
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 h-2 bg-red-950/30 rounded-full overflow-hidden flex">
        {predictions.map((pred, index) => (
          <div
            key={index}
            className={getColorClass(pred.color).bg}
            style={{ width: `${pred.value}%` }}
          />
        ))}
      </div>
    </div>
  );
};