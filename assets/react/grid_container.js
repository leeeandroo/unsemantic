/*global
module,
require
*/

// Dependencies.
var React = require('react')

// Define class.
var GridContainer = React.createClass({
  // Validation.
  propTypes: {
    children: React.PropTypes.node
  },

  // Render method.
  render: function () {
    var className = []

    if(this.props.className)
      className = this.props.className.split(' ')

    className.push('grid-container')
    className = className.join(' ')

    // Expose UI.
    return React.createElement(
      'div',
      {
        className: className
      },
      this.props.children
    )
  }
})

// Export.
module.exports = GridContainer
