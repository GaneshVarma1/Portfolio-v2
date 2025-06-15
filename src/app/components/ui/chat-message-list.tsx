import * as React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "./button";
import { ChatBubble } from "./chat-bubble";
import { cn } from "../../../lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "AI";
}

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  smooth?: boolean;
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, smooth = false, ...props }, _ref) => {
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = React.useCallback(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      }
    }, [smooth]);

    React.useEffect(() => {
      scrollToBottom();
    }, [children, scrollToBottom]);

    return (
      <div className="relative w-full h-full">
        <div
          className={cn(
            "flex flex-col w-full h-full p-4 overflow-y-auto",
            "[&::-webkit-scrollbar]:hidden",
            "[-ms-overflow-style:none]",
            "[scrollbar-width:none]",
            className
          )}
          {...props}
        >
          <div className="flex flex-col gap-6">
            {children}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    );
  }
);

ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList }; 