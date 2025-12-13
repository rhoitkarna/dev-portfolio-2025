import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
  isCommand?: boolean;
}

const COMMANDS = {
  help: `Available commands:
  about     - Learn about me
  skills    - View my technical skills
  experience - See my work experience
  projects  - Browse my projects
  contact   - Get my contact info
  resume    - Download my resume
  clear     - Clear the terminal
  social    - View social links`,
  
  about: `> Rohit Karna
  Full Stack Developer & Tech Enthusiast
  
  I craft elegant solutions to complex problems.
  Passionate about clean code, system design, and
  building tools that matter.
  
  🌍 Kathmandu, Nepal
  ⚡ 2+ years of experience`,
  
  skills: `> Technical Skills
  
  Languages:  Python, Javascript, Typescript, Bash, Go (Getting Started)
  Frontend:   React, Tailwind, shadcn
  Backend:    Node.js, Django, FastAPI, PostgreSQL, MongoDB
  DevOps:     Docker, Azure, CI/CD Pipelines
  Tools:      Git, Linux, System Administration`,
  
  experience: `> Work Experience
  
  ▸ Systems Analyst @ Triad Asia (2023-Present)
    Frontend/backend/automation applications for US and Europe Oil Terminals 
  
  ▸ Freelance Frontend Developer @ Astrapi Technology (2023-2024)
    Client projects with React.js`,
  
  projects: `> Featured Projects
  
  ◆ Railman - Real time monitoring system for railcar fuel loading.
  ◆ FarmEasy - Mobile app for paddy leaves disease classification.
  ◆ Regmon - Tracking system for register value changes for flow controllers. 
  ◆ TriadEMS - Employee Management System for internal usage.
  
  Type 'projects --open' to scroll to projects section`,
  
  contact: `> Contact Information
  
  ✉ email:    rohitkarn627@gmail.com
  🐙 github:   github.com/rhoitkarna
  💼 linkedin: linkedin.com/in/rohit-karna
  🐦 twitter:  @rhoitkarna
  
  Or scroll down to use the contact form!`,
  
  resume: `> Downloading resume...
  
  [████████████████████] 100%
  
  ✓ Resume downloaded successfully!`,
  
  social: `> Social Links
  
  GitHub:   https://github.com/rhoitkarna
  LinkedIn: https://linkedin.com/in/rohit-karna
  Twitter:  https://twitter.com/rhoitkarna`,
};

export const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: "Welcome to Rohit's Terminal Portfolio v1.0.0" },
    { type: 'output', content: "Type 'help' to see available commands.\n" },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setLines([]);
      return;
    }

    const newLines: TerminalLine[] = [
      ...lines,
      { type: 'input', content: cmd, isCommand: true },
    ];

    if (trimmedCmd in COMMANDS) {
      newLines.push({ 
        type: 'output', 
        content: COMMANDS[trimmedCmd as keyof typeof COMMANDS] 
      });
    } else if (trimmedCmd === 'projects --open') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      newLines.push({ type: 'output', content: '> Scrolling to projects...' });
    } else if (trimmedCmd === '') {
      // Do nothing for empty input
    } else {
      newLines.push({ 
        type: 'output', 
        content: `Command not found: ${trimmedCmd}\nType 'help' for available commands.` 
      });
    }

    setLines(newLines);
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-lg overflow-hidden border border-terminal-border terminal-glow bg-terminal-bg">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
          </div>
          <span className="font-mono text-sm text-muted-foreground ml-2">
            ~/portfolio — bash
          </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 h-80 overflow-y-auto font-mono text-sm cursor-text"
        >
          {lines.map((line, index) => (
            <div key={index} className="mb-1">
              {line.isCommand ? (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-prompt">visitor@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-secondary">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="text-foreground ml-1">{line.content}</span>
                </div>
              ) : (
                <pre className="text-terminal-text whitespace-pre-wrap">{line.content}</pre>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center gap-2">
            <span className="text-terminal-prompt">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-secondary">~</span>
            <span className="text-muted-foreground">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground ml-1 caret-terminal-cursor"
              autoFocus
              spellCheck={false}
            />
            <span className="typing-cursor" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
