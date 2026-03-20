import { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center gap-6 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <span className="text-red-600 dark:text-red-400 text-2xl" aria-hidden="true">!</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Something went wrong</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
