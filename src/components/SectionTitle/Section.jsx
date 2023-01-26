import propTypes from 'prop-types';
import css from 'components/SectionTitle/Section.module.css'

export const Section = ({ title, children }) => {
    return (
        <div>
            <h2 className={css.title}>{title}</h2>
            {children}
        </div>
    )
}


Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.any.isRequired,
}