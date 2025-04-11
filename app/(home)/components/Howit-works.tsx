import { Button } from "@/components/ui/button"
import { Users, Lightbulb, ChevronRight } from 'lucide-react'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dual Role System</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            On SkillLoop, you can be both a student and a teacher
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl blur-3xl opacity-30" />
            <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">As a Student</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Browse available classes from various teachers</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Join classes by spending your coins</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Learn at your own pace with live and recorded sessions</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Rate teachers and provide feedback</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Earn certificates for completed courses</p>
                </li>
              </ul>

              <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                Find Classes
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-300/20 rounded-xl blur-3xl opacity-30" />
            <div className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">As a Teacher</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Create and publish your own classes</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Set your own pricing in coins</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Schedule live sessions or upload recorded content</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Build your reputation with student ratings</p>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">Earn coins for every student who joins your class</p>
                </li>
              </ul>

              <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                Start Teaching
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
