"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import benchmarkData from "@/data/benchmark-data.json";
import { type GPU } from "@/lib/gpu-search";

interface PerformanceChartProps {
  gpu: GPU;
}

export default function PerformanceChart({ gpu }: PerformanceChartProps) {
  const [selectedGame, setSelectedGame] = useState("cyberpunk-2077");

  // Only show games that have DLSS 5 support
  const availableGames = benchmarkData.games.filter((g) => g.dlss5_support);

  const gameData =
    benchmarkData.benchmarks[selectedGame as keyof typeof benchmarkData.benchmarks];
  const gpuStats = gameData?.data[gpu.id as keyof typeof gameData.data];

  const selectedGameInfo = availableGames.find((g) => g.id === selectedGame);

  const chartData = gpuStats
    ? [
        {
          name: "Without DLSS",
          fps: gpuStats.dlss_off,
          fill: "#6b7280",
        },
        {
          name: "With DLSS 5",
          fps: gpuStats.dlss5_on,
          fill: "#22c55e",
        },
      ]
    : null;

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <span>📊</span> Performance Boost Estimate
        </CardTitle>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Select game:</span>
          <Select value={selectedGame} onValueChange={(v) => v && setSelectedGame(v)}>
            <SelectTrigger className="w-64">
              <SelectValue>
                {availableGames.find((g) => g.id === selectedGame)?.name ?? selectedGame}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {availableGames.map((game) => (
                <SelectItem key={game.id} value={game.id}>
                  {game.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {!gameData ? (
          <div className="text-muted-foreground text-sm text-center py-8">
            Benchmark data not available for this game/GPU combination yet.
          </div>
        ) : !gpuStats ? (
          <div className="text-muted-foreground text-sm text-center py-8">
            <p>Benchmark data for {gpu.name} in this game is not yet available.</p>
            <p className="mt-1 text-xs">Based on your GPU tier, expect a similar boost pattern.</p>
          </div>
        ) : (
          <>
            {/* Stats summary */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold">{gpuStats.dlss_off}</div>
                <div className="text-xs text-muted-foreground">FPS (Off)</div>
              </div>
              <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="text-2xl font-bold text-green-500">{gpuStats.dlss5_on}</div>
                <div className="text-xs text-muted-foreground">FPS (DLSS 5)</div>
              </div>
              <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">+{gpuStats.boost_pct}%</div>
                <div className="text-xs text-muted-foreground">Boost</div>
              </div>
            </div>

            {/* Bar chart */}
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData!} barCategoryGap="40%">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" tick={{ fontSize: 13 }} />
                <YAxis
                  label={{ value: "FPS", angle: -90, position: "insideLeft", fontSize: 12 }}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--background))", borderColor: "hsl(var(--border))" }}
                  formatter={(value) => [`${value} FPS`]}
                />
                <Bar dataKey="fps" radius={[4, 4, 0, 0]}>
                  {chartData!.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              {selectedGameInfo?.name} · {gameData.resolution} · {gameData.settings} settings
              {gpu.dlss5_support === "partial" &&
                " · Results reflect available DLSS 5 features for your GPU"}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
