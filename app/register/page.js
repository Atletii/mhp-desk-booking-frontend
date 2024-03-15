import BackgroundImage from '../../components/common/BackgroundImage'

export default function RegisterPage() {
  return (
    <BackgroundImage src={`./images/background-mobile.jpg`}>
      <div className="p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-4">MHP Desk Booking - Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">E-Mail</label>
            <input type="email" id="email" placeholder="joe.smith@mhp.com" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input type="password" id="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-6">
            <a href="#" className="text-sm text-blue-600 hover:underline">Already have an account? Login here!</a>
          </div>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Register</button>
        </form>
      </div>
    </BackgroundImage>
  );
}