"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Workflow, X } from "lucide-react";
import { useSystemStore } from "@/store/systemStore";
import BorderGlow from "@/components/ui/BorderGlow";

const projectsData = [
    {
        id: 1,
        title: 'BioSync Intelligence',
        category: 'AI / HealthTech',
        description: 'A real-time biological state intelligence platform that ingests high-frequency biometric event streams and predicts human states like fatigue and stress via ML models.',
        tech: ['FastAPI', 'PyTorch', 'Next.js', 'Docker'],
        link: 'https://github.com/cybertarr-A/biosync',
        metrics: ["Sub-50ms inference", "Stream ingestion via Redis", "End-to-End Containerized"],
        color: "#00E6FF" // primary
    },
    {
        id: 2,
        title: 'OpsNerve SRE Agent',
        category: 'AI / DevOps',
        description: 'An autonomous, multimodal AI SRE agent that diagnoses server crashes using vision+text and formulates Kubernetes patches via RAG-searched runbooks.',
        tech: ['AI', 'Kubernetes', 'RAG', 'Vision'],
        link: 'https://github.com/cybertarr-A/OpsNerve-Multimodal-Autonomous-SRE-Agent',
        metrics: ["Vision+Text diagnostic", "Automated k8s patching", "Runbook Retrieval"],
        color: "#8A3FFC" // secondary
    },
    {
        id: 3,
        title: 'CYBERSCANNER',
        category: 'Cybersecurity',
        description: 'A high-performance, modular C++ cybersecurity scanning framework designed for ethical hacking, penetration testing, and advanced research.',
        tech: ['C++', 'Security', 'Penetration'],
        link: 'https://github.com/cybertarr-A/CYBERSCANNER',
        metrics: ["High-speed networking", "Modular payload delivery", "Memory-safe execution"],
        color: "#FF003C" // accent
    },
    {
        id: 4,
        title: 'VOIDNET',
        category: 'Cybersecurity',
        description: 'AI-Powered Password Intelligence System and terminal-based cybersecurity tool designed for robust password analysis and threat mitigation.',
        tech: ['Python', 'AI', 'Security', 'Terminal'],
        link: 'https://github.com/cybertarr-A/VOIDNET',
        metrics: ["AI predictive cracking", "Terminal interactivity", "Heuristic analysis"],
        color: "#00E6FF" 
    },
    {
        id: 5,
        title: 'SentinelX',
        category: 'AI / Security',
        description: 'Full-stack AI security system with YOLO-based detection, behavioral anomaly analysis, predictive threat modeling, and a real-time command center dashboard.',
        tech: ['FastAPI', 'React', 'YOLO', 'AI'],
        link: 'https://github.com/cybertarr-A/SentinelX',
        metrics: ["Real-time anomaly scoring", "YOLOv8 integration", "Live WebSocket dashboard"],
        color: "#8A3FFC" 
    },
    {
        id: 6,
        title: 'CyberWarriorV2',
        category: 'AI / Cybersecurity',
        description: 'Real-time AI Assistant for Bug Bounty Automation, capable of advanced vulnerability discovery and intelligence gathering.',
        tech: ['AI', 'Automation', 'Security', 'Bug Bounty'],
        link: 'https://github.com/cybertarr-A/CyberWarriorV2',
        metrics: ["Automated intel gathering", "Real-time scanning", "Vulnerability classification"],
        color: "#FF003C" 
    },
    {
        id: 7,
        title: 'AI Image Generator',
        category: 'Generative AI',
        description: 'Advanced generative AI tool creating unique, high-quality images utilizing powerful machine learning models and diffusion techniques.',
        tech: ['Python', 'Stable Diffusion', 'AI'],
        link: 'https://github.com/cybertarr-A/Image-Generator',
        metrics: ["Diffusion sampling", "VQGAN+CLIP embeddings", "Colab-optimized"],
        color: "#00E6FF" 
    },
    {
        id: 8,
        title: 'RepoMind AI',
        category: 'AI / Developer Tool',
        description: 'AI-powered GitHub repository analyzer using RAG, embeddings, and multi-model reasoning.',
        tech: ['FastAPI', 'FAISS', 'LLM', 'Next.js'],
        link: '#',
        metrics: ["RAG-based analysis", "Multi-file reasoning", "Semantic code search"],
        color: "#00FFA3"
    },
    {
    id: 9,
    title: 'CyberWarrior V4',
    category: 'AI / Cybersecurity / Autonomous Systems',
    description: 'Groq-powered autonomous bug bounty AI system with swarm intelligence, real-time vulnerability discovery, exploit chain reasoning, and advanced RAG-based threat analysis.',
    tech: [
        'FastAPI',
        'Groq Cloud',
        'FAISS',
        'LLM',
        'Redis',
        'Nuclei',
        'Nmap',
        'Next.js'
    ],
    link: 'https://github.com/cybertarr-A/cyberwarrior_v4',
    metrics: [
        "Swarm-based parallel scanning",
        "Groq ultra-fast AI reasoning",
        "Attack chain generation engine",
        "RAG-powered threat intelligence",
        "Autonomous recon → exploit pipeline",
        "HackerOne-style report generation"
    ],
    color: "#FF003C"
},
    {
    id: 10,
    title: 'BrainBase AI',
    category: 'AI / Knowledge Systems / Cognitive Intelligence',
    description: 'A next-generation AI knowledge operating system that transforms unstructured data into structured intelligence using embeddings, RAG pipelines, and multi-layer reasoning. BrainBase enables developers and teams to query, analyze, and synthesize knowledge across documents, codebases, and datasets in real time.',
    
    tech: [
        'FastAPI',
        'FAISS',
        'PostgreSQL',
        'OpenAI / LLM',
        'Redis',
        'Next.js',
        'Docker',
        'Vector Embeddings'
    ],

    link: 'https://github.com/cybertarr-A/brainbase',

    metrics: [
        "RAG-powered knowledge retrieval engine",
        "Semantic search across multi-source data",
        "Context-aware AI reasoning pipelines",
        "Vector database + embedding indexing",
        "Real-time query → insight generation",
        "Scalable knowledge ingestion system",
        "Multi-document understanding",
        "AI-assisted developer workflows"
    ],

    color: "#00FFA3"
}
    {
    id: 10,
    title: 'BrainBase AI',
    category: 'AI / Knowledge Systems / Cognitive Intelligence',
    description: 'A next-generation AI knowledge operating system that transforms unstructured data into structured intelligence using embeddings, RAG pipelines, and multi-layer reasoning. BrainBase enables developers and teams to query, analyze, and synthesize knowledge across documents, codebases, and datasets in real time.',
    
    tech: [
        'FastAPI',
        'FAISS',
        'PostgreSQL',
        'OpenAI / LLM',
        'Redis',
        'Next.js',
        'Docker',
        'Vector Embeddings'
    ],

    link: 'https://github.com/cybertarr-A/brainbase',

    metrics: [
        "RAG-powered knowledge retrieval engine",
        "Semantic search across multi-source data",
        "Context-aware AI reasoning pipelines",
        "Vector database + embedding indexing",
        "Real-time query → insight generation",
        "Scalable knowledge ingestion system",
        "Multi-document understanding",
        "AI-assisted developer workflows"
    ],

    color: "#00FFA3"
}
];


