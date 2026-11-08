import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, CalendarDays, Megaphone, UsersRound, ArrowUpRight, Check } from 'lucide-react';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { events } from '../../data/events.js';
import logo from '../../assets/logo.png';

const filters = [{ id: 'all', label: 'All Events' }, { id: 'registered', label: 'Registered', icon: CalendarDays }, { id: 'hosting', label: 'Hosting', icon: Megaphone }, { id: 'team', label: 'Team Events', icon: UsersRound }];
export default function EventsPage() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();
  const [expanded, setExpanded] = useState(params.get('event'));
  const [joined, setJoined] = useLocalStorage('campuscode-demo-events', []);
  const visible = events.filter(event => {
    const matchesFilter = filter === 'all' || (filter === 'registered' && joined.includes(event.id));
    return matchesFilter && `${event.title} ${event.description} ${event.category}`.toLowerCase().includes(query.toLowerCase().trim());
  });
  function toggleJoined(id) { setJoined(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]); }
  return <DashboardShell>
    <div className="workspace__eyebrow">EVENTS&nbsp; / &nbsp;MY EVENTS</div>
    <div className="events-heading"><div><h1 className="workspace__title">MY <span>EVENTS.</span></h1><p className="workspace__subtitle">All the events you’ve registered for, are hosting, or are part of.</p></div><div className="events-heading__count"><img src={logo} alt=""/><strong>{String(events.length).padStart(2, '0')}<small>EVENTS</small></strong></div></div>
    <div className="events-toolbar"><div className="events-filters" aria-label="Event filters">{filters.map(({ id, label, icon: Icon }) => <button key={id} className={filter === id ? 'is-active' : ''} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}>{Icon && <Icon size={16}/>} {label}</button>)}</div><label className="events-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search your events</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search your events..." /></label></div>
    <div className="events-grid">{visible.map((event, index) => <article className="event-card" key={event.id}>
      <div className={`event-banner event-banner--${event.id === 'rebuild-26' ? 'rebuild' : 'quiz'}`}><img src={logo} alt=""/><div><small>CAMPUSCODE PRESENTS</small><strong>{event.id === 'rebuild-26' ? <>ReBuild <em>’26</em></> : <>FIRSTCOMMIT ’26<br/><em>QUIZ COMPETITION</em></>}</strong><span>{event.category}</span></div>{event.id !== 'rebuild-26' && <b>50<small> QUESTIONS</small></b>}</div>
      <div className="event-card__content"><div className="event-card__status-row"><span>SAMPLE EVENT</span><span className={`event-status ${event.status === 'LIVE' ? 'event-status--live' : ''}`}>{event.status}</span></div><div className="event-card__title"><span className={`event-avatar event-avatar--${index}`} >{event.short}</span><h2>{event.title}</h2></div><p className="event-card__category">{event.category}</p><p className="event-card__description">{event.description}</p>
        {expanded === event.id && <p className="event-card__details">Sample event information for the CampusCode frontend. Registration is saved locally on this device.</p>}
        <dl className="event-card__facts"><div><dt>MODE</dt><dd>—</dd></div><div><dt>{event.id === 'rebuild-26' ? 'TEAM SIZE' : 'FORMAT'}</dt><dd>{event.mode}</dd></div><div><dt>START</dt><dd>{event.date}</dd></div></dl>
        <div className="event-card__actions"><button type="button" onClick={() => setExpanded(expanded === event.id ? null : event.id)} aria-expanded={expanded === event.id}>{expanded === event.id ? 'Hide Details' : 'View Details'} ↗</button><button type="button" className={joined.includes(event.id) ? 'is-joined' : 'is-dark'} onClick={() => toggleJoined(event.id)}>{joined.includes(event.id) ? <><Check size={16}/> Joined</> : 'Add to My Events ↗'}</button></div>
      </div>
    </article>)}</div>
    {visible.length === 0 && <div className="events-empty">No events found for this view.</div>}
    <p className="workspace__notice">Sample events · registrations are stored on this device.</p>
  </DashboardShell>;
}
