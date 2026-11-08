import { NavLink, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Compass, CalendarDays, Layers, Users, Bookmark, Bell, Settings, UserRound, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import BrandMark from '../common/BrandMark.jsx';

const items = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Explore', icon: Compass, to: '/explore' },
  { label: 'My Events', icon: CalendarDays, to: '/events' },
  { label: 'My Projects', icon: Layers, to: '/projects' }, { label: 'Team', icon: Users, to: '/team' },
  { label: 'Saved', icon: Bookmark, to: '/saved' }, { label: 'Notifications', icon: Bell, to: '/notifications' },
  { label: 'Settings', icon: Settings, to: '/settings' }, { label: 'Profile', icon: UserRound, to: '/profile' },
];
export default function DashboardShell({ children }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return <div className="workspace">
    <aside className="workspace__sidebar" aria-label="Dashboard navigation">
      <div>
      <Link className="workspace__brand" to="/" aria-label="CampusCode home"><BrandMark /><span>CAMPUSCODE<span className="wordmark__dot">.</span></span></Link>
      <nav className="workspace__nav">{items.map(({ label, icon: Icon, to, href }) => {
        const content = <><Icon size={20} aria-hidden="true" /><span>{label}</span></>;
        return to ? <NavLink key={label} to={to} className={({ isActive }) => `workspace__nav-item ${isActive ? 'is-active' : ''}`}>{content}</NavLink> : href ? <a className="workspace__nav-item" href={href} key={label}>{content}</a> : <span key={label} className="workspace__nav-item workspace__nav-item--disabled" title="Coming soon">{content}</span>;
      })}</nav>
      </div>
      <div className="workspace__sidebar-bottom"><button type="button" onClick={() => { signOut(); navigate('/'); }}><LogOut size={17} /> Sign out</button></div>
    </aside>
    <main className="workspace__main"><div className="workspace__topbar"><Link className="workspace__avatar" to="/profile" aria-label="Open profile">{user?.avatar ? <img src={user.avatar} alt="" /> : <UserRound size={22} aria-hidden="true" />}</Link></div>{children}</main>
  </div>;
}
