'use client';

import { Lesson } from '@/lib/types';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LessonContentProps {
  lesson: Lesson;
}

type TabType = 'theory' | 'example' | 'project';

export default function LessonContent({ lesson }: LessonContentProps) {
  const [activeTab, setActiveTab] = useState<TabType>('theory');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'theory', label: 'Théorie' },
    { id: 'example', label: 'Exemple interactif' },
    { id: 'project', label: 'Mini-projet' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Lesson Header */}
      <div className="border-b border-gray-200 px-8 py-6">
        <h2 className="text-3xl font-bold text-gray-800">{lesson.title}</h2>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {activeTab === 'theory' && (
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {lesson.theory}
            </ReactMarkdown>
          </div>
        )}

        {activeTab === 'example' && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {lesson.codeExample.description}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code Editor */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Code HTML</h4>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto code-editor">
                  <code>{lesson.codeExample.html}</code>
                </pre>
              </div>

              {/* Live Preview */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Aperçu en direct</h4>
                <div 
                  className="svg-preview"
                  dangerouslySetInnerHTML={{ __html: lesson.codeExample.html }}
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-gray-700">
                💡 <strong>Astuce :</strong> Vous pouvez modifier le code dans votre éditeur local et voir les résultats en temps réel !
              </p>
            </div>
          </div>
        )}

        {activeTab === 'project' && (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {lesson.miniProject.title}
            </h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6 rounded">
              <p className="text-gray-700">{lesson.miniProject.description}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Instructions
              </h4>
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.miniProject.instructions}
                </ReactMarkdown>
              </div>
            </div>

            {/* Project workspace */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Espace de travail
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <textarea
                    className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Écrivez votre code SVG ici..."
                    defaultValue={'<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">\n  <!-- Votre code ici -->\n</svg>'}
                  />
                </div>
                <div>
                  <div className="svg-preview h-64 flex items-center justify-center">
                    <p className="text-gray-400">L&apos;aperçu apparaîtra ici</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