export function ProjectsExplorer() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { setRobotSpeech, addLog } = useSystemStore();

  const selectedProject = projectsData.find(p => p.id === selectedId);

  const handleProjectHover = (project: any) => {
      setRobotSpeech(project.description);
      addLog("SYS_QUERY", `Accessing index: ${project.title}`);
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white"
        >
          <span className="text-secondary mr-2">&gt;</span> Deployed Systems
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <motion.div
              layoutId={`project-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              onMouseEnter={() => handleProjectHover(project)}
              onMouseLeave={() => setRobotSpeech(null)}
              className="cursor-pointer group h-full"
              whileHover={{ y: -5 }}
            >
              <BorderGlow
                className="h-full rounded-2xl"
                edgeSensitivity={30}
                glowColor="190 100 50" // Cyber Cyan base
                backgroundColor="rgba(0, 5, 10, 0.6)" // Dark backdrop for the card
                borderRadius={16}
                glowRadius={30}
                glowIntensity={1.5}
                coneSpread={30}
                animated={true}
                colors={['#00E6FF', '#8A3FFC', '#FF003C']}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                      <motion.div layoutId={`project-header-${project.id}`} className="mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: project.color }}>
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                      </motion.div>
                      <motion.p className="text-sm text-gray-400 mb-6 line-clamp-2 font-mono">
                        {project.description}
                      </motion.p>
                  </div>

                  <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="text-xs font-mono px-2 py-1 bg-white/5 whitespace-nowrap rounded border"
                            style={{ borderColor: "rgba(255,255,255,0.1)", color: project.color }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-mono text-white flex items-center gap-2">
                          <Workflow className="w-4 h-4" style={{ color: project.color }}/> 
                          <span className="hidden sm:inline">Access System</span>
                        </span>
                        <ExternalLink className="w-5 h-5" style={{ color: project.color }} />
                      </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              />
              <motion.div
                layoutId={`project-container-${selectedProject.id}`}
                className="glass-panel relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 border border-white/10 shadow-2xl z-10 bg-[#05050A]"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <motion.div layoutId={`project-header-${selectedProject.id}`} className="mb-8">
                  <span className="text-sm font-mono uppercase tracking-widest" style={{ color: selectedProject.color }}>
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
                    {selectedProject.title}
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Workflow className="w-5 h-5 text-gray-400" />
                        System Overview
                      </h4>
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Placeholder for SVG Architecture Map */}
                    <div className="w-full h-48 rounded-lg border border-white/10 bg-black/50 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                      <span className="text-xs font-mono text-gray-500">[ SYSTEM_ARCHITECTURE_DIAGRAM.SVG ]</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Metrics & Capabilities</h4>
                      <ul className="space-y-2">
                        {selectedProject.metrics.map(metric => (
                          <li key={metric} className="text-sm text-gray-300 font-mono flex items-start gap-2">
                            <span style={{ color: selectedProject.color }}>▹</span> {metric}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 rounded border border-white/10 text-gray-300 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded bg-white/5 hover:bg-white/10 transition-colors text-white font-mono text-sm border border-white/10"
                      >
                        <Code className="w-4 h-4" />
                        Init Source Code View
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
