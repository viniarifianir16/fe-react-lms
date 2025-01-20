import { FaSearch } from 'react-icons/fa';

function Welcome() {
  const categories: string[] = ['Programming', 'Marketing', 'Sport', 'Game'];

  return (
    <div className="mx-16">
      {/* Header */}
      <div className="flex justify-between items-center rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-base font-bold">Jawa Barat, Indonesia</p>
          </div>
        </div>
        <button className="text-gray-500">
          <FaSearch />
        </button>
      </div>
      {/* Header */}

      {/* Content One */}
      <div className="p-4">
        <div className="rounded-xl bg-red-100 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-red-500">Welcome to LMS</h2>
            <h2 className="text-lg font-bold text-red-500">by adhivasindo</h2>
            <button className="mt-2 rounded-full bg-red-500 px-4 py-2 text-white">
              Join Now
            </button>
          </div>
          <img
            src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg"
            alt="Product"
            className="w-20 h-20"
          />
        </div>
      </div>
      {/* Content One */}

      {/* Content Two */}
      <div className="p-4 flex gap-4 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`rounded-full px-4 py-2 ${
              index === 0
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Content Two */}

      {/* Content Three */}

      {/* Content Three */}

      <h1 className="mt-10">Welcome!</h1>
      <a className="bg-orange-200 p-10 rounded-lg mr-10" href="/signin">
        Login
      </a>
      <a className="bg-orange-200 rounded-lg p-10" href="/signup">
        Register
      </a>
    </div>
  );
}

export default Welcome;
