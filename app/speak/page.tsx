// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>Common Voice</title>
                <meta name="description" content="Common Voice Contribution" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
                <nav className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold">Common Voice</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 font-semibold">Speak</a>
                        <a href="#" className="text-gray-600">Listen</a>
                        <a href="#" className="text-gray-600">Write</a>
                        <a href="#" className="text-gray-600">Review</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>ALVYN ABRANCHES</span>
                        <Image src="/avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full" />
                    </div>
                </nav>

                <div className="text-center my-12">
                    <p className="mb-6">Click <span className="font-bold">🎤</span> then read the sentence aloud</p>
                    <div className="text-2xl font-bold mb-12">
                        Thrash also played for the Washington Redskins.
                    </div>
                    <button className="px-6 py-3 bg-red-600 text-white rounded-full shadow-lg">
                        START RECORDING
                    </button>
                </div>

                <div className="flex justify-between items-center mt-12">
                    <div className="flex space-x-2">
                        <button className="w-10 h-10 bg-gray-300 rounded-full">1</button>
                        <button className="w-10 h-10 bg-gray-300 rounded-full">2</button>
                        <button className="w-10 h-10 bg-gray-300 rounded-full">3</button>
                        <button className="w-10 h-10 bg-gray-300 rounded-full">4</button>
                        <button className="w-10 h-10 bg-gray-300 rounded-full">5</button>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-6 py-2 bg-gray-200 rounded-full">Skip</button>
                        <button className="px-6 py-2 bg-gray-600 text-white rounded-full">Submit</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
