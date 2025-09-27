"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    console.log("[v0] Current theme:", theme, "Resolved theme:", resolvedTheme)
    const newTheme = resolvedTheme === "light" ? "dark" : "light"
    console.log("[v0] Switching to theme:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9 bg-transparent border-gray-600" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="w-9 h-9 border-gray-600 hover:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors bg-transparent"
    >
      {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
