import { Link } from 'react-router-dom';

function SettingsLink() {
  return (
    <div className='linkSettingsPage'>
      <Link to='/settings'>
        SettingLink
      </Link>
    </div>
  )
}
export default SettingsLink;