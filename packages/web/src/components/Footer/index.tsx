import * as React from "react"
import cx from "classnames"

import * as routes from "../../constants/routes"
import { emailInfo, emailEvents } from "../../constants/data"
import { ExternalLink } from "../ExternalLink"

interface IProps {}

export const Footer: React.SFC<IProps> = () => (
  <React.Fragment>
    <footer className={cx("site-footer")} role="contentinfo">
      <div className={cx("container-wide")}>
        <figure
          className={cx("m-0", "p-0", "d-none", "d-md-flex", "flex-items-center", "flex-auto")}
        />
        <ul className={cx("site-footer-nav", "flex-auto")}>
          <li>
            <ExternalLink href={routes.CULTURECOC}>Culture</ExternalLink>
          </li>
          <li>
            <ExternalLink href={routes.PRESSKIT}>Presskit</ExternalLink>
          </li>
          <li>
            <ExternalLink href={routes.PIP}>Ideas</ExternalLink>
          </li>
          <li>
            <ExternalLink href={routes.SPACEMAP}>Space</ExternalLink>
          </li>
          <li>
            <ExternalLink href={`mailto:${emailEvents}`}>{emailEvents}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={`mailto:${emailInfo}`}>{emailInfo}</ExternalLink>
          </li>
        </ul>
      </div>
      <div className={cx("container-wide", "site-footer__extra")}>
        <div className={cx("site-footer-social")}>
          <ul>
            <li>
              <ExternalLink href={routes.INSTAGRAM}>Instagram</ExternalLink>
            </li>
            <li>
              <ExternalLink href={routes.FACEBOOK}>Facebook</ExternalLink>
            </li>
          </ul>
          <small>Progressbar</small>
        </div>
        <div className={cx("d-flex", "flex-items-center", "flex-justify-center", "mt-5")}>
          <ExternalLink href={routes.AUTHORS}>Made with love by Progressbar members</ExternalLink>
        </div>
      </div>
    </footer>
  </React.Fragment>
)
