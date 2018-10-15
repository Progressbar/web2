import * as React from "react"
import cx from "classnames"

import * as routes from "../../constants/routes"
import { title } from "../../constants/data"
import { Link } from "../Link"
import { Img } from "../Img"

import HeaderLogoLong from "../../../content/images/progressbar_1200dpi.png"

interface IProps {}

export const Header: React.SFC<IProps> = () => (
  <React.Fragment>
    <header className={cx("site-header")} role="banner">
      <div className={cx("site-header__inner", "container-wide")}>
        <div className={cx("site-header-logo")}>
          <Link to={routes.LANDING}>
            <Img src={HeaderLogoLong} alt={title} />
          </Link>
        </div>
        <nav className={cx("site-header-panel")} role="navigation">
          <div>
            <ul className={cx("main-nav")}>
              <li>
                <Link to={routes.COWORK}>Cowork</Link>
              </li>
              <li>
                <Link to={routes.EVENTS}>Events</Link>
              </li>
              <li>
                <Link to={routes.SPONSORS}>Sponsors</Link>
              </li>
              <li>
                <Link to={routes.CONTACT}>Contact</Link>
              </li>
              <li>
                <Link to={routes.DONATE}>Donate</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </React.Fragment>
)
