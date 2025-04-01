
import PropTypes from 'prop-types'
export const FirstApp = ({title, subtitle, name}) => {
  return (
    <>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <h3>{subtitle}</h3>
    </>
  )
}

FirstApp.ropTypes = {
  title:PropTypes.string.isRequired,
  subtitle:PropTypes.string.isRequired,
  name:PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Fede Altava',
  subtitle: 'No hay subtitulo',
  title: 'no hay titulo',
}
