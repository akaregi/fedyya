
import { config, dom, library } from '@fortawesome/fontawesome-svg-core'
import { faBlog, faMoon, faIcons, faBoxes } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faMastodon, faInstagram, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

library.add(faBlog, faMoon, faIcons, faBoxes)
library.add(faTwitter, faMastodon, faInstagram, faGithub, faGitlab)
dom.i2svg()
