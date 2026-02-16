import React, { useState, useEffect } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [didError, setDidError] = useState(false)

  const { src, alt, style, className, width, height, ...rest } = props

  // If src changes, reset states
  useEffect(() => {
    setIsLoaded(false)
    setDidError(true) // Start with error state if no src
    if (src) setDidError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setDidError(true)
  }

  return (
    <div 
      className={`relative overflow-hidden bg-white/5 ${className ?? ''}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        ...style 
      }}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !didError && (
        <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] shimmer" />
      )}

      {/* Error State */}
      {didError ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-900">
          <img src={ERROR_IMG_SRC} alt="Error loading image" className="opacity-20 w-12 h-12" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={`
            w-full h-full object-cover transition-all duration-700 ease-out
            ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'}
          `}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  )
}
