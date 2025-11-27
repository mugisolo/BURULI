import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { createRoyalChat, sendMessageToOracle } from '../services/geminiService';
import { ChatMessage } from '../types';

const OracleWidget: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Mirembe! I am the Royal Oracle. Ask me about the Isabaruuli, our clans, or the history of Buruli.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(() => createRoyalChat());
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Who is the current Isabaruuli?",
    "How many clans are in Buruli?",
    "Tell me about the Ziwa Rhino Sanctuary.",
    "What is the staple food of the Baruuli?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToOracle(chatSession, textToSend);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, connection to the spirits is weak. Please check your connection.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="oracle" className="py-20 px-4 bg-buruli-cream relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-buruli-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-buruli-blue/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 bg-buruli-blue rounded-full mb-4 shadow-lg">
                    <Sparkles className="text-buruli-gold h-6 w-6" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-buruli-blue mb-3">The Royal Oracle</h2>
                <p className="text-gray-600 max-w-lg mx-auto">
                    Powered by AI, the Oracle holds the wisdom of generations. Ask about our traditions, sites, or language.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="bg-buruli-blue p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-buruli-gold font-serif font-bold tracking-wide">Oracle Active</span>
                    </div>
                    <span className="text-xs text-blue-200 uppercase tracking-widest">Gemini 2.5 Flash</span>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-buruli-blue'}`}>
                                    {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-buruli-gold" />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.role === 'user' 
                                        ? 'bg-white text-gray-800 rounded-tr-none border border-gray-100' 
                                        : 'bg-buruli-blue text-white rounded-tl-none'
                                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}>
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="flex flex-row items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-buruli-blue flex items-center justify-center flex-shrink-0">
                                    <Bot size={16} className="text-buruli-gold" />
                                </div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                                    <Loader2 className="animate-spin h-4 w-4 text-buruli-gold" />
                                    <span className="text-xs text-gray-400">Consulting the ancestors...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions and Input Area */}
                <div className="bg-white border-t border-gray-100">
                     {messages.length < 3 && !isLoading && (
                        <div className="px-4 pt-4 pb-2 flex flex-wrap gap-2 overflow-x-auto">
                            {suggestedQuestions.map((q, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => handleSend(q)}
                                    className="px-3 py-1.5 bg-buruli-blue/5 hover:bg-buruli-blue/10 text-buruli-blue text-xs rounded-full border border-buruli-blue/10 transition-colors whitespace-nowrap"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}
                    
                    <div className="p-4 relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask about Buruli history, clans, or language..."
                            className="w-full pl-5 pr-14 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-buruli-gold/50 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={isLoading || !input.trim()}
                            className="absolute right-6 p-2 bg-buruli-blue text-buruli-gold rounded-lg hover:bg-buruli-gold hover:text-buruli-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OracleWidget;