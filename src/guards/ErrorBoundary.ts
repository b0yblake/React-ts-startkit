// import React from "react";

// class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//       errorContent: null,
//     };
//   }

//   static getDerivedStateFromError(error: any) {
//     return {
//       hasError: true,
//       errorContent: error,
//     };
//   }

//   componentDidCatch(error: any, errorInfo: any) {
//     console.log(error);
//     console.log(errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <this.props.FallbackComponent error={this.state.errorContent} />;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
