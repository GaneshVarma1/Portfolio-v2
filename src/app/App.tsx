"use client";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Recommendations } from "./components/Recommendations";
import { Publications } from "./components/Publications";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { Footer } from "./components/footer/Footer";
import { Preview } from "./components/Preview";
import { ScrollToTop } from "./components/ScrollToTop";
import { useTheme } from "./components/ThemeProvider";
import { AnimatedCursorComponent } from "./components/AnimatedCursorComponent";
import { ExpandableChatDemo } from "./components/ui/chat-demo";

function AppContent() {
  useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AnimatedCursorComponent />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Recommendations />
        <Publications />
        <Preview />
      </main>
      <Footer />
      <ScrollToTop />
      <ExpandableChatDemo />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App; 