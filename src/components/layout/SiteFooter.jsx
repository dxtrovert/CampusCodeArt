import logo from '../../assets/logo.png';

const columns = [
  { title: 'Product', items: [['About', '#about'], ['Hackathons', '#arena'], ['How it works', '#process'], ['Community', '#people']] },
  { title: 'Builders', items: [['Students'], ['Teams'], ['Organizers'], ['Developers']] },
  { title: 'Guides', items: [['Hackathon Rules'], ['FAQ'], ['Support'], ['Contact']] },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="site-footer__wordmark" href="#home" aria-label="CampusCode home">
              <img src={logo} alt="" />
              <span>CAMPUSCODE</span>
            </a>
            <p>The student hackathon arena.<br />You build the idea,<br />we run the competition.</p>
          </div>
          {columns.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>{column.items.map(([label, href]) => (
                <li key={label}>{href ? <a href={href}>{label}</a> : <span>{label}</span>}</li>
              ))}</ul>
            </div>
          ))}
        </div>
        <div className="site-footer__large" aria-hidden="true">CampusCo</div>
      </div>
    </footer>
  );
}
