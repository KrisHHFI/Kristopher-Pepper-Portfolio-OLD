import React, { useState, useEffect } from 'react';

const GitHubRepositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/KrisHHFI/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <div>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} style={{ marginBottom: '15px' }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <div>
              <strong>Language:</strong> {repo.language || 'N/A'}
            </div>
            <div>
              <strong>Created At:</strong> {new Date(repo.created_at).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubRepositories;
