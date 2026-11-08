import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserRound } from 'lucide-react';
import DashboardShell from '../../components/dashboard/DashboardShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const pages = {
  projects: ['My Projects', 'Project management is not available in this frontend demo yet.'],
  team: ['Team', 'Team management is not available in this frontend demo yet.'],
  saved: ['Saved', 'There are no saved items yet.'],
  notifications: ['Notifications', 'There are no notifications yet.'],
  settings: ['Settings', 'Settings are not available in this frontend demo yet.'],
  profile: ['Profile', 'Your profile is stored on this device.'],
};

export default function WorkspacePage({ page }) {
  const { user, updateProfile } = useAuth();
  const [imageError, setImageError] = useState('');
  const [title, description] = pages[page];
  function selectPhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 1024 * 1024) {
      setImageError('Choose an image under 1 MB.');
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => { updateProfile({ avatar: reader.result }); setImageError(''); };
    reader.onerror = () => setImageError('Could not read this image. Please try another.');
    reader.readAsDataURL(file);
    event.target.value = '';
  }
  return <DashboardShell>
    <div className="workspace__eyebrow">CAMPUSCODE / {title.toUpperCase()}</div>
    <h1 className="workspace__title">{title}</h1>
    <section className="related-events">
      <p className="workspace__subtitle">{description}</p>
      {page === 'profile' && <div className="profile-card">
        <div className="profile-card__avatar">{user?.avatar ? <img src={user.avatar} alt="" /> : <UserRound size={42} aria-hidden="true" />}</div>
        <div><h2>{user?.name || 'Builder'}</h2><p>{user?.email || 'CampusCode member'}</p>
          {user && <><label className="profile-card__upload">Choose photo<input type="file" accept="image/*" onChange={selectPhoto} /></label>{user.avatar && <button className="profile-card__remove" type="button" onClick={() => updateProfile({ avatar: null })}>Remove photo</button>}</>}
          {imageError && <p className="form-error" role="alert">{imageError}</p>}
        </div>
      </div>}
      <Link className="workspace-button workspace-button--lime" to="/dashboard">Back to Dashboard ↗</Link>
    </section>
  </DashboardShell>;
}
