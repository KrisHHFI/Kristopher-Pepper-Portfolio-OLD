import React, { useState, useEffect } from 'react';
import '../../App.css';

const GitHubRepositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/KrisHHFI/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <div className="gitHubRepositoriesContainer">
      {repos.map(repo => (
        <div key={repo.id} className="gitHubRepositoriesItemContainer">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="gitHubRepositoriesLink">
            {repo.name}
          </a>
          <div>
            <strong>Language:</strong> {repo.language || 'N/A'}
          </div>
          <div>
            <strong>Created:</strong> {new Date(repo.created_at).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepositories;
