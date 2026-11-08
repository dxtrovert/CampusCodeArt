import { ArrowUpRight, CalendarDays, CheckCircle2, Trophy, UsersRound, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { events } from '../../data/events.js';
import { activityData } from '../../data/dashboardData.js';
import wave from '../../assets/ai.png';
import logo from '../../assets/logo.png';

export default function DashboardPage() {
  const { user } = useAuth();
  const [joined] = useLocalStorage('campuscode-demo-events', []);
  const registered = events.filter(event => joined.includes(event.id));
  const stats = [
    { label: 'Registered', value: registered.length, icon: UsersRound },
    { label: 'Ongoing', value: registered.filter(event => event.status === 'LIVE').length, icon: Zap },
    { label: 'Completed', value: registered.filter(event => event.status === 'COMPLETED').length, icon: CheckCircle2 },
    { label: 'Certificates', value: 0, icon: Trophy },
  ];
  return <DashboardShell>
    <div className="workspace__eyebrow">DASHBOARD&nbsp; / &nbsp;OVERVIEW</div>
    <h1 className="workspace__title">WELCOME BACK, <span>{user?.name || 'BUILDER'}.</span></h1>
    <p className="workspace__subtitle">Your CampusCode activity at a glance.</p>
    <section className="featured-event">
      <img className="featured-event__art" src={wave} alt="" />
      <div className="featured-event__copy"><p className="workspace__eyebrow">BUILD · LEARN · COLLABORATE</p><h2>ReBuild ’26</h2><p>{events[0].description}</p><Link className="workspace-button workspace-button--lime" to="/events?event=rebuild-26">Open Event <ArrowUpRight size={17} /></Link></div>
    </section>
    <div className="workspace-stats">{stats.map(({label, value, icon: Icon}) => <article className="workspace-stat" key={label}><span>{label}</span><Icon size={26} aria-hidden="true"/><strong>{value}</strong><small>YOUR EVENTS</small></article>)}</div>
    <section className="related-events"><div className="related-events__heading"><h2>UPCOMING / RELATED EVENTS</h2><Link className="workspace-button workspace-button--lime workspace-button--small" to="/events">View All <ArrowUpRight size={14}/></Link></div>
      <div className="related-events__grid">{events.slice(1).map(event => <Link className="related-event" key={event.id} to={`/events?event=${event.id}`}><span className="related-event__logo"><img src={logo} alt="" /></span><span><strong>{event.title}</strong><small><CalendarDays size={12}/> {event.date}</small></span><ArrowUpRight className="related-event__arrow" size={20}/></Link>)}</div>
    </section>
    <details className="workspace-activity"><summary>Your activity</summary><div className="dashboard-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={activityData} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}><defs><linearGradient id="activityFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7665FF" stopOpacity={0.28}/><stop offset="100%" stopColor="#7665FF" stopOpacity={0.02}/></linearGradient></defs><CartesianGrid stroke="#e9e9e4" vertical={false}/><XAxis dataKey="week" axisLine={false} tickLine={false}/><YAxis allowDecimals={false} axisLine={false} tickLine={false}/><Tooltip/><Area type="monotone" dataKey="activity" stroke="#7665FF" strokeWidth={2.5} fill="url(#activityFill)"/></AreaChart></ResponsiveContainer></div></details>
    <p className="workspace__notice">Sample events and activity · registrations are stored on this device.</p>
  </DashboardShell>;
}
