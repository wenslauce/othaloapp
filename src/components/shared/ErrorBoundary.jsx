import React from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface px-6">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-navy mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-8">
              We encountered an unexpected error while rendering this page. Our technical team has been notified.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-sm"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry Page
              </Button>
              <Button 
                onClick={this.handleReset}
                variant="outline"
                className="border-tech-slate text-navy hover:bg-navy/5 font-semibold rounded-sm"
              >
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-12 p-4 bg-navy text-white text-left text-xs rounded-sm overflow-auto max-h-40 font-mono opacity-80">
                {this.state.error && this.state.error.toString()}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
