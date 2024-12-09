import { ColorClasses } from '../types/prediction';

export const getColorClass = (color: string): ColorClasses => {
  const colorMap: Record<string, ColorClasses> = {
    green: {
      bg: 'bg-emerald-500/50',
      text: 'text-emerald-500'
    },
    red: {
      bg: 'bg-red-500/50',
      text: 'text-red-500'
    },
    yellow: {
      bg: 'bg-amber-500/50',
      text: 'text-amber-500'
    },
    blue: {
      bg: 'bg-blue-500/50',
      text: 'text-blue-500'
    }
  };

  return colorMap[color] || colorMap.red;
};