"use client"

import type { Dispatch, SetStateAction } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface AgentControlsProps {
  activeDataSource: string
  setActiveDataSource: Dispatch<SetStateAction<string>>
  showThinking: boolean
  setShowThinking: Dispatch<SetStateAction<boolean>>
}

export function AgentControls({
  activeDataSource,
  setActiveDataSource,
  showThinking,
  setShowThinking,
}: AgentControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="show-thinking" checked={showThinking} onCheckedChange={setShowThinking} />
        <Label htmlFor="show-thinking">Show Agent Thinking</Label>
      </div>

      <div>
        <Label className="block mb-2">Data Source</Label>
        <RadioGroup value={activeDataSource} onValueChange={setActiveDataSource} className="space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="stocks" id="stocks" />
            <Label htmlFor="stocks">Stock Market Data</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weather" id="weather" />
            <Label htmlFor="weather">Weather Forecasts</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="news" id="news" />
            <Label htmlFor="news">News Headlines</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
