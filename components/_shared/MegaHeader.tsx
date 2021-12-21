import Link from "next/link";

const MegaHeader = ({ data }) => {
  return (
    <section className="mega-header">
      <div className="container">
        {data.previousPage && (
          <Link href={data.previousLink}>
            <a>{`< Go Back to ${data.previousPage}`}</a>
          </Link>
        )}
        <div className="mega-header__section">
          {data.image && (
            <figure className="mega-header__figure">
              <svg
                viewBox="0 0 148 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M137.264 117.158C138.151 115.806 138.679 114.2 138.679 112.446V20.4457C138.679 15.7337 134.834 11.909 130.143 11.909H107.66C102.97 11.909 99.1238 15.7337 99.1238 20.4457V112.446C99.1238 114.031 99.5463 115.489 100.307 116.757H92.5944C93.3553 115.489 93.7778 114.031 93.7778 112.446V20.4457C93.7778 15.7337 89.932 11.909 85.22 11.909H62.7589C58.0464 11.909 54.2222 15.7337 54.2222 20.4457V112.446C54.2222 114.031 54.6447 115.489 55.4051 116.757H47.6928C48.4537 115.489 48.8762 114.031 48.8762 112.446V20.4457C48.8762 15.7337 45.0304 11.909 40.3184 11.909H17.8573C13.1448 11.909 9.32062 15.7337 9.32062 20.4457V112.446C9.32062 114.2 9.84887 115.806 10.7362 117.158C8.5597 118.024 6.99609 120.159 6.99609 122.631V130.238C6.99609 133.471 9.63736 136.091 12.8703 136.091H135.13C138.363 136.091 141.004 133.471 141.004 130.238V122.631C141.004 120.159 139.44 118.024 137.264 117.158ZM13.5466 112.446V20.4457C13.5466 18.0788 15.4905 16.135 17.8573 16.135H40.3184C42.7064 16.135 44.6502 18.0788 44.6502 20.4457V112.446C44.6502 114.834 42.7064 116.757 40.3184 116.757H17.8573C15.4905 116.757 13.5466 114.834 13.5466 112.446ZM58.4482 112.446V20.4457C58.4482 18.0788 60.392 16.135 62.7589 16.135H85.22C87.608 16.135 89.5518 18.0788 89.5518 20.4457V112.446C89.5518 114.834 87.608 116.757 85.22 116.757H62.7589C60.392 116.757 58.4482 114.834 58.4482 112.446ZM103.35 112.446V20.4457C103.35 18.0788 105.294 16.135 107.66 16.135H130.143C132.51 16.135 134.453 18.0788 134.453 20.4457V112.446C134.453 114.834 132.51 116.757 130.143 116.757H107.66C105.294 116.757 103.35 114.834 103.35 112.446Z"
                  fill="#FA5D82"
                />
                <path
                  d="M64.7873 63.4241H83.2128C84.375 63.4241 85.3258 62.4738 85.3258 61.311C85.3258 60.1276 84.375 59.198 83.2128 59.198H64.7873C63.6251 59.198 62.6743 60.1276 62.6743 61.311C62.6743 62.4738 63.6251 63.4241 64.7873 63.4241Z"
                  fill="#FA5D82"
                />
                <path
                  d="M64.7873 30.9261H83.2128C84.375 30.9261 85.3258 29.9749 85.3258 28.8131C85.3258 27.6514 84.375 26.7001 83.2128 26.7001H64.7873C63.6251 26.7001 62.6743 27.6514 62.6743 28.8131C62.6743 29.9749 63.6251 30.9261 64.7873 30.9261Z"
                  fill="#FA5D82"
                />
                <path
                  d="M64.7873 41.745H83.2128C84.375 41.745 85.3258 40.8154 85.3258 39.632C85.3258 38.4692 84.375 37.519 83.2128 37.519H64.7873C63.6251 37.519 62.6743 38.4692 62.6743 39.632C62.6743 40.8154 63.6251 41.745 64.7873 41.745Z"
                  fill="#FA5D82"
                />
                <path
                  d="M64.7873 52.5846H83.2128C84.375 52.5846 85.3258 51.6333 85.3258 50.4715C85.3258 49.3098 84.375 48.3585 83.2128 48.3585H64.7873C63.6251 48.3585 62.6743 49.3098 62.6743 50.4715C62.6743 51.6333 63.6251 52.5846 64.7873 52.5846Z"
                  fill="#FA5D82"
                />
                <path
                  d="M29.0987 83.3925C23.161 83.3925 18.3433 88.2097 18.3433 94.1474C18.3433 100.063 23.161 104.882 29.0987 104.882C35.0147 104.882 39.8325 100.063 39.8325 94.1474C39.8325 88.2097 35.0147 83.3925 29.0987 83.3925Z"
                  fill="#6E3D7A"
                />
                <path
                  d="M23.0973 63.4241H35.0991C38.0365 63.4241 40.4239 61.0366 40.4239 58.0992V32.0249C40.4239 29.0876 38.0365 26.7001 35.0991 26.7001H23.0973C20.1599 26.7001 17.7725 29.0876 17.7725 32.0249V58.0992C17.7725 61.0366 20.1599 63.4241 23.0973 63.4241V63.4241Z"
                  fill="#6E3D7A"
                />
                <path
                  d="M118.902 83.3925C112.985 83.3925 108.167 88.2097 108.167 94.1474C108.167 100.063 112.985 104.882 118.902 104.882C124.818 104.882 129.636 100.063 129.636 94.1474C129.636 88.2097 124.818 83.3925 118.902 83.3925Z"
                  fill="#6E3D7A"
                />
                <path
                  d="M74.0004 83.3925C68.0833 83.3925 63.2661 88.2097 63.2661 94.1474C63.2661 100.063 68.0833 104.882 74.0004 104.882C79.9164 104.882 84.7342 100.063 84.7342 94.1474C84.7342 88.2097 79.9164 83.3925 74.0004 83.3925Z"
                  fill="#6E3D7A"
                />
                <path
                  d="M112.901 63.4241H124.902C127.84 63.4241 130.227 61.0366 130.227 58.0992V32.0249C130.227 29.0876 127.84 26.7001 124.902 26.7001H112.901C109.963 26.7001 107.576 29.0876 107.576 32.0249V58.0992C107.576 61.0366 109.963 63.4241 112.901 63.4241Z"
                  fill="#6E3D7A"
                />
              </svg>
            </figure>
          )}

          <h2>{data.title}</h2>
          <p
            className={`mega-header__para ${
              data.frequency && "mega-header__para--explorer"
            }`}
          >
            {data.content}
          </p>
          {data.frequency && (
            <div className="mega-header__meta">
              <p>
                <strong>Frequency: </strong>
                {data.frequency}
              </p>
              <p>
                <strong>Type of Scheme: </strong>
                {data.type}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MegaHeader;
