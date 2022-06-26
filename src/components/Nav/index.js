import { Icon } from '@iconify/react'

export function Nav() {
  return (
    <>
      <nav>
        <Icon
          icon="clarity:map-marker-solid-badged"
          color="#c8c8c8"
          width="4rem"
        />
        <h1>Akio</h1>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #000;
          padding: 1rem;
        }
        h1 {
          color: #c8c8c8;
          font-family: monospace, arial, sans-serif;
          font-size: 2rem;
        }
      `}</style>
    </>
  )
}
