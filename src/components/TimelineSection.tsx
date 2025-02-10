import { Clock } from "lucide-react";
import timeline from '../assets/timeline.png'

export const TimelineSection = () => (
    <section id="timeline" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center flex justify-center">
            <h2 className="text-5xl font-bold mb-6">
              <span className="flex gap-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Timeline
                <Clock className="w-12 h-12 text-cyan-400 mx-auto" />
              </span>
            </h2>
          </div>
          <div className='w-full justify-center flex md:px-20'>
            <img className=' w-full md:w-8/12' src={timeline} />
          </div>
        </div>
      </section>
  );