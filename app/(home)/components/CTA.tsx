import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-blue-200 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to Join the SkillLoop?</h2>
            <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Start your journey today as both a learner and a teacher. Connect with others, share knowledge, and earn
              coins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
