export async function loginUser(email, password) {
  const response = await fetch('http://localhost:4040/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); // could contain token or user info
}

export async function signupUser(name, email, password) {
  const res = await fetch('http://localhost:4040/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    throw new Error("Signup failed");
  }

  return res.json();
}