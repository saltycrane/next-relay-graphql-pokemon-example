import { Component } from "react";

type TProps = {
  children: React.ReactNode;
};

export default class ErrorBoundary extends Component<TProps> {
  state = {
    error: null,
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>ERROR: {String(this.state.error)}</div>;
    }
    return <>{this.props.children}</>;
  }
}
