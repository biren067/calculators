import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Calculators
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/calculator/simple-interest" className="text-gray-600 hover:text-gray-900">
              Simple Interest
            </Link>
            <Link href="/calculator/compound-interest" className="text-gray-600 hover:text-gray-900">
              Compound Interest
            </Link>
            <Link href="/calculator/basic" className="text-gray-600 hover:text-gray-900">
              Basic Calc
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
