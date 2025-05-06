import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <article>
        <p className="font-semibold">Hey there,</p>
        <p>
          This is React frontend template with built-in authentication and store
          management. It uses Vite, @pr4j3sh/auth, Zustand, react-toastify and
          Tailwind CSS.
        </p>
      </article>
      <article>
        <p>
          Use this template via <code>@pr4j3sh/frames</code>
        </p>
        <pre>
          <code>npm create @pr4j3sh/frames@latest react-auth myapp</code>
        </pre>
        <blockquote cite="">
          You can replace <code>myapp</code> with the choice of your name.
        </blockquote>
      </article>
      <article>
        <p>Run the app using</p>
        <pre>
          <code>npm run dev</code>
        </pre>
      </article>
      <article className="btns">
        <Link to="/register">
          <button>Get Started</button>
        </Link>
        <a href="https://pr4j3sh.github.io/react-auth" target="_blank">
          <button className="secondary">Github</button>
        </a>
      </article>
      <article>
        <p className="font-semibold">Read more</p>
        <ul>
          <li>
            <a className="link" href="https://vite.dev/guide/" target="_blank">
              Vite Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://react.dev/learn" target="_blank">
              React Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://reactrouter.com/en/main/start/tutorial"
              target="_blank"
            >
              React Router Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://zustand.docs.pmnd.rs/getting-started/introduction"
              target="_blank"
            >
              Zustand
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://pr4j3sh.github.io/auth/"
              target="_blank"
            >
              @pr4j3sh/auth
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://fkhadra.github.io/react-toastify/introduction/"
              target="_blank"
            >
              react-toastify
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://www.npmjs.com/package/js-cookie"
              target="_blank"
            >
              js-cookie
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://tailwindcss.com/docs/utility-first"
              target="_blank"
            >
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://icones.js.org/" target="_blank">
              Icones
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/pr4j3sh/frames"
              target="_blank"
            >
              @pr4j3sh/frames
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
