"use client"

import * as React from "react"
import { cn } from "../../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import { MessageLoading } from "./message-loading"

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
  children: React.ReactNode
}

export function ChatBubble({
  variant = "received",
  className,
  children,
  ...props
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 mb-4",
        variant === "sent" && "flex-row-reverse",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  fallback: string
}

export function ChatBubbleAvatar({
  src,
  fallback,
  className,
  ...props
}: ChatBubbleAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8", className)} {...props}>
      {src && <AvatarImage src={src} alt={fallback} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received"
  isLoading?: boolean
}

export function ChatBubbleMessage({
  variant = "received",
  isLoading,
  className,
  children,
  ...props
}: ChatBubbleMessageProps) {
  return (
    <div
      className={cn(
        "rounded-lg px-4 py-2 max-w-[80%]",
        variant === "sent"
          ? "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-900",
        isLoading && "animate-pulse",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="flex space-x-2">
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100" />
          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200" />
        </div>
      ) : (
        children
      )}
    </div>
  )
}

interface ChatBubbleActionProps {
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export function ChatBubbleAction({
  icon,
  onClick,
  className,
}: ChatBubbleActionProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-6 w-6", className)}
      onClick={onClick}
    >
      {icon}
    </Button>
  )
}

export function ChatBubbleActionWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex items-center gap-1 mt-2", className)}>
      {children}
    </div>
  )
} 