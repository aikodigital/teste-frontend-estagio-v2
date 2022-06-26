import { Icon } from '@iconify/react'

export function Footer() {
  return (
    <>
      <footer>
        <Icon icon="akar-icons:github-fill" color="#c9c9c9" width="30" />
        <a
          href="https://github.com/fransilva0"
          target="_blank"
          rel="noreferrer"
        >
          Francileudo Oliveira
        </a>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-top: 1px solid #000;
        }
        a {
          margin-left: 0.5rem;
          font-size: 1rem;
          color: #c9c9c9;
        }
      `}</style>
    </>
  )
}
