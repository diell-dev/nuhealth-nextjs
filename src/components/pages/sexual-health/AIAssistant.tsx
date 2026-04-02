'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircleIcon, PlusIcon } from '@/components/ui/Icons'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi! I'm NuHealth's AI assistant. I can answer questions about ED treatment privately. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing])

  const handleSuggestion = (userText: string, responseText: string) => {
    setShowSuggestions(false)
    setMessages((prev) => [...prev, { role: 'user', text: userText }])
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'assistant', text: responseText }])
    }, 1200)
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setShowSuggestions(false)
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }])
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Great question. For a personalized answer, I'd recommend scheduling a consultation with one of our board-certified providers ($50, one-time fee). Would you like to schedule one?",
        },
      ])
    }, 1500)
  }

  return (
    <section className="bg-chocolate py-20 lg:py-28 relative overflow-hidden noise-overlay">
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="nh-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage/50 mb-4 block">
              AI-Powered Privacy
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Have questions?<br />
              Ask <em className="font-serif font-normal not-italic text-sage italic">privately</em> first.
            </h2>
            <p className="text-lg text-cream/70 leading-relaxed mb-6">
              Not ready to talk to a provider yet? Our AI health assistant can answer your questions about ED treatment,
              medications, side effects, and what to expect — completely anonymously. No account needed. No data stored.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-olive/30 text-cream/80 px-3 py-1.5 rounded-full border border-olive/30">
                Powered by 21st SDK
              </span>
              <span className="text-xs bg-olive/30 text-cream/80 px-3 py-1.5 rounded-full border border-olive/30">
                HIPAA Compliant
              </span>
              <span className="text-xs bg-olive/30 text-cream/80 px-3 py-1.5 rounded-full border border-olive/30">
                No Data Stored
              </span>
            </div>
          </div>

          {/* Right: interactive chat mockup */}
          <div className="reveal">
            <div className="bg-[#3D2513] rounded-[1.5rem] border border-olive/20 overflow-hidden shadow-2xl shadow-sage/10">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-olive/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-sage to-olive rounded-full flex items-center justify-center">
                    <MessageCircleIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">NuHealth AI Assistant</p>
                    <p className="text-[10px] text-cream/50">Encrypted • Anonymous • HIPAA</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[11px] text-cream/50">Online</span>
                </span>
              </div>

              {/* Chat body */}
              <div className="p-5 space-y-4 min-h-[240px] max-h-[280px] overflow-y-auto hide-scrollbar">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={msg.role === 'assistant' ? 'flex justify-start' : 'flex justify-end'}
                  >
                    <div
                      className={`px-4 py-3 max-w-[80%] text-sm leading-relaxed rounded-2xl ${
                        msg.role === 'assistant'
                          ? 'bg-olive/30 text-cream/90 rounded-tl-md'
                          : 'bg-sage text-chocolate rounded-tr-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-olive/30 text-cream/50 rounded-2xl rounded-tl-md px-4 py-3 text-sm">
                      <span className="inline-flex gap-1">
                        <span
                          className="w-1.5 h-1.5 bg-cream/50 rounded-full animate-bounce"
                          style={{ animationDelay: '0s' }}
                        ></span>
                        <span
                          className="w-1.5 h-1.5 bg-cream/50 rounded-full animate-bounce"
                          style={{ animationDelay: '0.15s' }}
                        ></span>
                        <span
                          className="w-1.5 h-1.5 bg-cream/50 rounded-full animate-bounce"
                          style={{ animationDelay: '0.3s' }}
                        ></span>
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick suggestions */}
              {showSuggestions && (
                <div className="px-5 pb-3 flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      handleSuggestion(
                        "What's the difference between Sildenafil and Tadalafil?",
                        "Sildenafil works in 30-60 min and lasts 4-6 hours — great for planned moments. Tadalafil lasts up to 36 hours and can be taken daily. Both are safe, FDA-approved, and available starting from $90/mo (Sildenafil) and $100/mo (Tadalafil) at NuHealth, plus a $50 consultation fee. Want to know which might work better for your lifestyle?"
                      )
                    }
                    className="text-xs bg-olive/20 text-cream/80 px-3 py-2 rounded-full border border-olive/30 hover:bg-olive/40 transition-colors cursor-pointer"
                  >
                    Sildenafil vs Tadalafil?
                  </button>
                  <button
                    onClick={() =>
                      handleSuggestion(
                        'Is this really private?',
                        'Completely. NuHealth is HIPAA-compliant. Telehealth consultations are encrypted. Medication ships in unmarked packaging. Your records are never shared. Even this chat stores nothing — it resets when you leave.'
                      )
                    }
                    className="text-xs bg-olive/20 text-cream/80 px-3 py-2 rounded-full border border-olive/30 hover:bg-olive/40 transition-colors cursor-pointer"
                  >
                    Is this really private?
                  </button>
                  <button
                    onClick={() =>
                      handleSuggestion(
                        'What are the side effects?',
                        'Most common: mild headache, flushing, or nasal congestion — typically temporary. Serious side effects are rare. Your NuHealth provider reviews your full medical history before prescribing. These medications have 25+ years of safety data.'
                      )
                    }
                    className="text-xs bg-olive/20 text-cream/80 px-3 py-2 rounded-full border border-olive/30 hover:bg-olive/40 transition-colors cursor-pointer"
                  >
                    Side effects?
                  </button>
                </div>
              )}

              {/* Chat input */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-olive/20 rounded-full px-4 py-2.5 border border-olive/30">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage()
                      }
                    }}
                    className="flex-1 bg-transparent text-sm text-cream placeholder-cream/30 outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-8 h-8 bg-sage rounded-full flex items-center justify-center shrink-0 hover:bg-[#7aa3b8] transition-colors"
                  >
                    <PlusIcon className="w-4 h-4 text-chocolate transform rotate-45" />
                  </button>
                </div>
                <p className="text-[10px] text-cream/30 text-center mt-2">
                  AI assistant for informational purposes. Not medical advice. Consult a provider for treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
