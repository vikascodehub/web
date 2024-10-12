import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cast,
  FileText,
  Keyboard,
  Smartphone,
  Tv,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Tv className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold">ScreenSaga</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">How it works</Button>
            <Button variant="ghost">Download</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Connect Your TV and Phone Like Never Before
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ScreenSaga for Android TV and SagaSender for Android Phone: The
            ultimate companion apps for seamless file transfer, screen
            mirroring, and more.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get ScreenSaga for TV
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get SagaSender for Mobile
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 p-8 rounded-lg">
            <FileText className="h-12 w-12 text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Effortless File Transfer
            </h2>
            <p className="mb-4">
              Send files from your phone to your TV with just a few taps. View
              and play media directly on your big screen.
            </p>
            <Button variant="link" className="text-purple-400">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <Cast className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Seamless Screen Mirroring
            </h2>
            <p className="mb-4">
              Cast your phone&apos;s screen to your TV in real-time. Perfect for
              sharing photos, videos, and presentations.
            </p>
            <Button variant="link" className="text-blue-400">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <Keyboard className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Smart Keyboard Sharing</h2>
            <p className="mb-4">
              Use your phone&apos;s keyboard to type on your TV. Automatically
              activates when you need to input text.
            </p>
            <Button variant="link" className="text-green-400">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <Smartphone className="h-12 w-12 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Touch Control</h2>
            <p className="mb-4">
              Transform your phone into a touchpad for your TV. Navigate and
              control your TV with familiar gestures.
            </p>
            <Button variant="link" className="text-yellow-400">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center">
              <Smartphone className="h-16 w-16 text-blue-500 mb-2" />
              <span>SagaSender</span>
            </div>
            <ArrowRight className="h-8 w-8" />
            <div className="flex flex-col items-center">
              <Cast className="h-16 w-16 text-purple-500 mb-2" />
              <span>Wi-Fi Direct</span>
            </div>
            <ArrowRight className="h-8 w-8" />
            <div className="flex flex-col items-center">
              <Tv className="h-16 w-16 text-green-500 mb-2" />
              <span>ScreenSaga</span>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your TV Experience?
          </h2>
          <div className="flex justify-center space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download ScreenSaga
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Download SagaSender
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 ScreenSaga & SagaSender. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
