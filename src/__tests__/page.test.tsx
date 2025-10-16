import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByText(/Empower Your/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the business tagline', () => {
    render(<Home />)
    
    // Use getAllBy to handle multiple elements and check the main heading
    const nepaliElements = screen.getAllByText(/Nepali & Bhutanese/i)
    expect(nepaliElements.length).toBeGreaterThan(0)
    // Check that at least one is visible
    expect(nepaliElements[0]).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Home />)
    
    // Get all logos and check the first one (header logo)
    const logos = screen.getAllByAltText(/Desi Digital Hub - Connecting Cultures Digitally/i)
    expect(logos.length).toBeGreaterThan(0)
    expect(logos[0]).toBeInTheDocument()
  })

  it('renders the navigation menu', () => {
    render(<Home />)
    
    const featuresLink = screen.getByRole('link', { name: /features/i })
    const pricingLink = screen.getByRole('link', { name: /pricing/i })
    
    // For cultural services, get all and check the first one (header nav)
    const culturalLinks = screen.getAllByRole('link', { name: /cultural services/i })
    
    expect(featuresLink).toBeInTheDocument()
    expect(pricingLink).toBeInTheDocument()
    expect(culturalLinks.length).toBeGreaterThan(0)
    expect(culturalLinks[0]).toBeInTheDocument()
  })

  it('renders the cultural services section', () => {
    render(<Home />)
    
    const culturalHeading = screen.getByText(/Cultural Services Hub/i)
    expect(culturalHeading).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    
    const footerText = screen.getByText(/© 2025 Desi Digital Hub/i)
    expect(footerText).toBeInTheDocument()
  })
})
