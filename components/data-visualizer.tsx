"use client"

import { useEffect, useState } from "react"

interface DataVisualizerProps {
  dataSource: string
}

export function DataVisualizer({ dataSource }: DataVisualizerProps) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    // Simulate fetching data based on the selected source
    setTimeout(() => {
      if (dataSource === "stocks") {
        setData([
          { name: "AAPL", value: 182.52, change: +1.2 },
          { name: "MSFT", value: 415.32, change: -0.5 },
          { name: "GOOGL", value: 173.63, change: +0.8 },
          { name: "AMZN", value: 178.22, change: +1.5 },
          { name: "META", value: 474.99, change: +2.1 },
        ])
      } else if (dataSource === "weather") {
        setData([
          { city: "New York", temp: 72, condition: "Sunny" },
          { city: "London", temp: 65, condition: "Cloudy" },
          { city: "Tokyo", temp: 80, condition: "Rainy" },
          { city: "Sydney", temp: 68, condition: "Partly Cloudy" },
        ])
      } else if (dataSource === "news") {
        setData([
          { title: "Tech Stocks Rally Amid AI Advancements", source: "Financial Times" },
          { title: "New Climate Policy Announced", source: "Reuters" },
          { title: "Healthcare Innovation Summit Next Week", source: "Bloomberg" },
        ])
      }

      setLoading(false)
    }, 1000)
  }, [dataSource])

  if (loading) {
    return (
      <div className="border rounded-lg p-4 space-y-2 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    )
  }

  return (
    <div className="border rounded-lg p-4">
      {dataSource === "stocks" && (
        <div className="space-y-2">
          <h3 className="font-medium">Real-time Stock Data</h3>
          <div className="grid grid-cols-3 gap-1 text-sm font-medium">
            <div>Symbol</div>
            <div>Price</div>
            <div>Change</div>
          </div>
          {data.map((stock, i) => (
            <div key={i} className="grid grid-cols-3 gap-1 text-sm">
              <div>{stock.name}</div>
              <div>${stock.value}</div>
              <div className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </div>
            </div>
          ))}
        </div>
      )}

      {dataSource === "weather" && (
        <div className="space-y-2">
          <h3 className="font-medium">Weather Forecasts</h3>
          <div className="grid grid-cols-3 gap-1 text-sm font-medium">
            <div>City</div>
            <div>Temp</div>
            <div>Condition</div>
          </div>
          {data.map((item, i) => (
            <div key={i} className="grid grid-cols-3 gap-1 text-sm">
              <div>{item.city}</div>
              <div>{item.temp}°F</div>
              <div>{item.condition}</div>
            </div>
          ))}
        </div>
      )}

      {dataSource === "news" && (
        <div className="space-y-2">
          <h3 className="font-medium">Latest Headlines</h3>
          {data.map((item, i) => (
            <div key={i} className="text-sm border-b pb-2 last:border-0">
              <div className="font-medium">{item.title}</div>
              <div className="text-gray-500 text-xs">{item.source}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
