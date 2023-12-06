export async function setupMocks() {
  if (typeof window !== 'undefined') {
    const { worker } = await import('mocks/browser');
    worker.start();
  } else {
    const { server } = await import ('mocks/server');
    server.listen();
  }
}
