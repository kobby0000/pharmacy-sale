import {useState} from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Left logo */}
                <Link to='/' className='text-2xl font-medium'>
                    Rabbit
                </Link>
                {/* center navigation link */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                    <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                    <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                    <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom wear</Link>
                </div>

                {/* Right -Icons */}
                <div className="flex items-center space-x-4">
                    <Link to='/'><HiOutlineUser className='h-6 w-6 text-gray-700' /></Link>

                    <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'> <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className="absolute -top-1 -right-0.8 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">4</span>
                    </button>

                    {/* Search Icon */}
                    <div className="overflow-hidden ">
                        <Searchbar className="cursor-pointer" />
                    </div>
                    {/* Humburger Icon */}
                    <button className='md:hidden'><HiBars3BottomRight className='h-6 w-6 text-gray-700' /></button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    )
}

export default Navbar