export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">ACGIL</span>. All rights
          reserved.
        </p>
        <nav>
          <ul className="flex gap-6 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <a
            href="#"
            title="Facebook"
            className="hover:text-blue-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current text-gray-400 hover:text-blue-500"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.626h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="#"
            title="Twitter"
            className="hover:text-blue-400 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current text-gray-400 hover:text-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.96-3.127 1.184A4.916 4.916 0 0016.616 3c-2.733 0-4.946 2.214-4.946 4.946 0 .387.043.764.127 1.124C7.728 8.84 4.1 6.867 1.671 3.886a4.93 4.93 0 00-.666 2.482c0 1.71.87 3.213 2.19 4.096A4.903 4.903 0 01.964 9.13v.062a4.946 4.946 0 003.965 4.84 4.902 4.902 0 01-2.212.084 4.948 4.948 0 004.617 3.417A9.867 9.867 0 010 21.543a13.933 13.933 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>

          <a
            href="#"
            title="LinkedIn"
            className="hover:text-blue-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current text-gray-400 hover:text-blue-600"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.23C23.206 24 24 23.227 24 22.271V1.729C24 .774 23.206 0 22.23 0zM7.119 20.452H3.56V9h3.56v11.452zM5.34 7.507a2.063 2.063 0 01-2.06-2.061A2.063 2.063 0 015.34 3.384c1.137 0 2.061.923 2.061 2.061 0 1.137-.924 2.062-2.06 2.062zM20.452 20.452h-3.555v-5.605c0-1.336-.025-3.055-1.864-3.055-1.866 0-2.151 1.456-2.151 2.96v5.7h-3.555V9h3.413v1.561h.05c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.264 2.367 4.264 5.445v6.296z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
