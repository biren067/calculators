export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Calculators</h3>
            <p className="text-gray-300">
              Accurate, easy-to-use financial and mathematical calculators for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm">
              These calculators are for educational purposes only. Always consult with a financial advisor for investment decisions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              For questions or feedback, please contact us through our website.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Financial Calculators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
