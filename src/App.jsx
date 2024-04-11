

export default function App() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border-b-8 border-b-orange-500 font-poppins">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-4">

        <h1 className="text-3xl text-gray-800"><span>clearlydecoded/</span><span className="font-bold">html-css-javascript-tutorial</span></h1>
      <p className="text-gray-600 opacity-75">Example code for HTML, CSS, and Javascript for Web Developers Coursera Course</p>
        </div>
          <img className="h-24 w-24 ml-12" alt="Profile image" src="/bg-removed.png" />
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center mt-4">
        <div className="flex mr-10">
          <UsersIcon className="text-gray-500 mr-2 relative top-1" />
          <span className="text-gray-500 text-sm"><span className=" text-black text-base">0</span><br/>Contributors</span>
        </div>
        <div className="flex mr-10">
          <BugIcon className="text-gray-500 mr-2 relative top-1" />
          <span className="text-gray-500 text-sm"><span className=" text-black text-base">0</span><br/>Issues</span>
        </div>
        <div className="flex mr-10">
          <StarIcon className="text-gray-500 mr-2 relative top-1" />
          <span className="text-gray-500 text-sm"><span className=" text-black text-base">5</span><br/>Stars</span>
        </div>
        <div className="flex mr-10">
          <GitForkIcon className="text-gray-500 mr-2 relative top-1" />
          <span className="text-gray-500 text-sm"><span className=" text-black text-base">5</span><br/>Forks</span>
        </div>
      </div>
      <img className="h-8 w-8 opacity-50" src="/git-logo.png" alt="" />
      </div>
      
    </div>
  )
}

function BugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  )
}


function GitForkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}