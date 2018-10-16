import * as React from "react"
import { FontAwesomeIcon, Props as FAIconProps } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"

interface IProps extends FAIconProps {}

export const Icon: React.SFC<IProps> = ({ icon = faQuestion, ...rest }) => (
  <React.Fragment>
    <FontAwesomeIcon icon={icon} {...rest} />
  </React.Fragment>
)
