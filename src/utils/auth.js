const userStorageKey = "restaurantUser";

export function isSignedIn() {
  return Boolean(localStorage.getItem(userStorageKey));
}

export function getUser() {
  const savedUser = localStorage.getItem(userStorageKey);

  return savedUser ? JSON.parse(savedUser) : null;
}

export function saveUser(user) {
  localStorage.setItem(userStorageKey, JSON.stringify(user));
  window.dispatchEvent(new Event("restaurant-auth-change"));
}

export function signOut() {
  localStorage.removeItem(userStorageKey);
  window.dispatchEvent(new Event("restaurant-auth-change"));
}