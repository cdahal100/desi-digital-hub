import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { 
      name: /desi digital hub/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Home />)
    
    const tagline = screen.getByText(/connecting cultures digitally/i)
    expect(tagline).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Home />)
    
    const logo = screen.getByAltText(/desi digital hub/i)
    expect(logo).toBeInTheDocument()
  })

  it('renders the navigation menu', () => {
    render(<Home />)
    
    const aboutLink = screen.getByRole('link', { name: /about/i })
    const servicesLink = screen.getByRole('link', { name: /services/i })
    const contactLink = screen.getByRole('link', { name: /contact/i })
    
    expect(aboutLink).toBeInTheDocument()
    expect(servicesLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the call-to-action section', () => {
    render(<Home />)
    
    const ctaHeading = screen.getByText(/ready to connect cultures/i)
    expect(ctaHeading).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    
    const footerText = screen.getByText(/© 2025 desi digital hub/i)
    expect(footerText).toBeInTheDocument()
  })
})
