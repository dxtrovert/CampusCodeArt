import { ArrowUpRight, Code2, Plus, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAuth } from '../../context/AuthContext.jsx';
import Button from '../../components/common/Button.jsx';
import { activityData } from '../../data/dashboardData.js';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Builder';

  return (
    <main className="dashboard-page">
      <div className="dashboard-heading">
        <div><p className="eyebrow">YOUR CAMPUS, YOUR CANVAS</p><h1>Good to see you, {firstName}.</h1></div>
        <Button to="/register"><Plus size={16} /> Start a project</Button>
      </div>
      <div className="dashboard-metrics">
        <article><span><Code2 size={18} /></span><strong>01</strong><small>Projects started</small></article>
        <article><span><Users size={18} /></span><strong>04</strong><small>Team connections</small></article>
        <article><span><Trophy size={18} /></span><strong>02</strong><small>Challenges open</small></article>
      </div>
      <section className="dashboard-panel">
        <div className="dashboard-panel__heading"><div><p className="eyebrow">KEEP THE MOMENTUM</p><h2>Your activity</h2></div><span className="mono-label">LAST 6 WEEKS</span></div>
        <div className="dashboard-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}>
              <defs><linearGradient id="activityFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7665FF" stopOpacity={0.28} /><stop offset="100%" stopColor="#7665FF" stopOpacity={0.02} /></linearGradient></defs>
              <CartesianGrid stroke="#e9e9e4" vertical={false} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#77776f', fontSize: 12 }} />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: '#77776f', fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey="activity" stroke="#7665FF" strokeWidth={2.5} fill="url(#activityFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
      <div className="dashboard-footer-links">
        <Link to="/">Back to CampusCode <ArrowUpRight size={16} /></Link>
        <button type="button" onClick={() => { signOut(); window.location.assign('/'); }}>Sign out</button>
      </div>
    </main>
  );
}
