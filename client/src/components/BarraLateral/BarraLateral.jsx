import { useState, useEffect } from 'react';
import './BarraLateral.css';

export function BarraLateral() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('tcc-theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('tcc-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('tcc-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <aside
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="profile">
        <img className="avatar" src="avatar.png" alt="Avatar" />
        <div className="details">
          <p className="name">Nome do Aluno</p>
          <p className="role">Pesquisador</p>
        </div>
        <i className="icon chevron" data-lucide="chevron-down"></i>
      </div>

      <div className="search">
        <input type="text" placeholder="Pesquisar..." />
        <i className="icon" data-lucide="search"></i>
      </div>

      <nav>
        <div
          className={`item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <i className="icon" data-lucide="layout-dashboard"></i>
          <p>Dashboard</p>
        </div>

        <div
          className={`item ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <i className="icon" data-lucide="folder"></i>
          <p>Projetos</p>
        </div>

        <div
          className={`item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <i className="icon" data-lucide="settings"></i>
          <p>Configurações</p>
        </div>
      </nav>

      <hr />

      <div className="actions">
        <button
          className="action"
          onClick={() => setIsDarkMode(!isDarkMode)}
          title="Alternar tema"
        >
          <i className="icon moon" data-lucide="moon"></i>
          <i className="icon sun" data-lucide="sun"></i>
        </button>
      </div>
    </aside>
  );
}