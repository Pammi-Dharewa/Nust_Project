// middleware/auth.js
export default function ({ redirect }) {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return redirect('/login');
  }
}
