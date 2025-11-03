export interface CodeExample {
  html: string;
  description: string;
}

export interface MiniProject {
  title: string;
  description: string;
  instructions: string;
}

export interface Lesson {
  id: string;
  title: string;
  order: number;
  theory: string;
  codeExample: CodeExample;
  miniProject: MiniProject;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}
