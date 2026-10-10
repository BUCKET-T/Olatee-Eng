import React from 'react';
import { ShieldCheck, Clock, Headphones } from 'lucide-react';

export default function ValueProps() {
  const propsList = [
    {
      id: 'certified',
      icon: ShieldCheck,
      title: 'Certified & Insured',
      description: 'Fully licensed professionals with comprehensive coverage for your peace of mind.',
    },
    {
      id: 'ontime',
      icon: Clock,
      title: 'On Time, On Budget',
      description: 'Transparent pricing and realistic timelines with no hidden surprises.',
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Lifetime Support',
      description: 'Ongoing maintenance and support long after the job is done.',
    },
  ];

  return (
    <div className="space-y-6">
      {propsList.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.id} className="flex items-start gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-100/60">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-brand-navy">
              <IconComponent className="w-6 h-6 text-brand-navy" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}