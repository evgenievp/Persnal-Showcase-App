const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem('token', token);
        router.push('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Server error');
    }
  };
