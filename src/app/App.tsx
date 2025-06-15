"use client";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { Footer } from "./components/footer/Footer";
import { Preview } from "./components/Preview";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { AnimatedCursorComponent } from "./components/AnimatedCursorComponent";
import { ExpandableChatDemo } from "./components/ui/chat-demo";

function AppContent() {
  useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AnimatedCursorComponent />
      <Navigation />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Publications />
      <Preview />
      <Footer />
      <ScrollToTop />
      <ExpandableChatDemo />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 