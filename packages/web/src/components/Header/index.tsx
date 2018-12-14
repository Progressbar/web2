import * as React from "react"
import cx from "classnames"

import * as routes from "../../constants/routes"
// import { title } from "../../constants/data"
import { Link } from "../Link"
import { ExternalLink } from "../ExternalLink"
// import { Img } from "../Img"
import { Button } from "../Button"

// import ProgressbarLogoLong from "../../../content/svgs/progressbar-logo-refresh.svg"

interface IProps {}

export const Header: React.SFC<IProps> = () => (
  <React.Fragment>
    <header className={cx("site-header")} role="banner">
      <div className={cx("site-header__inner", "container-wide")}>
        <div className={cx("site-header-logo")}>
          <Link to={routes.LANDING} className={cx("text-white")}>
            {/* <ProgressbarLogoLong /> */}
          </Link>
        </div>
        <nav className={cx("site-header-panel")} role="navigation">
          <div>
            <ul className={cx("main-nav")}>
              <li>
                <ExternalLink href={routes.EXTERNAL_COWORK}>Cowork</ExternalLink>
              </li>
              <li>
                <Link to={routes.SPACE}>Space</Link>
              </li>
              <li>
                <ExternalLink href={routes.EXTERNAL_EVENTS}>Events</ExternalLink>
              </li>
              <li>
                <Link to={routes.SPONSORS}>Sponsors</Link>
              </li>
              <li>
                <Link to={routes.CONTACT}>Contact</Link>
              </li>
              <li>
                <Link to={routes.PROJECTS}>Projects</Link>
              </li>
              <li>
                <ExternalLink href={routes.EXTERNAL_DONATE}>Donate</ExternalLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className={cx("site-header-login")}>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  </React.Fragment>
)
