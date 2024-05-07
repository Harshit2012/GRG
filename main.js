document.getElementById('generateReadme').addEventListener('click', function () {
    var repoName = document.getElementById('repoName').value;
    var repoDescription = document.getElementById('repoDescription').value;
    var badges = document.querySelectorAll('.badges input[type="checkbox"]:checked');
    var badgeUrls = Array.from(badges).map(function (badge) {
        return `!${badge.value}`;
    }).join(' ');

    var sections = document.querySelectorAll('.section-checkboxes input[type="checkbox"]:checked');
    var sectionsContent = Array.from(sections).map(function (section) {
        switch (section.value) {
            case 'Acknowledgements':
                return '## Acknowledgements\nThis project was made possible by...';
            case 'API':
                return '## API Reference\nDetails about the API...';
            case 'Demo':
                return '## Demo\nLink to the live demo...';
            case 'FAQs':
                return '## FAQs\nFrequently asked questions...';
            case 'Feedback':
                return '## Feedback\nLeave your feedback...';
            default:
                return '';
        }
    }).join('\n\n');

    var readmeContent = `
# ${repoName}
${badgeUrls}

${repoDescription}

## Installation
\`\`\`
git clone https://github.com/your-username/${repoName}.git
\`\`\`

## Usage
\`\`\`
npm start
\`\`\`

${sectionsContent}

## License
MIT
    `;

    document.getElementById('readmeOutput').innerHTML = '<pre>' + readmeContent + '</pre>';
});

document.getElementById('copyReadme').addEventListener('click', function () {
    var readmeContent = document.getElementById('readmeOutput').innerText;
    navigator.clipboard.writeText(readmeContent).then(function () {
        alert('README copied to clipboard!');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
});