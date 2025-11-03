'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import LessonContent from '@/components/LessonContent';
import { Module, Lesson } from '@/lib/types';

export default function Home() {
  const [modules, setModules] = useState<Module[]>([]);
  const [currentModuleId, setCurrentModuleId] = useState<string>('');
  const [currentLessonId, setCurrentLessonId] = useState<string>('');
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load modules data
    fetch('/api/modules')
      .then(res => res.json())
      .then(data => {
        setModules(data);
        if (data.length > 0 && data[0].lessons.length > 0) {
          setCurrentModuleId(data[0].id);
          setCurrentLessonId(data[0].lessons[0].id);
          setCurrentLesson(data[0].lessons[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading modules:', err);
        setLoading(false);
      });
  }, []);

  const handleSelectLesson = (moduleId: string, lessonId: string) => {
    setCurrentModuleId(moduleId);
    setCurrentLessonId(lessonId);
    
    const selectedModule = modules.find(m => m.id === moduleId);
    const lesson = selectedModule?.lessons.find(l => l.id === lessonId);
    if (lesson) {
      setCurrentLesson(lesson);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du parcours...</p>
        </div>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-gray-600">Aucun module disponible</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex h-screen bg-gray-100">
      <Navigation
        modules={modules}
        onSelectLesson={handleSelectLesson}
        currentModuleId={currentModuleId}
        currentLessonId={currentLessonId}
      />
      
      {currentLesson ? (
        <LessonContent lesson={currentLesson} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Sélectionnez une leçon pour commencer</p>
        </div>
      )}
    </main>
  );
}
