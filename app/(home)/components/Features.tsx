import { Coins, GraduationCap, BookOpen } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SkillLoop Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform connects learners and teachers in a decentralized ecosystem powered by Hathor Network
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Coins className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Token Economy</h3>
            <p className="text-gray-600">
              Use coins to join classes and learn new skills. Earn coins by teaching others what you know.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Learn Any Skill</h3>
            <p className="text-gray-600">
              Access a wide range of classes taught by experts. From coding to cooking, find the skills you want to
              develop.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Teach & Earn</h3>
            <p className="text-gray-600">
              Share your expertise and earn coins. Create courses, set your price, and build your reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
