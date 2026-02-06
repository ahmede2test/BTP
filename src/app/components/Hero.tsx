import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-blue-400 text-sm">Building Tomorrow's Infrastructure Today</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
          Industrial Construction
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Redefined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          We transform visions into reality with cutting-edge construction solutions 
          for commercial, industrial, and infrastructure projects worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full group"
          >
            Start Your Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm"
          >
            View Portfolio
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}
