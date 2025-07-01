"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog";
import { recommendations, Recommendation } from "../data/recommendations";

export function Recommendations() {
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null);

  const handleCardClick = (recommendation: Recommendation) => {
    setSelectedRecommendation(recommendation);
  };

  const handleCloseDialog = () => {
    setSelectedRecommendation(null);
  };

  return (
    <>
      <section id="recommendations" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Recommendations
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleCardClick(recommendation)}
              >
                <div className="p-6">
                  {/* Header with LinkedIn styling */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900">
                        <img
                          src={recommendation.authorImage}
                          alt={recommendation.authorName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-card-foreground truncate">
                          {recommendation.authorName}
                        </h3>
                        {recommendation.isVerified && (
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        @{recommendation.authorHandle}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        {recommendation.timestamp}
                      </p>
                    </div>
                    <LinkedinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  </div>

                  {/* Content Preview */}
                  <div className="space-y-2">
                    {recommendation.content.map((line, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Read More Indicator */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground/70">
                        Click to read full recommendation
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>

                  {/* Reply Preview */}
                  {recommendation.reply && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={recommendation.reply.authorImage}
                            alt={recommendation.reply.authorName}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium">{recommendation.reply.authorName}</span>
                            <span>•</span>
                            <span>{recommendation.reply.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {recommendation.reply.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedRecommendation} onOpenChange={() => handleCloseDialog()}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="text-card-foreground">LinkedIn Recommendation</DialogTitle>
            <DialogClose onClose={handleCloseDialog} />
          </DialogHeader>
          
          {selectedRecommendation && (
            <div className="p-6">
              <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900">
                    <img
                      src={selectedRecommendation.authorImage}
                      alt={selectedRecommendation.authorName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {selectedRecommendation.authorName}
                    </h3>
                    {selectedRecommendation.isVerified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <LinkedinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-muted-foreground mt-1">
                    @{selectedRecommendation.authorHandle}
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1">
                    {selectedRecommendation.timestamp}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-card-foreground leading-relaxed whitespace-pre-line">
                    {selectedRecommendation.fullContent}
                  </p>
                </div>
              </div>
              
              {selectedRecommendation.reply && (
                <div className="mb-6 pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Your Response</h4>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src={selectedRecommendation.reply.authorImage}
                          alt={selectedRecommendation.reply.authorName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-card-foreground text-sm">
                          {selectedRecommendation.reply.authorName}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          • {selectedRecommendation.reply.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {selectedRecommendation.reply.content}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 