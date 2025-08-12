import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center leading-[0] flex-col items-stretch mb-5">
          <Image
            src="/logo-flaplab.webp"
            alt="FLAPLAB Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto max-w-full"
            priority
          />
        </div>

        {/* Construction Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-sans">Site em Construção</h1>
          <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
            Estamos trabalhando duro para trazer algo incrível para você.
            <br />
            Em breve estaremos no ar com novidades!
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-6 pt-8">
          <p className="text-gray-700 font-medium font-sans">Precisa entrar em contato? Clique no botão abaixo:</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@flaplab.digital">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Entrar em Contato
              </Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 text-sm text-gray-500 font-sans">
          <p>© 2025 FLAPLAB. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </div>
  )
}
