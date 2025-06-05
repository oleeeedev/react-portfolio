import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShazamTechnology: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
        {/* Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Technology
          </span>
          <span className="text-gray-400">04.06.2025</span>
          <span className="text-gray-400">5 min read</span>
        </div>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">
            The Fascinating Technology Behind Shazam: How It Works
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              Shazam has revolutionized how we discover music, allowing users to identify songs 
              with just a few seconds of audio. But how does this seemingly magical technology 
              actually work? Let's dive into the fascinating world of audio fingerprinting and 
              pattern recognition.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Core Technology: Audio Fingerprinting</h2>
            
            <p className="mb-6">
              At its heart, Shazam uses a sophisticated audio fingerprinting system that works in three main steps:
            </p>

            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li>
                <strong>Audio Analysis:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Converts audio to frequency domain using Fast Fourier Transform (FFT)</li>
                  <li>Identifies key frequency points in the audio spectrum</li>
                  <li>Creates a time-frequency representation of the sound</li>
                </ul>
              </li>
              <li>
                <strong>Fingerprint Generation:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Selects anchor points in the time-frequency plot</li>
                  <li>Creates pairs of points with specific time and frequency relationships</li>
                  <li>Generates a unique hash for each point pair</li>
                </ul>
              </li>
              <li>
                <strong>Database Matching:</strong>
                <ul className="list-disc pl-6 mt-2">
                  <li>Compares generated hashes against a database of known songs</li>
                  <li>Uses sophisticated matching algorithms to find the best match</li>
                  <li>Returns the song information when a match is found</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Technical Deep Dive</h2>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">The Algorithm in Action</h3>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                {`def create_audio_fingerprint(audio_data):
    # Convert audio to frequency domain
    spectrogram = compute_spectrogram(audio_data)
    
    # Find anchor points
    anchor_points = find_anchor_points(spectrogram)
    
    # Create point pairs
    point_pairs = create_point_pairs(anchor_points)
    
    # Generate hashes
    hashes = generate_hashes(point_pairs)
    
    return hashes

def find_matching_song(hashes, database):
    # Compare hashes with database
    matches = find_matches(hashes, database)
    
    # Score and rank matches
    ranked_matches = rank_matches(matches)
    
    return ranked_matches[0] if ranked_matches else None`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Real-World Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-light/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Music Industry</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Royalty tracking and distribution</li>
                  <li>Music discovery and recommendations</li>
                  <li>Content identification and monitoring</li>
                  <li>Artist analytics and insights</li>
                </ul>
              </div>
              
              <div className="bg-dark-light/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Broadcasting</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Content verification</li>
                  <li>Ad monitoring</li>
                  <li>Broadcast compliance</li>
                  <li>Program scheduling</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Challenges and Solutions</h2>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Challenges</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Background Noise:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Solution: Advanced noise filtering algorithms</li>
                    <li>Solution: Multiple fingerprint generation</li>
                  </ul>
                </li>
                <li>
                  <strong>Database Size:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Solution: Efficient hash-based indexing</li>
                    <li>Solution: Distributed database architecture</li>
                  </ul>
                </li>
                <li>
                  <strong>Processing Speed:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Solution: Optimized algorithms</li>
                    <li>Solution: Cloud-based processing</li>
                  </ul>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Future Developments</h2>

            <p className="mb-6">
              The future of audio recognition technology looks promising:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li>
                <strong>Deep Learning Integration:</strong> Using neural networks to improve accuracy
              </li>
              <li>
                <strong>Real-time Processing:</strong> Faster and more efficient recognition
              </li>
              <li>
                <strong>Multi-modal Recognition:</strong> Combining audio with visual recognition
              </li>
              <li>
                <strong>Enhanced Metadata:</strong> More detailed song information and context
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Impact on Music Discovery</h2>

            <p className="mb-6">
              Shazam has fundamentally changed how we discover and interact with music:
            </p>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Artist Exposure:</strong> Helping new artists reach wider audiences
                </li>
                <li>
                  <strong>Music Analytics:</strong> Providing valuable insights into listening patterns
                </li>
                <li>
                  <strong>Cultural Impact:</strong> Influencing music trends and popularity
                </li>
                <li>
                  <strong>User Experience:</strong> Making music discovery more accessible
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>

            <p className="mb-6">
              Shazam's technology represents a remarkable achievement in audio recognition and 
              pattern matching. By understanding the complex algorithms and systems behind it, 
              we can better appreciate the innovation that has made music discovery more 
              accessible than ever before.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Audio fingerprinting is the core technology behind Shazam</li>
                <li>The system uses sophisticated pattern matching algorithms</li>
                <li>Real-world applications extend beyond music recognition</li>
                <li>Future developments promise even more capabilities</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ShazamTechnology; 