'use client';

import { Module } from '@/lib/types';
import { useState } from 'react';

interface NavigationProps {
  modules: Module[];
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  currentModuleId?: string;
  currentLessonId?: string;
}

export default function Navigation({ 
  modules, 
  onSelectLesson, 
  currentModuleId,
  currentLessonId 
}: NavigationProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set([modules[0]?.id]));

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <nav className="w-80 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Parcours SVG
      </h1>
      
      <div className="space-y-2">
        {modules.map((module) => (
          <div key={module.id} className="mb-4">
            <button
              onClick={() => toggleModule(module.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                currentModuleId === module.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">Module {module.order}</span>
                <span className={`transform transition-transform ${
                  expandedModules.has(module.id) ? 'rotate-90' : ''
                }`}>
                  ▶
                </span>
              </div>
              <div className="mt-1 text-base">{module.title}</div>
            </button>
            
            {expandedModules.has(module.id) && (
              <div className="ml-4 mt-2 space-y-1">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(module.id, lesson.id)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      currentLessonId === lesson.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {lesson.order}. {lesson.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
