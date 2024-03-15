import { signOut } from 'firebase/auth';
import { database } from '@/firebase/firebaseConfig';
import Link from 'next/link';

const Navbar = () => {
    function handleSignOut() {
        signOut(database).then(() => {
            window.location.href = '/login';
        })
            .catch(error => {
                console.log('Sign out error', error);
            });
    }

    return (
        <div className="w-full bg-gray-100 shadow-xl bg-opacity-95 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-blue-800 text-2xl font-extrabold">MHP Desk Booking
                </h1>
                <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Navbar