var React = require('react');
var {
  View,
  DatePickerIOS,
  PixelRatio
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');


module.exports = React.createClass({
  mixins: [WidgetMixin],

  getDefaultProps() {
    return {
      type: 'DatePickerIOSWidget',
      getDefaultDate: () => { return new Date(); }
    };
  },

  getInitialState() {
    return {
      value: new Date(),
    };
  },

  componentDidMount() {
    const value = this.props.getDefaultDate()
    this.props.onDateChange && this.props.onDateChange(value)
    this._onChange(value);
  },

  render() {
    return (
      <View style={this.getStyle('row')}>
        <DatePickerIOS
          style={this.getStyle('picker')}

          {...this.props}

          onDateChange={value => {
            this.props.onDateChange && this.props.onDateChange(value)
            this._onChange(value)
          }}
          date={this.state.value}
        />
      </View>
    );
  },

  defaultStyles: {
    row: {
      backgroundColor: '#FFF',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderColor: '#c8c7cc',
    },
    picker: {
    },
  },

});
