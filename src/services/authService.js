const STORAGE_KEY = 'campuscode-user';

export function saveProfile(profile) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  return profile;
}

export function getProfile() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function clearProfile() {
  window.localStorage.removeItem(STORAGE_KEY);
}
