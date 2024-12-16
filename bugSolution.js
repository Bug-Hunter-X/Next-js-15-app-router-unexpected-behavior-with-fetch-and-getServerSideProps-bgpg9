```javascript
//pages/index.js
import {getServerSideProps} from 'next/server';
export default function Home({data}) {
  const [clientData, setClientData] = useState(data);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const newData = await res.json();
      setClientData(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Server-Side Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Client-Side Data:</h1>
      <pre>{JSON.stringify(clientData, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
```