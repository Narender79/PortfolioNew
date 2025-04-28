"use client"

interface AnimationToggleProps {
  currentStyle: number
  onChange: (index: number) => void
  totalStyles: number
}

const AnimationToggle = ({ currentStyle, onChange, totalStyles }: AnimationToggleProps) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg shadow-green-900/20">
      <h3 className="text-green-500 font-medium mb-3 text-center">Animation Style</h3>
      <p className="text-gray-400 text-sm mb-4 text-center">
        Click anywhere on the page to change animations or select a style below
      </p>
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalStyles }).map((_, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentStyle === index ? "bg-green-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnimationToggle
