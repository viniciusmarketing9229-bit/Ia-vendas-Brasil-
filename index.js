import { useState } from 'react';

export default function Home() {
  const [product, setProduct] = useState('');
  const [result, setResult] = useState('');

  async function generate() {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product })
    });
    const data = await res.json();
    setResult(data.output);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>IA Vendas Brasil</h1>
      <input placeholder="Seu produto..." value={product} onChange={e=>setProduct(e.target.value)} />
      <button onClick={generate}>Gerar anúncio</button>
      <pre>{result}</pre>
    </div>
  );
}