import { Code, Coins, Users, Sparkles } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SkillLoop</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on Hathor Network for a secure, transparent learning ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Blockchain Powered</h3>
            <p className="text-gray-600">
              Built on Hathor Network for secure, transparent transactions and ownership records.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Coins className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Token Economy</h3>
            <p className="text-gray-600">
              Earn and spend coins in a self-sustaining ecosystem that rewards participation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Community Driven</h3>
            <p className="text-gray-600">Join a vibrant community of learners and teachers sharing knowledge.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Skill Verification</h3>
            <p className="text-gray-600">
              Earn verifiable certificates stored on the blockchain as proof of your skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
