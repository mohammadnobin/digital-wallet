'use client';

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Sparkles } from "lucide-react";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI assistant. How can I help you today? 😊" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botReply = { 
        sender: "bot", 
        text: "Thanks for your message! I'm a demo bot. In a real implementation, I'd connect to an AI API like OpenAI to provide intelligent responses." 
      };
      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[360px] md:w-[420px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden mb-4 border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <Bot size={24} />
              </div>
              <div>
                <h2 className="font-semibold text-lg">AI Assistant</h2>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-5 overflow-y-auto h-[450px] bg-gradient-to-b from-gray-50 to-white">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} items-end animate-in slide-in-from-bottom-2 duration-300`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.sender === "user" 
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600" 
                      : "bg-gradient-to-br from-purple-500 to-pink-500"
                  }`}>
                    {msg.sender === "user" ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Sparkles size={16} className="text-white" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[75%] shadow-sm ${
                      msg.sender === "user" 
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-md" 
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 items-end animate-in slide-in-from-bottom-2 duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-2 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-white hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="group bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-full text-white shadow-2xl hover:shadow-blue-400/50 transition-all transform hover:scale-110 active:scale-95"
        >
          <div className="relative">
            <Bot size={28} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </button>
      )}
    </div>
  );
}

