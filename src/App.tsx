import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section
          className="py-20 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Piece by piece, your story unfolds.
          </h1>
          <p className="text-lg mb-8">一片片拼湊，故事自然綻放。</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Your mosaic of memories and growth.
          </h2>
          <p className="text-md mb-8">你的人生馬賽克：記憶與成長的拼圖。</p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              開始拼湊
            </button>
            <button
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition transform hover:scale-105">
              探索版圖
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Immutable Publishing</h3>
              <p>你的故事永遠記錄在鏈上，無人能竄改。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Own Your Data</h3>
              <p>你擁有你的文章與粉絲，無需依賴平台。</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Borderless Access</h3>
              <p>全球任何地方都能自由閱讀和分享。</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
