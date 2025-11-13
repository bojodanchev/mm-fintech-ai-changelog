/**
 * Generate Markdown changelog from API
 * Usage: node scripts/generate-markdown.js > changelog.md
 */

const fetch = require('node-fetch');

async function generateMarkdown() {
  try {
    // Fetch changelog from API (adjust URL as needed)
    const apiUrl = process.env.CHANGELOG_API_URL || 'http://localhost:3000/api/changelog';
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const changelog = await response.json();
    
    // Generate markdown
    let markdown = '# MM Fintech AI Changelog\n\n';
    markdown += 'Latest changes and updates to internal products.\n\n';
    markdown += `*Last updated: ${new Date().toLocaleString()}*\n\n`;
    markdown += '---\n\n';
    
    changelog.forEach((group) => {
      markdown += `## ${group.date}\n\n`;
      
      group.entries.forEach((entry) => {
        const typeEmoji = {
          feature: '✨',
          fix: '🐛',
          breaking: '💥',
          chore: '🔧',
          docs: '📚',
          release: '🚀',
        };
        
        const emoji = typeEmoji[entry.type] || '📝';
        markdown += `### ${emoji} ${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}: ${entry.message}\n\n`;
        markdown += `- **Repository:** ${entry.repository}\n`;
        markdown += `- **Author:** ${entry.author}\n`;
        markdown += `- **Date:** ${new Date(entry.date).toLocaleString()}\n`;
        if (entry.url) {
          markdown += `- **View:** [Commit ${entry.sha?.substring(0, 7) || 'link'}](${entry.url})\n`;
        }
        markdown += '\n';
      });
      
      markdown += '---\n\n';
    });
    
    console.log(markdown);
  } catch (error) {
    console.error('Error generating markdown:', error);
    process.exit(1);
  }
}

generateMarkdown();

