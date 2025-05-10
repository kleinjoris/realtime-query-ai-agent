"use client"

import type { Message } from "@ai-sdk/react"
import { useState } from "react"

interface AgentThinkingProps {
  messages: Message[]
}

export function AgentThinking({ messages }: AgentThinkingProps) {
  const [expanded, setExpanded] = useState(false)

  // Get the last assistant message for thinking visualization
  const lastAssistantMessage = [...messages].reverse().find((m) => m.role === "assistant")

  if (!lastAssistantMessage) return null

  // Simulate the agent's thinking process
  const thinking = [
    { step: "Query Analysis", content: "Analyzing user query for intent and required data sources." },
    { step: "Data Retrieval", content: "Retrieving relevant documents and real-time data from selected sources." },
    { step: "Reasoning", content: "Applying multi-step reasoning to synthesize information and form conclusions." },
    {
      step: "Action Planning",
      content: "Determining if actions are needed based on user request and available tools.",
    },
    {
      step: "Response Generation",
      content: "Formulating a comprehensive response with relevant insights and visualizations.",
    },
  ]

  return (
    <div className="border rounded-lg p-3 bg-gray-50">
      <div className="space-y-2">
        {thinking.slice(0, expanded ? thinking.length : 2).map((step, index) => (
          <div key={index} className="text-sm">
            <div className="font-medium">{step.step}</div>
            <div className="text-gray-600">{step.content}</div>
          </div>
        ))}
      </div>

      <button onClick={() => setExpanded(!expanded)} className="text-blue-600 text-sm mt-2">
        {expanded ? "Show Less" : "Show More Steps"}
      </button>
    </div>
  )
}
