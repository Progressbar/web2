import * as React from "react"
import cx from "classnames"
import { faHeart, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faGithub,
  faFacebook,
  faTelegram,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons"

import * as routes from "../../constants/routes"
import { emailInfo, emailEvents } from "../../constants/data"
import { ExternalLink } from "../ExternalLink"
import { Icon } from "../Icon"

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
            <ExternalLink href={routes.SPACEMAP}>Map</ExternalLink>
          </li>
        </ul>
      </div>
      <div className={cx("container-wide", "mt-2")}>
        <figure
          className={cx("m-0", "p-0", "d-none", "d-md-flex", "flex-items-center", "flex-auto")}
        />
        <ul className={cx("site-footer-nav", "flex-auto")}>
          <li>
            <ExternalLink href={routes.TELEGRAM}>
              <Icon icon={faTelegram} title="Telegram" className={cx("text-telegram")} /> Telegram
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={routes.MESSENGER}>
              <Icon icon={faFacebookMessenger} title="Messenger" className={cx("text-messenger")} />{" "}
              Messenger
            </ExternalLink>
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
              <ExternalLink href={routes.INSTAGRAM}>
                <Icon icon={faInstagram} title="Instagram" className={cx("text-instagram")} />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={routes.GITHUB}>
                <Icon icon={faGithub} title="GitHub" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={routes.FACEBOOK}>
                <Icon icon={faFacebook} title="Facebook" className={cx("text-facebook")} />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={routes.GMAPS}>
                <Icon icon={faMapMarkedAlt} title="Google Maps" className={cx("text-gmaps")} />
              </ExternalLink>
            </li>
          </ul>
          <small>{new Date().getFullYear()} © Progressbar</small>
        </div>
        <div className={cx("d-flex", "flex-items-center", "flex-justify-center", "mt-3")}>
          <small>
            Made with <Icon icon={faHeart} title="love" className={cx("text-love")} /> by
            Progressbar <ExternalLink href={routes.AUTHORS}>members</ExternalLink>
          </small>
        </div>
      </div>
    </footer>
  </React.Fragment>
)
