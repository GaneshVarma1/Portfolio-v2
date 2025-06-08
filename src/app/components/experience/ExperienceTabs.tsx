import React from 'react';

interface ExperienceTabsProps {
  activeTab: 'work' | 'education';
  onTabChange: (tab: 'work' | 'education') => void;
}

export function ExperienceTabs({ activeTab, onTabChange }: ExperienceTabsProps) {
  return (
    <div className="md:w-32">
      <div className="flex md:flex-col gap-4">
        <button
          onClick={() => onTabChange('work')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'work'
              ? 'text-blue-500 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/5'
              : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
          }`}
        >
          Work
        </button>
        <button
          onClick={() => onTabChange('education')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === 'education'
              ? 'text-blue-500 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/5'
              : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
          }`}
        >
          Education
        </button>
      </div>
    </div>
  );
}