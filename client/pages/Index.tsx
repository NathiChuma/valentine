import { useState, useRef } from "react";

export default function Index() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-hidden relative">
        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-8 text-8xl animate-pulse-glow">💕</div>
          <h1 className="text-5xl md:text-6xl font-bold text-rose-600 mb-6">
            Yes! 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-rose-500 mb-4">
            I'm so happy, Owami! 💖
          </p>
          <p className="text-lg text-rose-400 max-w-md mx-auto leading-relaxed">
            You just made my day the best day ever. I can't wait to spend
            Valentine's Day with you! 🌹
          </p>

          <button
            onClick={() => setAccepted(false)}
            className="mt-12 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Ask again ❤️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-hidden relative p-4">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            💗
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border-2 border-rose-200">
        <div className="text-center mb-8">
          <div className="text-7xl mb-6 animate-bounce">💌</div>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
            Owami...
          </h1>
          <p className="text-2xl md:text-3xl text-rose-500 font-semibold">
            Will you be my Valentine?
          </p>
        </div>

        {/* Button container */}
        <div className="flex gap-4 justify-center mt-10 relative h-16">
          {/* Yes button */}
          <button
            onClick={handleYes}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transform active:scale-95 whitespace-nowrap"
          >
            Yes! 💕
          </button>

          {/* No button - moves away */}
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onFocus={handleNoHover}
            className="absolute right-0 md:relative px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-bold text-lg transition-all duration-200 transform whitespace-nowrap"
            style={{
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              pointerEvents: accepted ? "none" : "auto",
            }}
          >
            No 😢
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          <span className="text-3xl animate-pulse">🌹</span>
          <span
            className="text-3xl animate-pulse"
            style={{ animationDelay: "0.3s" }}
          >
            🌹
          </span>
          <span
            className="text-3xl animate-pulse"
            style={{ animationDelay: "0.6s" }}
          >
            🌹
          </span>
        </div>
      </div>
    </div>
  );
}
