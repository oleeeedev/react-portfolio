import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NeuralNetworksRevolution: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-12 mt-20">
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
            AI & ML
          </span>
          <span className="text-gray-400">04.06.2025</span>
          <span className="text-gray-400">15 min read</span>
        </div>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">
            Neural Networks: The AI Revolution Transforming Our World
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              Neural networks have emerged as the cornerstone of modern artificial intelligence, 
              revolutionizing how machines learn, process information, and make decisions. From 
              image recognition to natural language processing, these sophisticated algorithms 
              are reshaping industries and transforming our daily lives.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Foundation of Neural Networks</h2>
            
            <p className="mb-6">
              At their core, neural networks are inspired by the human brain's structure and function. 
              They consist of interconnected nodes (neurons) organized in layers that process and 
              transmit information:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li>
                <strong>Input Layer:</strong> Receives raw data (images, text, numbers)
              </li>
              <li>
                <strong>Hidden Layers:</strong> Process information through weighted connections
              </li>
              <li>
                <strong>Output Layer:</strong> Produces the final result or prediction
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Real-World Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-light/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disease diagnosis from medical images</li>
                  <li>Drug discovery and development</li>
                  <li>Patient outcome prediction</li>
                  <li>Personalized treatment plans</li>
                </ul>
              </div>
              
              <div className="bg-dark-light/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Finance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fraud detection</li>
                  <li>Algorithmic trading</li>
                  <li>Credit risk assessment</li>
                  <li>Market trend analysis</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Technical Deep Dive</h2>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Components</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Activation Functions:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>ReLU (Rectified Linear Unit)</li>
                    <li>Sigmoid</li>
                    <li>Tanh</li>
                    <li>Softmax</li>
                  </ul>
                </li>
                <li>
                  <strong>Loss Functions:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Mean Squared Error</li>
                    <li>Cross-Entropy</li>
                    <li>Binary Cross-Entropy</li>
                  </ul>
                </li>
                <li>
                  <strong>Optimization Algorithms:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Stochastic Gradient Descent</li>
                    <li>Adam</li>
                    <li>RMSprop</li>
                  </ul>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Code Example: Simple Neural Network</h2>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                {`import tensorflow as tf

# Define a simple neural network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
model.fit(
    x_train, y_train,
    epochs=10,
    validation_data=(x_test, y_test)
)`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Future Implications</h2>

            <p className="mb-6">
              The future of neural networks holds exciting possibilities:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li>
                <strong>Quantum Neural Networks:</strong> Combining quantum computing with neural networks 
                for unprecedented processing power.
              </li>
              <li>
                <strong>Neuromorphic Computing:</strong> Hardware designed to mimic the brain's architecture 
                for more efficient AI processing.
              </li>
              <li>
                <strong>Explainable AI:</strong> Making neural network decisions more transparent and 
                interpretable.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Ethical Considerations</h2>

            <div className="bg-dark-light/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Ethical Challenges</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Bias and Fairness:</strong> Ensuring neural networks make fair and unbiased decisions
                </li>
                <li>
                  <strong>Privacy:</strong> Protecting sensitive data used in training
                </li>
                <li>
                  <strong>Accountability:</strong> Determining responsibility for AI-driven decisions
                </li>
                <li>
                  <strong>Transparency:</strong> Making AI decision-making processes understandable
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>

            <p className="mb-6">
              Neural networks represent a fundamental shift in how we approach artificial intelligence. 
              As these technologies continue to evolve, they will undoubtedly shape the future of 
              technology and society. Understanding their capabilities, limitations, and implications 
              is crucial for anyone working in or affected by this technological revolution.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Neural networks are transforming multiple industries</li>
                <li>Understanding the technical foundations is crucial</li>
                <li>Ethical considerations must guide development</li>
                <li>The future holds exciting possibilities for advancement</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NeuralNetworksRevolution; 