"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import { AgentThinking } from "@/components/agent-thinking"
import { ChatInterface } from "@/components/chat-interface"
import { DataVisualizer } from "@/components/data-visualizer"
import { AgentControls } from "@/components/agent-controls"

export default function Home() {
  const [showThinking, setShowThinking] = useState(true)
  const [activeDataSource, setActiveDataSource] = useState("stocks")

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/agent",
    body: {
      dataSource: activeDataSource,
    },
  })

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Intelligent Agent System</h1>

          <div className="flex-1 overflow-auto mb-4 border rounded-lg">
            <ChatInterface messages={messages} isLoading={isLoading} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask the agent to analyze data, make predictions, or take actions..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-blue-400"
            >
              Send
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 p-4 border-l">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Agent Controls</h2>
            <AgentControls
              activeDataSource={activeDataSource}
              setActiveDataSource={setActiveDataSource}
              showThinking={showThinking}
              setShowThinking={setShowThinking}
            />
          </div>

          {showThinking && messages.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Agent Thinking</h2>
              <AgentThinking messages={messages} />
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold mb-2">Data Visualization</h2>
            <DataVisualizer dataSource={activeDataSource} />
          </div>
        </div>
      </div>
    </main>
  )
}
