import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import learn from '@/public/learn.png'
export default function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-medium mb-6">
            Built on Hathor Network
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Learn, Teach, Earn with SkillLoop
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A decentralized platform where you can develop skills by joining classes using coins, and earn by teaching
            others. Be both a student and a teacher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Become a Teacher
            </Button>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/30 to-blue-500/30 rounded-xl blur-3xl opacity-30" />
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={learn}
              alt="SkillLoop Platform"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
