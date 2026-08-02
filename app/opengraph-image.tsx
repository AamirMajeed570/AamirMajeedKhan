export const runtime = 'edge';

export default async function Image() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 700 }}>Aamir Majeed Khan</div>
    </div>
  );
}
