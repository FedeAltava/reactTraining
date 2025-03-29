import PropTypes from 'prop-types'
export const FirstApp = ({title}) => {
  return (
    <>
        <h1>{title}</h1>
        <p>el fede</p>
    </>
  )
}

FirstApp.PropTypes = {
  title:PropTypes.string
}
