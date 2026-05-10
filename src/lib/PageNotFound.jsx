// 404 Page Not Found component
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Logo mark */}
        <div className="w-14 h-14 bg-teal/20 rounded-sm flex items-center justify-center mx-auto mb-8">
          <div className="w-7 h-7 border-2 border-teal rounded-sm" />
        </div>

        {/* 404 */}
        <div className="font-heading text-8xl font-semibold text-white/10 leading-none mb-2 select-none">
          404
        </div>
        <div className="w-12 h-0.5 bg-teal mx-auto mb-8" />

        <h1 className="font-heading text-2xl font-semibold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-white/50 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-11 rounded-sm text-sm transition-colors inline-flex items-center"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-semibold px-8 h-11 rounded-sm text-sm transition-colors inline-flex items-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}