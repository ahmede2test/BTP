import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to start your next project? Get in touch with our team 
              of experts today.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <div className="text-white text-lg">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <div className="text-white text-lg">contact@buildco.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white text-lg">123 Construction Ave, Industrial District</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2 text-sm">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a type</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white mb-2 text-sm">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
