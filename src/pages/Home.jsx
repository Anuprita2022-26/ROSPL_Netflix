
import React from "react";

const trendingMovies = [
  {
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
  },
  {
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  },
  {
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
  },
  {
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg"
  },
  {
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  }
];

const recommendedMovies = [
  {
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  },
  {
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
  },
  {
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg"
  },
  {
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Friends",
    image: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
  },
  {
    title: "The Office",
    image: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg"
  },
  {
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
  }
];

const categories = [
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Romance",
  "Documentary",
  "Family"
];

function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center px-6 md:px-20 py-20 h-[60vh] md:h-[70vh] bg-gradient-to-b from-black/80 to-gray-900"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.2) 100%), url(https://image.tmdb.org/t/p/original/iQFcwSGbZXMpgv5S1J6h2suK0CG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 flex flex-col items-center text-center w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-600 mb-2 drop-shadow-lg">Welcome to Netflix</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Unlimited movies, TV shows, and more</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">Watch anywhere. Cancel anytime.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition">Get Started</button>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </section>

      {/* Categories Section */}
      <section className="px-6 md:px-20 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Browse by Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, idx) => (
            <span key={idx} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-base font-medium cursor-pointer hover:bg-red-600 hover:text-white transition">{cat}</span>
          ))}
        </div>
      </section>

      {/* Trending Now Slider */}
      <section className="px-6 md:px-20 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Trending Now</h2>
        <div className="relative">
          <button
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 items-center justify-center shadow-lg"
            style={{ left: '-20px' }}
            onClick={() => {
              document.getElementById('trending-carousel').scrollBy({ left: -400, behavior: 'smooth' });
            }}
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 items-center justify-center shadow-lg"
            style={{ right: '-20px' }}
            onClick={() => {
              document.getElementById('trending-carousel').scrollBy({ left: 400, behavior: 'smooth' });
            }}
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            id="trending-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {trendingMovies.map((movie, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[220px] max-w-[220px] md:min-w-[260px] md:max-w-[260px] snap-center">
                <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  {/* Ranking Number Overlay */}
                  <span
                    className="absolute left-2 top-2 z-10 text-white text-6xl font-extrabold drop-shadow-lg netflix-rank"
                    style={{
                      textStroke: '2px black',
                      WebkitTextStroke: '2px black',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-72 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold text-white text-center truncate w-full">{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section - Netflix Style Grid */}
      <section className="px-6 md:px-20 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Recommended For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-2">
          {recommendedMovies.map((movie, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[180px]">
              <div className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <img src={movie.image} alt={movie.title} className="w-full h-56 object-cover rounded-t-xl" loading="lazy" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white text-center truncate w-full">{movie.title}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;