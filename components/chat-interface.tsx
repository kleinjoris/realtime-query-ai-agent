import type { Message } from "@ai-sdk/react"
import { cn } from "@/lib/utils"

interface ChatInterfaceProps {
  messages: Message[]
  isLoading: boolean
}

export function ChatInterface({ messages, isLoading }: ChatInterfaceProps) {
  return (
    <div className="p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p>Ask the agent to analyze data, make predictions, or take actions.</p>
          <p className="text-sm mt-2">Example: "What are the current stock trends for tech companies?"</p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={cn("p-4 rounded-lg", message.role === "user" ? "bg-blue-100 ml-8" : "bg-gray-100 mr-8")}
          >
            <div className="font-semibold mb-1">{message.role === "user" ? "You" : "Agent"}</div>
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>
        ))
      )}

      {isLoading && (
        <div className="p-4 rounded-lg bg-gray-100 mr-8 animate-pulse">
          <div className="font-semibold mb-1">Agent</div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      )}
    </div>
  )
}
