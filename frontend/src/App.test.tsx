import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

const mockStores = [
  {
    id: '1',
    name: 'Store A',
    latitude: 40.7128,
    longitude: -74.006,
    health: 'healthy',
    bandwidth: '1Gbps',
    deviceCount: 12,
  },
  {
    id: '2',
    name: 'Store B',
    latitude: 34.0522,
    longitude: -118.2437,
    health: 'critical',
    bandwidth: '100Mbps',
    deviceCount: 7,
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockStores),
    })
  ) as unknown as typeof fetch;
});

describe('App', () => {
  it('renders store data on the map', async () => {
    render(<App />);

    expect(screen.getByText(/GLONET/)).toBeInTheDocument();
  });
});
