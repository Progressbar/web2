// tslint:disable-next-line:no-submodule-imports
import en = require("react-intl/locale-data/en")
// tslint:disable-next-line:no-submodule-imports
import sk = require("react-intl/locale-data/sk")

const localeData = [
  ...en,
  ...sk
]

module.exports = {
  localeData,
  languages: [
    { value: "en", text: "English" },
    { value: "sk", text: "Slovenčina" },
  ]
}
