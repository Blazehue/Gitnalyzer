// Quick test script to verify GitHub API connectivity
// Run with: node test-api.js <username>

const username = process.argv[2] || 'torvalds';

console.log(`Testing GitHub API with username: ${username}\n`);

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    console.log(`Status: ${response.status} ${response.statusText}`);
    console.log(`Rate Limit Remaining: ${response.headers.get('x-ratelimit-remaining')}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('\n✅ API Request Successful!\n');
    console.log('User Data:');
    console.log(`- Login: ${data.login}`);
    console.log(`- Name: ${data.name}`);
    console.log(`- Public Repos: ${data.public_repos}`);
    console.log(`- Followers: ${data.followers}`);
    console.log(`- Following: ${data.following}`);
  })
  .catch(error => {
    console.error('\n❌ API Request Failed!');
    console.error(`Error: ${error.message}`);
  });
