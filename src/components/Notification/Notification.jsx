import propTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css'


export const Notification = ({ message }) => {
    return (
        <h2 className={css.notification}>{message}</h2>
    )
}

Notification.propTypes = {
    message: propTypes.string.isRequired,
}