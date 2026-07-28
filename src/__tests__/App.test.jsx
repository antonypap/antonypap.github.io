import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import App from '../App';

describe('renders the app', () => {
  let user;

  beforeEach(() => {
    window.history.pushState({}, '', '/');
    window.scrollTo = vi.fn();
    user = userEvent.setup();
    render(<App />);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  const clickNavLink = async (index) => {
    const link = document.querySelector(`#header > nav > ul > li:nth-child(${index}) > a`);
    expect(link).toBeInTheDocument();
    await user.click(link);
  };

  it('should render the app', () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', () => {
    expect(document.title).toBe('Antonios Papaoikonomou');
  });

  it('can navigate to /about', async () => {
    await clickNavLink(1);
    await waitFor(() => expect(document.title).toContain('About |'));
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('can navigate to /resume', async () => {
    await clickNavLink(2);
    await waitFor(() => expect(document.title).toContain('CV |'));
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    await clickNavLink(3);
    await waitFor(() => expect(document.title).toContain('Projects |'));
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    await clickNavLink(4);
    await waitFor(() => expect(document.title).toContain('Stats |'));
    expect(window.location.pathname).toBe('/stats');
  });
});
