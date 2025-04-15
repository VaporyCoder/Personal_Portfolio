import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-9xl font-bold text-indigo-600 dark:text-indigo-400">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary px-8 py-3">
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound