import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dk4cta7l7/image/upload/v1626856193/omega-copy-2_k2y31n.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-link">demos</li>

          <li className="nav-link">Pages</li>

          <li className="nav-link">support</li>
        </ul>
        <button type="button" className="BG" onClick={onClickLogout}>
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
