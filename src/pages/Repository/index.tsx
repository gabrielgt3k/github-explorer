import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import logoSvg from '../../assets/logo.svg';
import {
  Header, AuthorDetails, Statistics, Issues,
} from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get<Repository>(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
    api.get<Issue[]>(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoSvg} alt="github-explorer" />
        <Link to="/">
          <FiChevronLeft />
          <p>Voltar</p>
        </Link>
      </Header>

      {repository && (
      <>
        <AuthorDetails>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </AuthorDetails>

        <Statistics>
          <div>
            <strong>{repository.stargazers_count}</strong>
            <p>Stars</p>
          </div>
          <div>
            <strong>{repository.forks_count}</strong>
            <p>Forks</p>
          </div>
          <div>
            <strong>{repository.open_issues_count}</strong>
            <p>Issues Abertas</p>
          </div>
        </Statistics>
      </>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
