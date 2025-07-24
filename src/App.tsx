import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/pagaurav', icon: faGithub, color: '#333' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/gauravpatil44', icon: faLinkedin, color: '#0077b5' },
  // { name: 'Email', url: 'mailto:patilgaurav22112001@gmail.com', icon: faEnvelope, color: '#ea4335' },
  { name: 'WhatsApp', url: 'https://wa.me/919325540421', icon: faWhatsapp, color: '#25D366' },
];

function App() {
  return (
    <div className="hero-section">
      <h1 className="hero-heading">
        Hello, I’m Gaurav <span className="wave-emoji">👋</span>
      </h1>
      <p>
        Full-stack developer with 2+ years of experience in <strong>.NET Core</strong>, <strong>React</strong>, <strong>MongoDB</strong>, <strong>SQL</strong>, and <strong>Azure DevOps</strong>.
      </p>
      <p>
        I build fast, reliable apps with clean code and smooth deployment.
      </p>

      <div className="social-icons-row">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="social-icon-link"
            style={{ color: link.color }}
          >
            {typeof link.icon === 'string'
              ? <span style={{ fontSize: '1.5em' }}>{link.icon}</span>
              : <FontAwesomeIcon icon={link.icon} />}
          </a>
        ))}
      </div>
      <div className="hero-buttons">
        <button
          className="hero-btn connect"
          onClick={() => window.location.href = 'mailto:patilgaurav22112001@gmail.com'}
        >
          Connect
        </button>
        <a
          href="https://drive.google.com/file/d/1J6uxgt0Q98FNd2egYqMPfqW23Wf4rKgq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default App;
