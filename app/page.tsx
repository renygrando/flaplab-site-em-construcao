import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-20 animate-glow"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo Section */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative group">
                <Image
                  src="/logo-flaplab.webp"
                  alt="FLAPLAB Logo"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
                  className="w-auto max-w-full h-auto max-h-32 md:max-h-40 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 font-display leading-tight">
                Site em Construção
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Estamos trabalhando duro para trazer algo{" "}
              <span className="font-semibold text-slate-700 relative">
                incrível
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              </span>{" "}
              para você.
              <br className="hidden sm:block" />
              Em breve estaremos no ar com novidades!
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-8 pt-4">
            <p className="text-lg text-slate-600 font-medium">Precisa entrar em contato? Clique no botão abaixo:</p>

            <div className="flex justify-center">
              <a href="mailto:hello@flaplab.digital" className="group">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer text-lg"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Entrar em Contato
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-16 text-slate-500 text-sm">
            <p>© 2025 FLAPLAB. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
