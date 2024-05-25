import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { Container } from "reactstrap";

import ErrorBoundary from "./ErrorBoundary";
import { environment } from "./relay";

export default function withPageSetup<TProps extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<TProps>,
) {
  function WithPageSetup(props: TProps) {
    return (
      <RelayEnvironmentProvider environment={environment}>
        <Container>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <WrappedComponent {...props} />
            </Suspense>
          </ErrorBoundary>
        </Container>
      </RelayEnvironmentProvider>
    );
  }
  return WithPageSetup;
}
