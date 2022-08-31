import Button from "./Button";

import { House, MessengerLogo, RocketLaunch } from "phosphor-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 translate-y-2 bg-stone-900/80 border border-stone-800 p-3 rounded-lg">
      <div className="flex gap-2">
        <Link href="/">
          <a>
            <Button>
              <House size={32} weight="duotone" />
            </Button>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Button>
              <RocketLaunch size={32} weight="duotone" />
            </Button>
          </a>
        </Link>
        <Link href="/streams">
          <a>
            <Button>
              <MessengerLogo size={32} weight="duotone" />
            </Button>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
