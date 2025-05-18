export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-serif p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold">CRYPTIC THOUGHTS</h1>
        <p className="text-md md:text-lg mt-2 italic text-gray-300">Deep thoughts. Quiet truths. Loud souls.</p>
        <p className="mt-1 text-sm text-gray-500">by <span className="font-semibold">bigpapi</span></p>
        <p className="mt-6 text-lg text-gray-400">What's loudest is often never said.</p>
        <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
          Follow us on TikTok
        </button>
      </header>

      <section className="max-w-3xl mx-auto space-y-10 mt-10">
        {quotes.map((quote, index) => (
          <div key={index} className="border-l-4 border-gray-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">{quote.title}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{quote.text}</p>
            <p className="mt-2 text-sm text-gray-400">— bigpapi</p>
          </div>
        ))}
      </section>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>Written by bigpapi – a quiet voice speaking loud truths.</p>
      </footer>
    </div>
  );
}

const quotes = [
  {
    title: 'The Stars Will Align',
    text: 'The stars may align, and the stars may not align,\nthat too is a part of life.\nBut the stars will align.'
  },
  {
    title: 'Want. Search. Find. Become.',
    text: 'Only those who want will search,\nonly those who search will find,\nonly those who find will have.\nIn earnest, only you can make yourself great or mediocre.'
  },
  {
    title: 'Quiet Battles',
    text: 'Everyone is going through something —\none thing or the other.\nWeak, yet strong.\nBroken, yet breathing.\nI hope we all find peace. I hope we find our paradise.'
  },
  {
    title: 'End ≠ Failure',
    text: 'Not everything that ends is a failure.\nSome things just finish their purpose.'
  },
  {
    title: 'No Room for Weakness',
    text: 'In a pack of wolves,\nyou are not allowed to be a dog.'
  },
  {
    title: 'Unsaid Truths',
    text: "What's loudest is often never said."
  }
];