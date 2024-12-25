```javascript
// pages/index.js
export default function Home() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```