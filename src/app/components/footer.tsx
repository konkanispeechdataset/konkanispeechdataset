import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-medium mb-4">Konkani Speech</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/datasets" className="hover:text-gray-400">
                                Datasets
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-gray-400">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Get Involved</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/speak" className="hover:text-gray-400">
                                Speak
                            </Link>
                        </li>
                        <li>
                            <Link href="/listen" className="hover:text-gray-400">
                                Listen
                            </Link>
                        </li>
                        <li>
                            <Link href="/validate" className="hover:text-gray-400">
                                Validate
                            </Link>
                        </li>
                        <li>
                            <Link href="/contribute" className="hover:text-gray-400">
                                Contribute
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/faq" className="hover:text-gray-400">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-gray-400">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-gray-400">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="/cookies" className="hover:text-gray-400">
                                Cookies
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-4">Connect</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="https://twitter.com/commonvoice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                Twitter
                            </Link>

                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/commonvoice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/mozilla/common-voice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://discourse.mozilla.org/c/common-voice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                Discourse
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Mozilla. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
