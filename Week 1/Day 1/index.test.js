const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the HTML content from index.html
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Create a JSDOM instance
const dom = new JSDOM(htmlContent);

// Extract the document from the JSDOM instance
const document = dom.window.document;

describe('HTML Structure Test', () => {
  it('should contain a <title> element', () => {
    const titleElement = document.querySelector('title');
    expect(titleElement).toBeTruthy();
  });

  it('should contain a <h1> element with "Hello, World!" text', () => {
    const h1Element = document.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toBe('Hello, World!');
  });

  it('should contain a <p> element with text content', () => {
    const pElement = document.querySelector('p');
    expect(pElement).toBeTruthy();
    expect(pElement.textContent).toBeTruthy();
  });
});
