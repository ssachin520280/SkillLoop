import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Repeat } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Repeat className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            SkillLoop
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
            Benefits
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={"/auth"}>
          <Button
            variant="outline"
            className="hidden sm:flex border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Sign In
          </Button>
          </Link>
          <Link href={"/auth"}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
