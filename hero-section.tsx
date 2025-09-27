import { Button } from "@/components/ui/button"
import PulsingBorderShader from "./components/pulsing-border-shader"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Phone, ShoppingCart, Headphones, Zap, Shield, Check, Star } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-white to-purple-100/20 dark:from-blue-900/20 dark:via-black dark:to-purple-900/20" />

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Pricing section at the top */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Voice Agent
            </span>{" "}
            Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Scale your ecommerce customer support with AI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Free Plan */}
          <div className="bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <div className="text-3xl font-bold mb-1">$0</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">per month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">100 voice interactions/month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">Basic order tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">Email support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">Shopify integration</span>
              </li>
            </ul>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
              Get Started Free
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-blue-50/30 to-purple-50/30 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-500/50 rounded-2xl p-6 backdrop-blur-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Star className="w-3 h-3" />
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-1">$49</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">per month</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-sm">5,000 voice interactions/month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Advanced order processing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Cart recovery automation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Product recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Priority support</span>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Start Premium
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-1">Custom</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">pricing</div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Unlimited interactions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-500" />
                <span className="text-sm">White-label solution</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-500" />
                <span className="text-sm">24/7 phone support</span>
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Contact Sales</Button>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-8 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 text-sm">
              <Phone className="w-4 h-4" />
              AI Voice Commerce for Shopify
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                AI Voice Agent for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ecommerce Stores
                </span>{" "}
                & Shopify
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Boost your Shopify store's sales with our AI voice agent that handles orders, tracks shipments, answers
                product questions, and converts visitors 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                <Headphones className="mr-2 w-5 h-5" />
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                24/7 Sales Support
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Order Processing
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Cart Recovery
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">3x</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Higher Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">85%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Cart Recovery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">200+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Shopify Stores</div>
              </div>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind the shader */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl scale-110" />

              {/* Main shader component */}
              <div className="relative">
                <PulsingBorderShader />
              </div>

              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce border border-blue-300 dark:border-blue-400/30"
                style={{ animationDelay: "0s" }}
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div
                className="absolute top-1/3 -left-6 w-8 h-8 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce border border-purple-300 dark:border-purple-400/30"
                style={{ animationDelay: "1s" }}
              >
                <ShoppingCart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div
                className="absolute bottom-1/4 -right-8 w-8 h-8 bg-pink-100 dark:bg-pink-500/20 rounded-full flex items-center justify-center animate-bounce border border-pink-300 dark:border-pink-400/30"
                style={{ animationDelay: "2s" }}
              >
                <Shield className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent" />
    </div>
  )
}
